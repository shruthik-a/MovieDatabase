const express = require('express');
const router = express.Router();
const itemController = require('../controllers/movieController');

router.get('/movies', itemController.fetchAllMovies);

router.post('/insertMovie', itemController.insertMovie);

router.get('/movie/:id', itemController.getSingleMovie);

router.put('/updateMovie/:id', itemController.updateMovie);

router.delete('/movie/:id', itemController.deleteMovie);

router.get('/movieDetails/:id', itemController.getMovieDetails);

router.get('/getMovies', itemController.getMovies);

module.exports = router;