module.exports = {
  getBooks: (req, res, next) => {
    const dbInstance = req.app.get('db');

    dbInstance
      .get_books()
      .then(response => {
        res.status(200).json(response);
      })
      .catch(error => console.log(error));
  }
};
