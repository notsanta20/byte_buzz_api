const date = require(`../configs/getDate`);
const { PrismaClient } = require(`@prisma/client`);
const prisma = new PrismaClient();

async function postsPost(req, res) {
  try {
    const time = date();
    if (req.authorization) {
      res.json({ message: `Login to post` });
    } else {
      const { authorId, title, article, image } = req.body;

      await prisma.posts.create({
        data: {
          title: title,
          article: article,
          image: image,
          authorId: authorId,
        },
      });

      res.json({
        message: `Posted successfully`,
        time: {
          day: time.day,
          date: time.date,
        },
        auth: req.authorization,
        user: req.user,
      });
    }
  } catch (err) {
    res.json({ message: `Failed to post the article, try again`, error: err });
  }
}

module.exports = postsPost;
