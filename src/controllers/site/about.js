module.exports = (req, res) => {
    return res.render('site/about', {
        layout: 'site/layout',
        extractScripts: true,
    });
};
