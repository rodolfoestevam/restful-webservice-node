var bookController = function (Book) {

    var post = function (req, res) {
        var book = new Book(req.book);

        book.save();
        res.status(201).send(book);

    }
    var get = function (req, res) {

        var query = {};
        if (req.query.genre) {
            query.genre = req.query.genre;
        }
        Book.find(query, function (err, books) {
            if (err)
                res.status(500).send(err);
            else
                res.json(books);
        });
    }
    return {
        post: post,
        get: get
    }
}

module.exports = bookController;