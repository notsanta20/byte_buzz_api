const jwt = require(`jsonwebtoken`);
require(`dotenv`).config();

function getToken(req, res, next) {
  const bearerHeader = req.headers[`authorization`];

  if (typeof bearerHeader !== `undefined`) {
    const bearer = bearerHeader.split(` `)[1];
    req.token = bearer;
  } else {
    req.authorization = false;
  }
  next();
}

function verifyToken(req, res, next) {
  const token = req.token;

  if (token) {
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, authData) => {
      if (err) {
        req.authorization = false;
      } else {
        req.authorization = true;
        req.user = authData.user;
      }
    });
  } else {
    req.authorization = false;
  }

  next();
}

module.exports = { getToken, verifyToken };
