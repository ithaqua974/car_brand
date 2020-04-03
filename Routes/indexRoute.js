const router = require("express").Router();

const carController = require('../controllers/carController');

router.get('/', carController.list1);
router.get('/', carController.list2);
// router.get('/getinfo/:id', carController.getinfo);


module.exports = router;