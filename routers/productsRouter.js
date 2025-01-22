const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller')


// index
router.get('/', controller.index )

// show
router.get('/:id', controller.show);

// store
router.post('/', controller.store);

//update
router.put('/:id', controller.update) ;

//modify
router.patch('/:id', controller.modify);

//delete
router.delete('/:id', controller.destroy)


module.exports = router;