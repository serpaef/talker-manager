const send400 = require('../utils/send400');

function validateTalk(req, res, next) {
  const { talk } = req.body;

  // correção feita com ajuda do meu amigo Adriano
  // js, por não ser tipada, pode ser inconsistente com o parâmetro ! quando se trata de numeros
  if (!talk || talk === {} || talk.watchedAt === undefined || talk.rate === undefined) {
    return send400('O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios', res);
  }
  
  next();
}

module.exports = validateTalk;