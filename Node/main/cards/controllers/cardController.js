const uuidv4 = require('uuid/v4');

module.exports = app => {
  const cardControllerDB = app.data.cardController; 
  const controller = {};

  const {
    cardController: cardControllerMock,
  } = cardControllerDB;

  controller.listCardController = (req, res) => res.status(200).json(cardControllerDB);

  controller.saveCardController = (req, res) => {
    cardControllerMock.data.push({
      id: uuidv4(),  
      cardNumber: req.body.cardNumber, 
      embossName: req.body.embossName, 
      customerName: req.body.customerName, 
      documentNumber: req.body.documentNumber, 
      motherName: req.body.motherName, 
      address: req.body.address, 
      city: req.body.city 
 
    });

    res.status(201).json(cardControllerMock);
  };

  controller.removeCardController = (req, res) => {
    const {
      cardId,
    } = req.params;

    const foundCardIndex = cardControllerMock.data.findIndex(card => card.id === cardId);

    if (foundCardIndex === -1) {
      res.status(404).json({
        message: 'Cliente não encontrado na base.',
        success: false,
        cardController: cardControllerMock,
      });
    } else {
      cardControllerMock.data.splice(foundCardIndex, 1);
      res.status(200).json({
        message: 'Cliente encontrado e deletado com sucesso!',
        success: true,
        cardController: cardControllerMock,
      });
    }
  };

  controller.updateCardController = (req, res) => {
    const { 
      cardId,
    } = req.params;

    const foundCardIndex = cardControllerMock.data.findIndex(card => card.id === cardId);

    if (foundCardIndex === -1) {
      res.status(404).json({
        message: 'Cliente não encontrado na base.',
        success: false,
        cardControllers: cardControllerMock,
      });
    } else {
      const newCard = {
        id: customerId ,
        cardNumber: req.body.cardNumber, 
        embossName: req.body.embossName, 
        customerName: req.body.customerName, 
        documentNumber: req.body.documentNumber,
        motherName: req.body.motherName, 
        address: req.body.address, 
        city: req.body.city,
        createdAt: new Date()
      };
      
      cardControllersMock.data.splice(foundCardIndex, 1, newCard);
      
      res.status(200).json({
        message: 'Cliente encontrado e atualizado com sucesso!',
        success: true,
        cardController: cardControllerMock,
      });
    }
  }

  return controller;
}