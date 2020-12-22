module.exports = (req, res) => {
    a();
    return res.render('site/index', {
        layout: 'site/layout',
        extractScripts: true,
    });
};
