const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const router = express.Router();

router.use('/', expressLayouts);

// Site
router.get('/', require('./controllers/site/home'));
router.get('/about', require('./controllers/site/about'));

// Erros
router.use(require('./controllers/site/error-404'));
router.use(require('./controllers/site/error-500'));

module.exports = router;
