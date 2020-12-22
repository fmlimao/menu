module.exports = (req, res) => {
    const { client_slug } = req.params;

    return res.render('client/home', {
        layout: 'client/layout',
        extractScripts: true,
        client_slug,
    });
};
