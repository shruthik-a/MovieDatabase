const express = require('express');
const router = express.Router();
const itemController = require('../controllers/producerController');

router.get('/producers', itemController.fetchAllProducers);

router.post('/insertProducer', itemController.insertProducer);

router.get('/producer/:id', itemController.getSingleProducer);

router.put('/updateProducer/:id', itemController.updateProducer);

router.delete('/producer/:id', itemController.deleteProducer);

module.exports = router;