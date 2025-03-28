const getHash = require(`../configs/passwordHash`).generateHash;
const { PrismaClient } = require(`@prisma/client`);
const prisma = new PrismaClient();

async function signupPost(req, res) {
  const { username, password } = req.body;
  const pass = getHash(password);
  try {
    await prisma.users.create({
      data: {
        username: username,
        salt: pass.salt,
        hash: pass.hash,
      },
    });
    res.json({
      message: `Registered Successfully`,
      auth: false,
    });
  } catch (err) {
    res.json({
      message: `Failed to register, try again`,
      error: err,
    });
  }
}

module.exports = signupPost;
