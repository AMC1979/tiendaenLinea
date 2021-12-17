const express = require('express')
const router  = express.Router()
const sequelize = require('../db')
const permission = require('../middlewares/permision')


//CRUD
router.get('/', permission('admin') ,  async(req,res)=>{
    const user = await sequelize.model.users.findAndCountAll 
    return res.status(200).json({data:user})
   })


   //manejo de notas nuevas
 router.post('/',permission('admin') ,async (req,res)=>{

    const {body} = req
    const user = await sequelize.model.users.create(
        {
            name:body.name,
            lastname:body.lastname,
            type:body.type,
            email:body.email,
            password:body.password,
            createdAt: body.createdAt,
            updatedAt: body.updatedAt
        })

        await user.save()

        return res.status(200).json({data:user})
})


//update de notas expecificas
router.put( '/:id' ,permission('admin') ,async(req,res)=>
{
  const {body,params:{id}} = req
  const user = await sequelize.models.Users.findByPk({id})

  if(!user)
    {
    return restart.status(404).json({message: 'not found'})
   }
  
   const Updateuser = await user.update({           

            name:body.name,
            lastname:body.lastname,
            type:body.type,
            email:body.email,
            password:body.password,
            updatedAt: body.updatedAt
    })

    return res.json({message:'Update OK',data : Updateuser })
})




// Handler for delete a specific note
router.delete('/:id',permission('admin') , async  (req, res) =>
 {
// Getting id from parameters
  const { params: { id } } = req; 

// Finding specific noted based on id
 const user = await sequelize.models.Users.findByPk({ id })

 if (!user) {
      return res.status(404).json({ message: 'Note not found'});
    }

  // Destroying resource
   await user.destroy();
   return res.json({ message: 'Deleted successfully' });
  
  })


  module.exports = router;