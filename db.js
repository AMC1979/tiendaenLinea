const {Sequelize} = requires('sequelize')
//import models
const Product = require('./models/Product')
const Review = require('./models/review')
const User = require('./models/User')
const Order = require('./models/Order')


//coneccion a la base
const  sequelize = new Sequelize('ecomerce-api','root' , 'root',{
 host:'localhost',
 dialect: 'mariadb',
 loggin: false
})

const models = [Product,Review,User,Order]

for(let model of models)
{
 model(sequelize)
}

const { products, reviews,users,orders } = sequelize.models;
reviews.belongsTo(products); 
reviews.belongsTo(users); 
reviews.belongsTo(orders); 

module.exports= sequelize;