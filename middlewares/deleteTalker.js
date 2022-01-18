const fs = require('fs').promises;
const readTalkers = require('../fs_modules/readTalkers');

async function deleteTalker(req, res) {
  const { id } = req.params;

  const talkers = await readTalkers();

  const talkerToRemove = talkers.findIndex((talker) => Number(talker.id) === Number(id));
  talkers.splice(talkerToRemove, 1);

  await fs.writeFile('talker.json', JSON.stringify(talkers));

  res.status(204).end();
}

module.exports = deleteTalker;