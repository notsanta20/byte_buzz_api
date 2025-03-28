function signupGet(req, res) {
  res.json({
    message: `Signup page`,
    auth: req.authorization,
  });
}

module.exports = signupGet;
