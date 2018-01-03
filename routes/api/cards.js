const router = require('express').Router();
const cardsController = require('../../controllers/cardsController');

// Matches with "/api/saved"
router
  .route('/')
  .get(cardsController.findAll)
  .post(cardsController.create);

// Matches with "/api/cards/:id"
router
  .route('/:id')
  .delete(cardsController.remove);

module.exports = router;
