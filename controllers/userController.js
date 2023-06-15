const profile = (req, res) => {
    return res.render('profile', { title: 'Profile Page'});
    // extractStyles: true, extractScripts: true
}

module.exports = {
    profile
}