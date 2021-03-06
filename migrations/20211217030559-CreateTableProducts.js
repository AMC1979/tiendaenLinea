'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

     await queryInterface.createTable('products', {
     id: {type: Sequelize.INTEGER,primaryKey: true,autoIncrement:true},
     name:  Sequelize.STRING,
     descripcion:  Sequelize.TEXT,
     price:  Sequelize.FLOAT,
     image:  Sequelize.STRING,
     createdat:  Sequelize.DATE,
     updateat:  Sequelize.DATE
     })

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
