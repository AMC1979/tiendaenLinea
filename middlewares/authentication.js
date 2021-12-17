//const express = require('express');
//const router = express.Router();

const sequelize = require('../db');
const jwt = require('jsonwebtoken');

const authenticate = (req,res,next)=>
{
    const {authorization} = req.headers;
    jwt.verify(authorization, 'secretkey', async(err,decoded)=> {
      if (err) return res.status(401).json({ message: 'Unautorized'})  ;

      req.user = await sequelize.models.users.findOne({
        where:{id: decoded.userID}
      })
      next();
    })
}

module.exports = authenticate

/*router.post('/login', (req, res) => {



});*/

