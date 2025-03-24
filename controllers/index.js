const { tr } = require("date-fns/locale");
const date = require(`../configs/getDate`);
const { PrismaClient } = require(`@prisma/client`);
const prisma = new PrismaClient();

async function index(req, res) {
  const time = date();
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
    auth: false,
    posts: data,
  });
}

module.exports = index;
