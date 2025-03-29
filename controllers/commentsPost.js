const { PrismaClient } = require(`@prisma/client`);
const prisma = new PrismaClient();

async function commentsPost(req, res) {
  try {
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
        auth: req.authorization,
        user: req.user,
      });
    } else {
      res.status(401).json({ message: `Login to post comment` });
    }
  } catch (err) {
    res
      .status(501)
      .json({ message: `Failed to post the comment, try again`, error: err });
  }
}

module.exports = commentsPost;
