const date = require(`../configs/getDate`);
const { PrismaClient } = require(`@prisma/client`);
const prisma = new PrismaClient();

async function postsGet(req, res) {
  const time = date();
  const { postId } = req.params;

  const post = await prisma.posts.findFirst({
    where: {
      id: postId,
    },
    include: {
      comments: true,
    },
  });

  if (post) {
    res.json({
      message: `Posts`,
      time: {
        day: time.day,
        date: time.date,
      },
      auth: req.authorization,
      user: req.user,
      post: post,
    });
  } else {
    res.json({ message: `Post not found` });
  }
}

module.exports = postsGet;
