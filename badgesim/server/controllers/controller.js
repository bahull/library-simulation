module.exports = {
  login: (req, res, next) => {
    console.log("hit controller");
    const dbInstance = req.app.get("db");
    const { username, password } = req.body;

    dbInstance
      .add_user([username, password])
      .then(response => {
        res.send(response);
      })
      .catch(console.log, "het");
  }
};
