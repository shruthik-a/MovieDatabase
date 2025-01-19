const express = require('express');
const router = express.Router();
const itemController = require('../controllers/languageController');

router.get('/languages', itemController.fetchAllLanguages);

router.post('/insertLanguage', itemController.insertLanguage);

router.get('/language/:id', itemController.getSingleLanguage);

router.put('/updateLanguage/:id', itemController.updateLanguage);

router.delete('/language/:id', itemController.deleteLanguage);

module.exports = router;
