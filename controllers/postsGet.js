const date = require(`../configs/getDate`);

function postsGet(req, res) {
  const time = date();

  res.json({
    message: `Success`,
    time: {
      day: time.day,
      date: time.date,
    },
    auth: false,
    user: req.user,
  });
}

module.exports = postsGet;
