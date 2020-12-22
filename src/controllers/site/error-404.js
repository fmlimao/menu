module.exports = (req, res, next) => {
    return res.render('site/error-404', {
        layout: 'site/layout',
        extractScripts: true,
    });
};
