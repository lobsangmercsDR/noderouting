const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
  res.json({
    name: 'Categoria 1',
  });
});
router.get("/:categorityId/products/:productId", (req, res) => {
  const { categorityId, productId } = req.params;
  res.json([
    {
      categorityId, productId
    },

  ]);
});

module.exports = router;
