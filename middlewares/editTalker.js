const fs = require('fs');
const readTalkers = require('../fs_modules/readTalkers');

async function editTalker(req, res) {
  const { name, age, talk } = req.body;
  const { id } = req.params;

  const talkers = await readTalkers();
  const talkerToEdit = talkers.findIndex((talker) => talker.id === Number(id));
  const newTalker = { id: Number(id), name, age, talk };
  talkers[talkerToEdit] = newTalker;

  fs.writeFileSync('talker.json', JSON.stringify(talkers));
  return res.status(200).json(newTalker);
}

module.exports = editTalker;
