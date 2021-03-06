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
const searchTalker = require('./middlewares/searchTalker');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});
// GET routes
app.get('/talker/search', verifyToken, searchTalker);
app.get('/talker/:id', getTalkerById);
app.get('/talker', getTalkers);
// POST routes
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
// PUT routes
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
// DELETE routes
app.delete('/talker/:id', verifyToken, deleteTalker);

app.listen(PORT, () => {
  console.log('Online');
});
