module.exports = (err, req, res, next) => {
    return res.render('site/error-500', {
        layout: 'site/layout',
        extractScripts: true,
    });
};
