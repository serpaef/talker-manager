const readTalkers = require('../fs_modules/readTalkers');

async function searchTalker(req, res) {
  const { q } = req.query;
  const talkers = await readTalkers();

  if (!q || q === '') return res.status(200).json(talkers);

  const filteredTalkers = talkers.filter((talker) => talker.name.includes(q));

  return res.status(200).json(filteredTalkers);
}

module.exports = searchTalker;