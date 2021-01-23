module.exports = app => {
  const controller = app.controllers.cardControllers;
  const api = require('../controllers/card-controller')

  app.route('/api/v1/customer-wallets')
    .get(controller.listCardController)
    .post(controller.saveCardController);

  app.route('/api/v1/customer-wallets/:customerId')
    .delete(controller.removeCardController)
    .put(controller.updateCardController);
}

module.exports = (app) => {
    app.route('')
        .get(api.findAll)

}