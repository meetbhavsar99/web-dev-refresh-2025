const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('All the shelters...');
});

router.post('/', (req, res) => {
  res.send('Creating a shelter...');
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.send(`Viewing ${id} shelter...`);
});

router.get('/:id/edit', (req, res) => {
  const { id } = req.params;
  res.send(`Editing ${id} shelter...`);
});

module.exports = router;
