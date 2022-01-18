const fs = require('fs').promises;
const readTalkers = require('../fs_modules/readTalkers');

async function addTalker(req, res) {
  const { name, age, talk } = req.body;

  const talkers = await readTalkers();

  const id = talkers.length + 1;
  const newTalker = { id, name, age, talk };

  await fs.writeFile('talker.json', JSON.stringify([...talkers, newTalker]));

  return res.status(201).json(newTalker);
}

module.exports = addTalker;
