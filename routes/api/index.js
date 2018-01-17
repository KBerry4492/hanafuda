const router = require('express').Router();
const cardRoutes = require('./cards');
const userRoutes = require('./users');

// card routes
router.use('/saved', cardRoutes);
router.use('/users', userRoutes);

module.exports = router;
