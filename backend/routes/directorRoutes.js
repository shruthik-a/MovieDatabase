const express = require('express');
const router = express.Router();
const itemController = require('../controllers/directorController');

router.get('/directors', itemController.fetchAllDirectors);

router.post('/insertDirector', itemController.insertDirector);

router.get('/director/:id', itemController.getSingleDirector);

router.put('/updateDirector/:id', itemController.updateDirector);

router.delete('/director/:id', itemController.deleteDirector);

router.get('/directorDetails/:id', itemController.getDirectorDetails);

module.exports = router;
