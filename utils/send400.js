function send400(message, res) {
  return res.status(400).json({ message });
}

module.exports = send400;
