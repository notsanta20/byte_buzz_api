function error404(req, res) {
  res.status(404).json({ message: `404 page not found` });
}

module.exports = error404;
