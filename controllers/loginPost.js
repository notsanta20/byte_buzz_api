const date = require(`../configs/getDate`);
const { PrismaClient } = require(`@prisma/client`);
const prisma = new PrismaClient();
const pass = require(`../configs/passwordHash`).verifyPass;
const jwt = require(`jsonwebtoken`);
require(`dotenv`).config();

async function loginPost(req, res) {
  try {
    const time = date();
    const { username, password } = req.body;

    const userVerify = await prisma.users.findFirst({
      where: {
        username: username,
      },
    });

    if (!userVerify) {
      res.json({ message: `Username does not exists` });
    }

    const passVerify = pass(password, userVerify.salt, userVerify.hash);

    if (!passVerify) {
      res.json({ message: `invalid Password` });
    }

    jwt.sign(
      { user: userVerify },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: `1m` },
      (err, token) => {
        if (err) {
          res.status(401).json({ message: `Unauthorized entry!!` });
        }

        res.json({
          message: `valid credentials`,
          time: {
            day: time.day,
            date: time.date,
          },
          auth: false,
          token: token,
        });
      }
    );
  } catch (err) {
    res.json({ message: `Failed to login, try again`, error: err });
  }
}

module.exports = loginPost;
