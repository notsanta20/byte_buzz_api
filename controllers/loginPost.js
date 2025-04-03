const { PrismaClient } = require(`@prisma/client`);
const prisma = new PrismaClient();
const pass = require(`../configs/passwordHash`).verifyPass;
const jwt = require(`jsonwebtoken`);
require(`dotenv`).config();

async function loginPost(req, res) {
  try {
    if (!req.authorization) {
      const { username, password } = req.body;

      const userVerify = await prisma.users.findFirst({
        where: {
          username: username,
        },
      });

      if (!userVerify) {
        res.status(401).json({ message: `Username does not exists` });
        return;
      }
      const passVerify = pass(password, userVerify.salt, userVerify.hash);

      if (!passVerify) {
        res.status(401).json({ message: `invalid Password` });
        return;
      }

      const tokenUser = {
        id: userVerify.id,
        username: userVerify.username,
      };

      jwt.sign(
        { user: tokenUser },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: `10m` },
        (err, token) => {
          if (err) {
            res.status(401).json({ message: `Unauthorized entry!!` });
          }

          res.json({
            message: `valid credentials`,
            auth: req.authorization,
            token: token,
          });
        }
      );
    } else {
      res.json({ message: `Already logged in` });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: `Failed to login, Internal server error, try again`,
      error: err,
    });
  }
}

module.exports = loginPost;
