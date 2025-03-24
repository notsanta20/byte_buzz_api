const date = require(`../configs/getDate`);

function signupGet(req, res) {
  const time = date();
  res.json({
    message: `Signup page`,
    time: {
      day: time.day,
      date: time.date,
    },
    auth: false,
  });
}

module.exports = signupGet;
