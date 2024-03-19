const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
  res.json({
    id: 1,
    name: 'Lobsang',
    age: 30,
  });
});
router.get('/:usersId/orders/:ordersId', (req, res) => {
  const { usersId, ordersId } = req.params;
  res.json({
    usersId,
    ordersId,
  });
});
module.exports = router;
