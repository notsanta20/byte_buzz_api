const { PrismaClient } = require(`@prisma/client`);
const prisma = new PrismaClient();

async function postsGet(req, res) {
  const { postId } = req.params;

  const post = await prisma.posts.findFirst({
    where: {
      id: postId,
    },
    include: {
      comments: true,
      author: true,
      comments: {
        include: {
          Users: true,
        },
      },
    },
  });

  if (post) {
    res.json({
      message: `Posts`,
      auth: req.authorization,
      user: req.user,
      post: post,
    });
  } else {
    res.json({ message: `Post not found` });
  }
}

module.exports = postsGet;
