module.exports = (err, req, res, next) => {
    console.log('err', err.message);
    return res.render('site/error-500', {
        layout: 'site/layout',
        extractScripts: true,
    });
};
