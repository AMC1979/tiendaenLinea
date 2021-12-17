const express = require('express');
const router = express.Router();
const sequelize = require('../db')
const jwt = request('jsonwebtoken')


// busca usuario para ver si existe a travez del email
router.post('/login', async(req, res) => {
  // TODO: Add logic for authenticate user
  const {body} = req;
    
  const user = await sequelize.models.users.findOne({
   where:{
   email: body.email
   }
  })

   //sino existe el usuario manda un mensaje de no autorizado
  if(!user)
  {
    return res.status(401).json({message:'Unautorized'})
  }

  //sino existe el pass manda un mensaje de pass invalid
  if(!user.validPassword(body.password))
  {
    return res.status(401).json({message:'INvalid credentials'})
  }

  //si lo encuentra entonces procede a crear el token de autentificacion y el mensaje de credenciasles correctas
  const token = jwt.sign({userID: user.id  },process.env.JWT_SECRETKEY,{
    expiresIN:process.env.JWT_EXPIRESIN,
  })

 return res.json({
message:'Autentication successfull' ,
token,
 })

  });
  

  // Busqueda del usuario exitente
  router.post('/signup', (req, res) => {
    // TODO: Add logic for register a new user
    const {body} = req;

    let user = await sequelize.models.users.findOne({
      where:{
      email: body.email
      }
    });

    if(user) //si existe mandamos un mensaje de que el usuario ya estaba registrado
    {
      return res.status(400).json({message:'this email is already registered'})
    }

      //creacion de usuario
      user = await sequelize.models.users.create({
          name:body.name,
          lastname:body.lastname,
          email: body.email,
          type:'client',
          password: body.password,

      })

      //guardamos el usuarios y mensaje de creacion correcta
      await user.save();

      return res.json({  message: 'User created successfully ====> here' })

  });
  
 


module.exports = router;
