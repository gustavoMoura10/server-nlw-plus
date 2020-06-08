'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('items',[
      {
        title:'Lâmpadas',
        image:'lapadas.svg'
      },
      {
        title:'Pilhas e Baterias',
        image:'baterias.svg'
      },
      {
        title:'Papéis e Papelão',
        image:'papeis-papelao.svg'
      },
      {
        title:'Resíduos Eletrônicos',
        image:'eletronicos.svg'
      },
      {
        title:'Resíduos Orgânicos',
        image:'organicos.svg'
      },
      {
        title:'Óleo de Cozinha',
        image:'oleo.svg'
      },
    ], {});
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
