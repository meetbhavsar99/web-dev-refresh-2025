const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('All the dogs page...');
});

router.get('/:id', (req, res) => {
  res.send(`Viewing ${req.params.id} dog...`);
});
router.get('/:id/edit', (req, res) => {
  res.send(`Editing ${req.params.id} dog...`);
});

module.exports = router;
