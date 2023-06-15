const home = (req, res) => {
    return res.render('home', { title: 'Home Page'});
    // layout: false
};

module.exports = {
    home
}