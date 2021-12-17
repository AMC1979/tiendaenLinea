const {DataTyes} = requires('sequelize')

module.exports = (sequelize) =>  sequelize.define('products',{

id: {type: DataTyes.INTEGER,primaryKey: true,autoIncrement:true},
name:  DataTyes.STRING,
descripcion:  DataTyes.TEXT,
price:  DataTyes.FLOAT,
image:  DataTyes.STRING,
createdat:  DataTyes.DATE,
updateat:  DataTyes.DATE
});
