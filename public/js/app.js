var route = new FMRoute();

route.get('/', function (vars, next) {
    App.selectPage(false);
    setTimeout(function () {
        App.slide('.slideshow-list');
    }, 300);
    next();
});

route.get('/item/:itemId', function (vars, next) {
    App.selectItem(vars.itemId);
    App.selectPage('item');
    setTimeout(function () {
        App.slide('.slideshow-item');
    }, 300);
    next();
});

route.get('/info', function (vars, next) {
    App.selectPage('info');
    next();
});

route.error('404', function (vars, next) {
    next();
});

var App = new Vue({
    el: '#AppVue',
    data: {
        pages: {
            item: {
                active: false,
            },
            info: {
                active: false,
            },
        },
        client: client,
        item: {},
    },
    methods: {
        selectPage: function (page) {
            for (var i in App.pages) {
                App.pages[i].active = false;
            }

            if (page) {
                App.pages[page].active = true;
            }
        },
        selectItem: function (itemId) {
            var item = App.getItemById(itemId);

            if (!item) {
                alert('Item não encontrado');
            }

            App.item = item;
        },
        getItemById: function (itemId) {
            for (var i in App.client.categories) {
                var category = App.client.categories[i];

                for (var j in category.items) {
                    var item = category.items[j];

                    if (item.id == itemId) {
                        return item;
                    }
                }
            }

            return null;
        },
        slide: function (className) {
            if ($('.slideshow-list').attr('data-start') == '1') $('.slideshow-list').slick('unslick');
            if ($('.slideshow-item').attr('data-start') == '1') $('.slideshow-item').slick('unslick');

            $(className).slick({
                autoplay: true,
                arrows: false,
            }).attr('data-start', '1');
        },
        init: function () {
            route.run();
        },
    },
});

App.init();