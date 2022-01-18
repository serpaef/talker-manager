const express = require('express');
const bodyParser = require('body-parser');
const getTalkers = require('./middlewares/getTalkers');
const getTalkerById = require('./middlewares/getTalkerById');
const login = require('./middlewares/login');
const verifyToken = require('./middlewares/verifyToken');
const validateName = require('./middlewares/validateName');
const validateAge = require('./middlewares/validateAge');
const validateDate = require('./middlewares/validateDate');
const validateRate = require('./middlewares/validateRate');
const validateTalk = require('./middlewares/validateTalk');
const addTalker = require('./middlewares/addTalker');
const editTalker = require('./middlewares/editTalker');
const deleteTalker = require('./middlewares/deleteTalker');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.get('/talker/:id', getTalkerById);

app.get('/talker', getTalkers);

app.post('/login', login);

app.post(
  '/talker',
  verifyToken,
  validateName,
  validateAge,
  validateTalk,
  validateDate,
  validateRate,
  addTalker,
);

app.put(
  '/talker/:id',
  verifyToken,
  validateName,
  validateAge,
  validateTalk,
  validateRate,
  validateDate,
  editTalker,
);

app.delete('/talker/:id', verifyToken, deleteTalker);

app.listen(PORT, () => {
  console.log('Online');
});
