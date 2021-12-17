/*const {DataTyes} = requires('sequelize')

module.exports = (sequelize) =>  sequelize.define('reviews',{

id: {type: DataTyes.INTEGER,primaryKey: true,autoIncrement:true},
content:  DataTyes.STRING,
});*/


const { DataTypes, Sequelize } = require('sequelize');

// Tabla para Reseñas 
module.exports = (sequelize) => sequelize.define('reviews', {
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
});
