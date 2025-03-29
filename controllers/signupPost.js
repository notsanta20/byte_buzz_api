const getHash = require(`../configs/passwordHash`).generateHash;
const { PrismaClient } = require(`@prisma/client`);
const prisma = new PrismaClient();

async function signupPost(req, res) {
  const { username, password } = req.body;
  const pass = getHash(password);

  try {
    const checkUser = await prisma.users.findFirst({
      where: {
        username: username,
      },
    });
    if (!checkUser) {
      await prisma.users.create({
        data: {
          username: username,
          salt: pass.salt,
          hash: pass.hash,
        },
      });
    } else {
      throw new Error(`Username already exists`);
    }
    res.json({
      message: `Registered Successfully`,
      auth: false,
    });
  } catch (err) {
    res.status(401).json({
      message: `Failed to register, try again`,
      error:
        err.message === `Username already exists`
          ? `Username already exists`
          : err,
    });
  }
}

module.exports = signupPost;
