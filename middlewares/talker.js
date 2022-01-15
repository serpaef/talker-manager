const readTalkers = require('../fs_modules/readTalkers');

async function getTalkers(_req, res) {
  const talkers = await readTalkers();
  res.status(200).send(talkers);
}

module.exports = getTalkers;
