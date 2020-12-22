var route = new FMRoute();

route.get('/', function (vars, next) {
    console.log('/', vars);
    App.pages.item.active = false;
    next();
});

route.get('/item/:itemId', function (vars, next) {
    console.log('/item/:itemId', vars);
    App.selectItem(vars.itemId);
    next();
});

route.error('404', function (vars, next) {
    console.log('404', vars);
    next();
});

var App = new Vue({
    el: '#AppVue',
    data: {
        pages: {
            item: {
                active: false,
            },
        },
        client: client,
        item: {},
    },
    methods: {
        selectItem: function (itemId) {
            var item = App.getItemById(itemId);

            if (!item) {
                alert('Item não encontrado');
            }

            App.item = item;
            App.pages.item.active = true;
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
        init: function () {
            route.run();
        },
    },
});

App.init();