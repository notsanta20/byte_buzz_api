const date = require(`../configs/getDate`);

function postsPost(req, res) {
  const time = date();

  res.json({
    message: `posts post`,
    time: {
      day: time.day,
      date: time.date,
    },
    auth: req.authorization,
    user: req.user,
  });
}

module.exports = postsPost;
