const send400 = require('../utils/send400');

function validateRate(req, res, next) {
  const { talk: { rate } } = req.body;

  if (Number(rate) < 1 || Number(rate) > 5) {
    return send400('O campo "rate" deve ser um inteiro de 1 à 5', res);
  }
  
  next();
}

module.exports = validateRate;