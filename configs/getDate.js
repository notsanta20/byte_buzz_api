const { format } = require(`date-fns`);

function getDate() {
  const day = format(new Date(), `eeee`);
  const date = format(new Date(), `do MMM yyyy`);
  return { day, date };
}

module.exports = getDate;
