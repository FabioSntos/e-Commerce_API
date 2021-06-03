'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('products', [
      {
      id:1,
      name: 'Siberia v2 Steel Series',
      descricao: 'Dota 2 Edition',
      preco: 900,
      disponivel: 1,
      destaque: 1,
      estoque: 50,
      id_dep: 5 ,
      created_at: new Date(),
      updated_at: new Date(),

    },
    {
      id:2,
      name: 'Cabo USB',
      descricao: 'USB 2.0',
      preco: 20,
      disponivel: 1,
      destaque: 1,
      estoque: 100,
      id_dep: 1 ,
      created_at: new Date(),
      updated_at: new Date(),

    },
    {
      id:3,
      name: 'Televisão Samsung 49"',
      descricao: 'Smart TV',
      preco: 3000,
      disponivel: 1,
      destaque: 1,
      estoque: 10,
      id_dep: 3 ,
      created_at: new Date(),
      updated_at: new Date(),

    },
    {
      id:4,
      name: 'Sofá Cama',
      descricao: 'Reclinavel',
      preco: 1500,
      disponivel: 1,
      destaque: 1,
      estoque: 5,
      id_dep: 4 ,
      created_at: new Date(),
      updated_at: new Date(),

    },
    {
      id:5,
      name: 'Smart Watch',
      descricao: 'Android',
      preco: 200,
      disponivel: 0,
      destaque: 0,
      estoque: 0,
      id_dep: 5 ,
      created_at: new Date(),
      updated_at: new Date(),

    },
    {
      id:6,
      name: 'Painel de televisão',
      descricao: '2m * 2m',
      preco: 300,
      disponivel: 1,
      destaque: 1,
      estoque: 3,
      id_dep: 6 ,
      created_at: new Date(),
      updated_at: new Date(),

    },
    {
      id:7,
      name: 'Iphone 12',
      descricao: 'Apple',
      preco: 80000,
      disponivel: 1,
      destaque: 1,
      estoque: 1,
      id_dep: 7 ,
      created_at: new Date(),
      updated_at: new Date(),

    },
    {
      id:8,
      name: 'Dark Souls',
      descricao: 'Git Gud',
      preco: 150,
      disponivel: 1,
      destaque: 1,
      estoque: 100,
      id_dep: 8 ,
      created_at: new Date(),
      updated_at: new Date(),

    },
    {
      id:9,
      name: 'RJ 45 ',
      descricao: 'Conector para cabo de rede',
      preco: 2,
      disponivel: 1,
      destaque: 1,
      estoque: 1000,
      id_dep: 9 ,
      created_at: new Date(),
      updated_at: new Date(),

    }
  ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('products', null, {});
  }
};