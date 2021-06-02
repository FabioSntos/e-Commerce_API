'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('departments', [{
      nameDepartment: 'Adaptadores',
      

    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('departments', null, {});
  }
};