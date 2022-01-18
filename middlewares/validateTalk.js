const send400 = require('../utils/send400');

function validateTalk(req, res, next) {
  const { talk } = req.body;

  if (!talk || !talk.watchedAt || !talk.rate) {
    return send400('O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios', res);
  }
  
  next();
}

module.exports = validateTalk;