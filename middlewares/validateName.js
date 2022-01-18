const send400 = require('../utils/send400');

function validateName(req, res, next) {
  const { name } = req.body;
  if (!name || name === '') return send400('O campo "name" é obrigatório', res);
  if (name.length < 3) return send400('O "name" deve ter pelo menos 3 caracteres', res);
  next();
}

module.exports = validateName;
