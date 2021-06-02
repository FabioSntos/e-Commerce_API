'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('products', [{
      name: 'Siberia v2 Steel Series',
      descricao: 'Dota 2 Edition',
      preco: 900,
      disponivel: 1,
      destaque: 1,
      estoque: 50,
      created_at: new Date(),
      updated_at: new Date(),

    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('products', null, {});
  }
};