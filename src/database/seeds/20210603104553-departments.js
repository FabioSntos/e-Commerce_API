'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('departments', [
      {
        id: 1,
        name_department: 'Adaptadores',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id:2 ,
        name_department: 'Ferramentas',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id:3,
        name_department: 'Eletronicos',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id:4,
        name_department: 'Casa',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id:5,
        name_department: 'Acessorios',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id:6,
        name_department: 'Moveis',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id:7,
        name_department: 'Tablets e Celulares',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id:8,
        name_department: 'Games',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id:9,
        name_department: 'Informatica',
        created_at: new Date(),
        updated_at: new Date(),
      },

    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('departments', null, {});
  }
};