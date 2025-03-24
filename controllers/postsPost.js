const date = require(`../configs/getDate`);

function postsPost(req, res) {
  const time = date();

  res.json({
    message: `posts post`,
    time: {
      day: time.day,
      date: time.date,
    },
    auth: false,
  });
}

module.exports = postsPost;
