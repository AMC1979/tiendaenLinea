const express = require('express')
const router  = express.Router()
const sequelize = require('../db')
const permission = require('../middlewares/permision')

//CRUD
router.get('/',permission('admin','client') ,async(req,res)=>{
    const products = await sequelize.models.products.findAndCountAll 
    return res.status(200).json({data:products})
   })


   //manejo de notas nuevas
 router.post('/',permission('admin'),async (req,res)=>{

    const {body} = req
    const product = await sequelize.model.products.create(
        {
            name:body.heading,
            descripcion: body.content,
            price: body.price,
            Image: body.Image
        })

        await product.save()

        return res.status(200).json({data:product})
})


//update de notas expecificas
router.put( '/:id' ,permission('admin'),async(req,res)=>
{
  const {body,params:{id}} = req
  const product = await sequelize.models.products.findByPk({id})

  if(!product)
    {
    return restart.status(404).json({message: 'not found'})
   }
  
   const UpdateProduct = await product.update({
            name:body.heading,
            descripcion: body.content,
            price: body.price,
            Image: body.Image
    })

    return res.json({message:'Update OK',data : UpdateProduct })
})




// Handler for delete a specific note
router.delete('/:id',permission('admin'), async  (req, res) =>
 {
// Getting id from parameters
  const { params: { id } } = req; 

// Finding specific noted based on id
 const product = await sequelize.models.products.findByPk({ id })

 if (!product) {
      return res.status(404).json({ message: 'Note not found'});
    }

  // Destroying resource
   await product.destroy();
   return res.json({ message: 'Deleted successfully' });
  
  })


  module.exports = router;