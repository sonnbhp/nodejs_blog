class NewsController {
    //[GET] /news
    index (req, res) {
        res.render('news');
    }
    //[GET] /news/:slug
    show(req,res) {
        res.send("Chi tiết tin tức")
    }
}
 module.exports = new NewsController