const jwt = require(`jsonwebtoken`);
require(`dotenv`).config();

function verifyToken(req, res, next) {
  const token = req.token;

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, authData) => {
    if (err) {
      res.status(401).json({ message: `Unauthorized` });
    } else {
      console.log(authData);
      req.user = authData.user;
      next();
    }
  });
}

module.exports = verifyToken;
