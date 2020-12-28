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
        address: 'Rua A, 123, Centro, São Paulo/SP - CEP 01333-000',
        opened: true,
        payments: ['Dinheiro', 'Cartão de Crédito', 'Cartão de Débito'],
        categories: [

            {
                id: 1,
                name: 'Lanches',
                items: [

                    {
                        id: 1,
                        name: 'Lanche 1',
                        description: 'Laborum elit ullamco eiusmod cupidatat pariatur.',
                        price: 50.00,
                        priceFormatted: '10,99',
                        images: {
                            '120x120': [
                                '/img/food-120-120-1.jpg',
                                '/img/food-120-120-2.jpg',
                                '/img/food-120-120-3.jpg',
                                '/img/food-120-120-4.jpg',
                            ],
                            '720x240': [
                                '/img/food-720-240-1.jpg',
                                '/img/food-720-240-2.jpg',
                                '/img/food-720-240-3.jpg',
                                '/img/food-720-240-4.jpg',
                            ],
                        },
                        selectors: [

                            {
                                title: 'Seletor 3 com preço',
                                description: 'Escolha até 3 opções',
                                required: false,
                                min: 0,
                                max: 3,
                                items: [
                                    {
                                        title: '3 :: Opt 1',
                                        description: '',
                                        type: 'checkbox',
                                        selected: false,
                                        hasPrice: true,
                                        price: 10.00,
                                        priceFormatted: '10,00',
                                    },
                                    {
                                        title: '3 :: Opt 2',
                                        description: '',
                                        type: 'checkbox',
                                        selected: true,
                                        hasPrice: true,
                                        price: 2.00,
                                        priceFormatted: '2,00',
                                    },
                                    {
                                        title: '3 :: Opt 3',
                                        description: '',
                                        type: 'checkbox',
                                        selected: false,
                                        hasPrice: true,
                                        price: 3.00,
                                        priceFormatted: '3,00',
                                    },
                                    {
                                        title: '3 :: Opt 4',
                                        description: '',
                                        type: 'checkbox',
                                        selected: false,
                                        hasPrice: true,
                                        price: 4.00,
                                        priceFormatted: '4,00',
                                    },
                                    {
                                        title: '3 :: Opt 5',
                                        description: '',
                                        type: 'checkbox',
                                        selected: false,
                                        hasPrice: true,
                                        price: 5.00,
                                        priceFormatted: '5,00',
                                    },
                                ],
                            },

                            {
                                title: 'Seletor 2',
                                description: 'Escolha de 2 até 4 opções',
                                required: true,
                                min: 2,
                                max: 4,
                                items: [
                                    {
                                        title: '2 :: Opt 1',
                                        description: '',
                                        type: 'checkbox',
                                        selected: false,
                                        hasPrice: false,
                                        price: null,
                                        priceFormatted: null,
                                    },
                                    {
                                        title: '2 :: Opt 2',
                                        description: '',
                                        type: 'checkbox',
                                        selected: false,
                                        hasPrice: false,
                                        price: null,
                                        priceFormatted: null,
                                    },
                                    {
                                        title: '2 :: Opt 3',
                                        description: '',
                                        type: 'checkbox',
                                        selected: false,
                                        hasPrice: false,
                                        price: null,
                                        priceFormatted: null,
                                    },
                                    {
                                        title: '2 :: Opt 4',
                                        description: '',
                                        type: 'checkbox',
                                        selected: false,
                                        hasPrice: false,
                                        price: null,
                                        priceFormatted: null,
                                    },
                                    {
                                        title: '2 :: Opt 5',
                                        description: '',
                                        type: 'checkbox',
                                        selected: false,
                                        hasPrice: false,
                                        price: null,
                                        priceFormatted: null,
                                    },
                                ],
                            },

                            {
                                title: 'Seletor 1',
                                description: 'Escolha 1 opção',
                                required: true,
                                min: 1,
                                max: 1,
                                items: [
                                    {
                                        title: '1 :: Opt 1',
                                        description: '',
                                        type: 'radio',
                                        selected: false,
                                        hasPrice: false,
                                        price: null,
                                        priceFormatted: null,
                                    },
                                    {
                                        title: '1 :: Opt 2',
                                        description: '',
                                        type: 'radio',
                                        selected: false,
                                        hasPrice: false,
                                        price: null,
                                        priceFormatted: null,
                                    },
                                    {
                                        title: '1 :: Opt 3',
                                        description: '',
                                        type: 'radio',
                                        selected: false,
                                        hasPrice: false,
                                        price: null,
                                        priceFormatted: null,
                                    },
                                    {
                                        title: '1 :: Opt 4',
                                        description: '',
                                        type: 'radio',
                                        selected: false,
                                        hasPrice: false,
                                        price: null,
                                        priceFormatted: null,
                                    },
                                    {
                                        title: '1 :: Opt 5',
                                        description: '',
                                        type: 'radio',
                                        selected: false,
                                        hasPrice: false,
                                        price: null,
                                        priceFormatted: null,
                                    },
                                ],
                            },

                        ],
                    },

                    {
                        id: 2,
                        name: 'Lanche 2',
                        description: 'Laborum elit ullamco eiusmod cupidatat pariatur.',
                        price: 20.99,
                        priceFormatted: '20,99',
                        images: {
                            '120x120': [
                                '/img/food-120-120-1.jpg',
                                '/img/food-120-120-2.jpg',
                                '/img/food-120-120-3.jpg',
                                '/img/food-120-120-4.jpg',
                            ],
                            '720x240': [
                                '/img/food-720-240-1.jpg',
                                '/img/food-720-240-2.jpg',
                                '/img/food-720-240-3.jpg',
                                '/img/food-720-240-4.jpg',
                            ],
                        },
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
                        description: 'Laborum elit ullamco eiusmod cupidatat pariatur.',
                        price: 10.99,
                        priceFormatted: '10,99',
                        images: {
                            '120x120': [
                                '/img/food-120-120-1.jpg',
                                '/img/food-120-120-2.jpg',
                                '/img/food-120-120-3.jpg',
                                '/img/food-120-120-4.jpg',
                            ],
                            '720x240': [
                                '/img/food-720-240-1.jpg',
                                '/img/food-720-240-2.jpg',
                                '/img/food-720-240-3.jpg',
                                '/img/food-720-240-4.jpg',
                            ],
                        },
                    },
                    {
                        id: 4,
                        name: 'Bebida 2',
                        description: 'Laborum elit ullamco eiusmod cupidatat pariatur.',
                        price: 20.99,
                        priceFormatted: '20,99',
                        images: {
                            '120x120': [
                                '/img/food-120-120-1.jpg',
                                '/img/food-120-120-2.jpg',
                                '/img/food-120-120-3.jpg',
                                '/img/food-120-120-4.jpg',
                            ],
                            '720x240': [
                                '/img/food-720-240-1.jpg',
                                '/img/food-720-240-2.jpg',
                                '/img/food-720-240-3.jpg',
                                '/img/food-720-240-4.jpg',
                            ],
                        },
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
