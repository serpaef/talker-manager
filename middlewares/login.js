// Used the tip from user radicand on https://gist.github.com/6174/6062387;
const crypto = require('crypto');
const send400 = require('../utils/send400');

function login(req, res) {
  const { email, password } = req.body;
  
  // regex posted by Gustavo Sant'Anna at 14-b's Slack
  const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  
  if (!email) return send400('O campo "email" é obrigatório', res);
  if (!emailRegex.test(email)) {
    return send400('O "email" deve ter o formato "email@email.com"', res);
  }
  if (!password) return send400('O campo "password" é obrigatório', res);
  if (password.length < 6) return send400('O "password" deve ter pelo menos 6 caracteres', res);
  
  const token = crypto.randomBytes(12).toString('base64');
  
  return res.status(200).json({ token });
}

module.exports = login;
