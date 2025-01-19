const express = require('express');
const router = express.Router();
const itemController = require('../controllers/genreController');

router.get('/genres', itemController.fetchAllGenres);

router.post('/insertGenre', itemController.insertGenre);

router.get('/genre/:id', itemController.getSingleGenre);

router.put('/updateGenre/:id', itemController.updateGenre);

router.delete('/genre/:id', itemController.deleteGenre);

module.exports = router;