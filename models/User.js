const { DataTypes } = require('sequelize');

const bcrypt =require('bcrypt')

module.exports = (sequelize) =>
{
    const User = sequelize.define('users', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        name:DataTypes.STRING,
        lastname:DataTypes.STRING,
        type:DataTypes.STRING,
        email:DataTypes.STRING,
        password:DataTypes.STRING,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
    },
    {
    hooks:
    {
        beforeCreate:(user)=>
        {
            const salt = bcrypt.genSaltSync();
            user.password = bcrypt.hashSync(user.password,salt)
        }     
        }
    })

    User.prototype.validPassword = function(password)
    { return bcrypt.compareSync(password,this.password)    }

    return User

};

//Resultado usando bcrypt
// {
//     "data": {
//       "id": 2,
//       "name": "John",
//       "lastname": "Doe",
//       "type": "client",
//       "email": "john.doe@web.com",
//       "password": "$2b$10$2DilyYYJsJl7Bs8ZwAC7CusYplg7kVueJSG1rCDRi8vKeAXNmGVUi",
//       "updatedAt": "2020-10-08T13:49:27.573Z",
//       "createdAt": "2020-10-08T13:49:27.573Z"
//     }
//   }
