function loginGet(req, res) {
  res.json({
    message: `Login page`,
    auth: req.authorization,
  });
}

module.exports = loginGet;
