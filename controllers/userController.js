const profile = (req, res) => {
    return res.render('profile', { title: 'Profile Page'});
}

module.exports = {
    profile
}