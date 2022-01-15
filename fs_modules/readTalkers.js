const fs = require('fs').promises;

async function readTalkers() {
  return JSON.parse(await fs.readFile('../talker.json'));
}

module.exports = readTalkers;