var FMRoute = (function () {
    function FMRoute() {
        this.routes = [];
        this.previous_route = null;
        this.current_route = null;
        this.default_callback = {
            '404': function (vars, next, route) {
                console.dir(route + ': 404 NOT FOUND');
                next();
            },
            'before': function (vars, next, route) {
                next();
            },
            'after': function (vars, route) { },
        };
        this.block = false;
    }

    FMRoute.prototype = {
        get: function (path, callback_enter, callback_exit) {
            callback_enter = callback_enter || function (vars, next) {
                next();
            };
            callback_exit = callback_exit || function (vars, next) {
                next();
            };

            path = this.clearPath(path);
            path_elements = this.splitPath(path);
            path = '/' + path;

            var route = {
                path: path,
                path_elements: path_elements,
                callback_enter: callback_enter,
                callback_exit: callback_exit,
            };

            this.routes.push(route);
        },
        run: function () {
            this.clearPathname();
            this.startHashListener();
            this.getCurrentHash();
        },
        stop: function () {
            this.block = true;
        },
        start: function () {
            this.block = false;
        },
        clearPathname: function () {
            var pathname = window.location.pathname
                .split('/')
                .reduce(function (a, c) {
                    if (c.trim() != '') a.push(c.trim());
                    return a;
                }, []);

            if (pathname.length == 0) pathname = '/';
            else pathname = `/${pathname.join('/')}/`;

            if (window.location.pathname != pathname) window.history.pushState('/', document.title, pathname);
        },
        startHashListener: function () {
            var _ = this;
            window.addEventListener('hashchange', function () {
                _.getCurrentHash();
            }, false);
        },
        getCurrentHash: function () {
            if (!this.block) {
                var current_hash = window.location.hash;
                if (current_hash == '') {
                    window.location.hash = '/';
                } else {
                    this.changePreviousCurrentRoute(current_hash);
                    this.executeRoutes();
                }
            }
        },
        executeRoutes: function () {
            var _ = this;
            var before_callback = this.default_callback['before'];
            var after_callback = this.default_callback['after'];
            var exit_callback = this.getExitCallback();
            var enter_callback = this.getEnterCallback();

            before_callback(enter_callback[1], function () {
                exit_callback[0](exit_callback[1], function () {
                    enter_callback[0](enter_callback[1], function () {
                        after_callback(enter_callback[1], _.current_route);
                    }, _.current_route);
                });
            }, _.current_route);
        },
        clearPath: function (path) {
            path = path.trim();
            path = path.replace('#', '');

            if (path.substring(0, 1) == '/') {
                path = path.substring(1);
            }

            if (path.slice(-1) == '/') {
                path = path.slice(0, -1);
            }

            return path;
        },
        splitPath: function (path) {
            path = path.split('/');
            return path;
        },
        changePreviousCurrentRoute: function (current_path) {
            this.previous_route = this.current_route;
            this.current_route = current_path;
        },
        getExitCallback: function () {
            var callback = function (vars, next) {
                next();
            };

            var vars = {};

            if (this.previous_route) {
                var path_exists = this.checkPathExists(this.previous_route);

                if (path_exists) {
                    callback = path_exists[0].callback_exit;
                    vars = path_exists[1];
                }
            }

            return [
                callback,
                vars,
            ];
        },
        getEnterCallback: function () {
            var _ = this;
            var callback = this.default_callback['404'];
            var vars = {};

            if (this.current_route) {
                var path_exists = this.checkPathExists(this.current_route);

                if (path_exists) {
                    callback = path_exists[0].callback_enter;
                    vars = path_exists[1];
                }
            }

            return [
                callback,
                vars,
            ];
        },
        checkPathExists: function (current_hash) {
            var path = this.clearPath(current_hash);
            path = this.splitPath(path);

            var exists = null;
            var routes = this.routes;
            for (var i in routes) {
                var route = routes[i];
                if (route.path_elements.length == path.length) {
                    var equal = true;
                    var vars = {};
                    for (var j in route.path_elements) {
                        var route_path_item = route.path_elements[j];
                        var is_path_var = this.isPathVar(route_path_item);
                        if (is_path_var) {
                            vars[is_path_var] = path[j];
                        } else {
                            if (route_path_item != path[j]) {
                                equal = false;
                            }
                        }
                    }

                    if (equal) {
                        exists = [route, vars];
                        break;
                    }
                }
            };
            return exists;
        },
        isPathVar: function (item) {
            if (item.substring(0, 1) == ':') {
                return item.substring(1);
            }
            return false;
        },
        error: function (code, callback) {
            this.default_callback[code] = callback;
        },
        before: function (callback) {
            this.default_callback['before'] = callback;
        },
        after: function (callback) {
            this.default_callback['after'] = callback;
        },
        go: function (route) {
            window.location.hash = route;
        },
    };

    return FMRoute;
})();