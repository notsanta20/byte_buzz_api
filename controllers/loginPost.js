const jwt = require(`jsonwebtoken`);
require(`dotenv`).config();

function loginPost(req, res) {
  //check authorization

  console.log(req.body);

  const user = {
    id: 1,
    username: `user1`,
  };

  jwt.sign(
    { user: user },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: `1m` },
    (err, token) => {
      if (err) {
        res.status(401).json({ message: `Unauthorized entry!!` });
      }

      res.json({
        message: `valid credentials`,
        token: token,
      });
    }
  );
}

module.exports = loginPost;
