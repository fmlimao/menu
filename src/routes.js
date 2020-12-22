const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const router = express.Router();

router.use('/', expressLayouts);

// Site
router.get('/', require('./controllers/site/home'));
router.get('/about', require('./controllers/site/about'));

// Banco de testes
const clients = {
    'cliente-xpto': {
        id: 14,
        slug: 'cliente-xpto',
        name: 'Cliente XPTO',
        categories: [

            {
                id: 1,
                name: 'Lanches',
                items: [

                    {
                        id: 1,
                        name: 'Lanche 1',
                        price: 10.99,
                    },
                    {
                        id: 2,
                        name: 'Lanche 2',
                        price: 20.99,
                    },

                ],
            },

            {
                id: 2,
                name: 'Bebidas',
                items: [

                    {
                        id: 3,
                        name: 'Bebida 1',
                        price: 10.99,
                    },
                    {
                        id: 4,
                        name: 'Bebida 2',
                        price: 20.99,
                    },

                ],
            },

        ],
    },
};

// Cliente
router.get('/:client_slug', (req, res, next) => {
    const { client_slug } = req.params;

    if (!clients[client_slug]) {
        return res.render('site/error-404', {
            layout: 'site/layout',
        });
    }

    res.locals.client = clients[client_slug];
    res.locals.clientJson = JSON.stringify(clients[client_slug]);

    next();
}, require('./controllers/client/home'));

// Erros
router.use(require('./controllers/site/error-404'));
router.use(require('./controllers/site/error-500'));

module.exports = router;
