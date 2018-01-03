const router = require('express').Router();
const cardRoutes = require('./cards');

// card routes
router.use('/saved', cardRoutes);

module.exports = router;
