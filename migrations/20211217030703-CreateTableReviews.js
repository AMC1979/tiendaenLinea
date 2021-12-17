'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

     await queryInterface.createTable('reviews', {
     id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
     content: DataTypes.TEXT,
     // Rel ==  Producto y la reseña
      productId: {
       type: Sequelize.INTEGER,
       references: {
         model: 'products',
         key: 'id',
       },
       onDelete: 'CASCADE',
     },
     createdAt: DataTypes.DATE,
     updatedAt: DataTypes.DATE,
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
