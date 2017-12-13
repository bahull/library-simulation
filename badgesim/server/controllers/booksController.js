module.exports = {
  getBooks: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const { username, password } = req.body;

    dbInstance
      .add_user([username, password])
      .then(response => {
        res
          .status(200)
          .json({ responseU: response[0].username, responseI: response[0].id });
      })
      .catch(error => res.status(200).send({ noEntry: 'true' }));
  }
};
