const { PrismaClient } = require(`@prisma/client`);
const prisma = new PrismaClient();

async function postsDelete(req, res) {
  const { postId } = req.params;

  try {
    await prisma.posts.delete({
      where: {
        id: postId,
      },
    });

    res.json({
      message: `Post deleted successfully`,
    });
  } catch (err) {
    console.log(err);
    res.status(501).json({
      message: `Internal server error, try again`,
    });
  }
}

module.exports = postsDelete;
