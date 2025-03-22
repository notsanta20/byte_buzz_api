function postsGet(req, res) {
  res.json({ message: `Success`, user: req.user });
}

module.exports = postsGet;
