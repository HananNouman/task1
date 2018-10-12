const router = require('express').Router();
const controller = require('./controller');

  router.route('/')
  .post(controller.createOne)
  .get(controller.retrieve)
  .delete(controller.delete)
  

  router.route('/:id')
  .put(controller.updateOne)
  .get(controller.retrieveOne)
  .delete(controller.deleteOne)
  

module.exports = router;

  