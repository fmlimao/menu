module.exports = (req, res) => {
    return res.render('site/home', {
        layout: 'site/layout',
        extractScripts: true,
    });
};
