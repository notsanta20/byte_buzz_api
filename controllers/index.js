const date = require(`../configs/getDate`);
const { PrismaClient } = require(`@prisma/client`);
const prisma = new PrismaClient();

async function index(req, res) {
  const time = date();
  try {
    const data = await prisma.posts.findMany({
      select: {
        id: true,
        title: true,
        article: true,
        createdAt: true,
        authorId: true,
        _count: {
          select: {
            comments: true,
          },
        },
      },
      orderBy: [
        {
          createdAt: `desc`,
        },
      ],
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
