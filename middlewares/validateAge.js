const send400 = require('../utils/send400');

function validateAge(req, res, next) {
  const { age } = req.body;
  if (!Number(age) || age === '') return send400('O campo "age" é obrigatório', res);
  if (Number(age) < 18) return send400('A pessoa palestrante deve ser maior de idade', res);
  next();
}

module.exports = validateAge;
