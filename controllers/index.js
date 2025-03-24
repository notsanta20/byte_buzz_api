const date = require(`../configs/getDate`);
const { PrismaClient } = require(`@prisma/client`);
const prisma = new PrismaClient();

async function index(req, res) {
  const time = date();
  try {
    const data = await prisma.posts.findMany({
      select: {
        title: true,
        image: true,
        createdAt: true,
        _count: {
          select: {
            comments: true,
          },
        },
      },
    });
    res.json({
      message: `Hello, world!`,
      time: {
        day: time.day,
        date: time.date,
      },
      auth: req.authorization,
      user: req.user,
      posts: data,
    });
  } catch (err) {
    console.log(err);
    res.json({
      message: `failed to load resources, try again in sometime`,
    });
  }
}

module.exports = index;
