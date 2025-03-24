const date = require(`../configs/getDate`);

function loginGet(req, res) {
  const time = date();

  res.json({
    message: `Login page`,
    time: {
      day: time.day,
      date: time.date,
    },
    auth: false,
  });
}

module.exports = loginGet;
