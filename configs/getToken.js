function getToken(req, res, next) {
  const bearerHeader = req.headers[`authorization`];
  if (typeof bearerHeader !== `undefined`) {
    const bearer = bearerHeader.split(` `)[1];
    req.token = bearer;
    next();
  } else {
    res.status(403).json({ message: `Forbidden` });
  }
}

module.exports = getToken;
