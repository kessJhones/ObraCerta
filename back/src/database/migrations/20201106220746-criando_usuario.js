'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('usuario',{

      idUsuario:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey : true,
        allowNull: false,
      },

      nomeCompleto:{
        type: Sequelize.STRING(100),
        allowNull: false,
      }, 

      email : {
        type : Sequelize.STRING(50),
        unique : true,
        allowNull : false,
      },

      hashSenha:{
        type: Sequelize.STRING,
        allowNull: false,
      },

      telefone : {
        type : Sequelize.STRING(20),
        unique : true,
      },

      criadoEm:{
        type: Sequelize.DATE,
        allowNull : false,
        defaultValue : Sequelize.NOW,
      }

    });
  },

  down: async (queryInterface, Sequelize) => {
   
    await queryInterface.dropTable('usuario');
  
  }
};
