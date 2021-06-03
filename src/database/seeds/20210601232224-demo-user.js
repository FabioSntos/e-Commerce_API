'use strict';

module.exports = {
  up: async (queryInterface) => {
    return queryInterface.bulkInsert('products', [
      {
        id: 10,
        name: 'Calça  mais ou menos',
        descricao: 'Roupa',
        preco: 50,
        disponivel: 1,
        destaque: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 11,
        name: 'Calça  maiu menos',
        descricao: 'Roupa',
        preco: 50,
        disponivel: 1,
        destaque: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 12,
        name: 'Calça  mu menos',
        descricao: 'Roupa',
        preco: 50,
        disponivel: 1,
        destaque: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 13,
        name: 'Calça  menos',
        descricao: 'Roupa',
        preco: 50,
        disponivel: 1,
        destaque: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    return queryInterface.bulkDelete('products', null, {});
  },
};
