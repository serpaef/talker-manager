const readTalkers = require('../fs_modules/readTalkers');

async function getTalkerById(req, res) {
  const talkers = await readTalkers();
  const { id } = req.params;
  const talkerRequested = talkers.find((talker) => Number(talker.id) === Number(id));
  if (talkerRequested) {
    return res.status(200).json(talkerRequested);
  }
  res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
}

module.exports = getTalkerById;
