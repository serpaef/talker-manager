const send400 = require('../utils/send400');

function validateDate(req, res, next) {
  const { talk: { watchedAt } } = req.body;

  // https://stackoverflow.com/questions/15491894/regex-to-validate-date-formats-dd-mm-yyyy-dd-mm-yyyy-dd-mm-yyyy-dd-mmm-yyyy
  const format = /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/;

  if (!format.test(watchedAt)) {
    return send400('O campo "watchedAt" deve ter o formato "dd/mm/aaaa"', res);
  }
  
  next();
}

module.exports = validateDate;