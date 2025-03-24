const date = require(`../configs/getDate`);
const { PrismaClient } = require(`@prisma/client`);
const prisma = new PrismaClient();

async function commentsPost(req, res) {
  try {
    const time = date();

    if (req.authorization) {
      const { postId } = req.params;
      const { comment } = req.body;

      await prisma.comments.create({
        data: {
          comment: comment,
          usersId: req.user.id,
          postsId: postId,
        },
      });

      res.json({
        message: `comment posted successfully`,
        time: {
          day: time.day,
          date: time.date,
        },
        auth: req.authorization,
        user: req.user,
      });
    } else {
      res.json({ message: `Login to post comment` });
    }
  } catch (err) {
    res.json({ message: `Failed to post the comment, try again`, error: err });
  }
}

module.exports = commentsPost;
