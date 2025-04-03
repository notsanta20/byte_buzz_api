const { PrismaClient } = require(`@prisma/client`);
const prisma = new PrismaClient();

async function postsPost(req, res) {
  try {
    if (!req.authorization) {
      res.status(401).json({ message: `Login to post` });
    } else {
      const { title, article } = req.body;

      await prisma.posts.create({
        data: {
          title: title,
          article: article,
          authorId: req.user.id,
        },
      });

      res.json({
        message: `Posted successfully`,
        auth: req.authorization,
        user: req.user,
      });
    }
  } catch (err) {
    res
      .status(501)
      .json({ message: `Failed to post the article, try again`, error: err });
  }
}

module.exports = postsPost;
