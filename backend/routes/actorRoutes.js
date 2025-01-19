const express = require('express');
const router = express.Router();
const itemController = require('../controllers/actorController');

router.get('/actors', itemController.fetchAllActors);

router.post('/insertActor', itemController.insertActor);

router.get('/actor/:id', itemController.getSingleActor);

router.put('/updateActor/:id', itemController.updateActor);

router.delete('/actor/:id', itemController.deleteActor);

router.get('/actorDetails/:id', itemController.getActorDetails);

module.exports = router;