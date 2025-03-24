const date = require(`../configs/getDate`);

function postsGet(req, res) {
  const time = date();

  res.json({
    message: `Posts`,
    time: {
      day: time.day,
      date: time.date,
    },
    auth: req.authorization,
    user: req.user,
  });
}

module.exports = postsGet;
