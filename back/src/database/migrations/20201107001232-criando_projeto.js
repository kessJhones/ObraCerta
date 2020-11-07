'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('projeto',{

      idPublicacao:{
        type: Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement : true,
        allowNull: false,
      },

      idUsuario:{
        type: Sequelize.INTEGER,
        allowNull : false,
      },

      criadoEm:{
        type: Sequelize.DATE,
        allowNull : false,
        defaultValue : Sequelize.NOW,
      },

    });
  },

  down: async (queryInterface, Sequelize) => {
   
    await queryInterface.dropTable('projeto');
  
  }
};
