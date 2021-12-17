const express = require('express')
const router  = express.Router()
const sequelize = require('../db')
const permission = require('../middlewares/permision')

//CRUD
router.get('/',permission('admin','client'),async(req,res)=>{
    const reviews = await sequelize.models.reviews.findAndCountAll 
    return res.status(200).json({data:reviews})
   })


   //manejo de notas nuevas
 router.post('/',permission('admin','client'),async (req,res)=>{

    const {body} = req
    const review = await sequelize.model.reviews.create(
        {            
            descripcion: body.content,
        })

        await review.save()
        return res.status(200).json({data:review})
})


//update de notas expecificas
router.put( '/:id' , permission('admin','client'), async(req,res)=>
{
  const {body,params:{id}} = req
  const review = await sequelize.models.reviews.findByPk({id})

  if(!review)
    {    return restart.status(404).json({message: 'not found'})   }
  
   const Updatereview = await review.update({
            descripcion: body.content,
            
    })

    return res.json({message:'Update OK',data : Updatereview })
})




// Handler for delete a specific note
router.delete('/:id',permission('admin'), async  (req, res) =>
 {
// Getting id from parameters
  const { params: { id } } = req; 

// Finding specific noted based on id
 const review = await sequelize.models.reviews.findByPk({ id })

 if (!review) {
      return res.status(404).json({ message: 'Note not found'});
    }

  // Destroying resource
   await review.destroy();
   return res.json({ message: 'Deleted successfully' });
  
  })


  module.exports = router;