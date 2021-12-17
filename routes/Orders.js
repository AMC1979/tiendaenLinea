const express = require('express');
const router = express.Router();
const permission = require('../middlewares/permision')

// Get all reviews
router.get('/',permission('admin'), async (req, res) => {
  const orders = await sequelize.models.products.findAndCountAll 
  return res.status(200).json({data:orders})
 })

// Creating a new review
router.post('/', permission('admin','client'),async (req, res) => {

  const {body} = req
  const order = await sequelize.model.orders.create(
      {
        userId:body.userId,
        productId: body.productId,
        quantity: body.quantity,
      })

      await order.save()
      return res.status(200).json({data:order})
});

// Update a review by id
router.put('/:id',permission('admin','client'), async (req, res) => {
  const {body,params:{id}} = req
  const order = await sequelize.orders.products.findByPk({id})

  if(!product)
    {
    return restart.status(404).json({message: 'not found'})
   }
  
   const UpdateProduct = await order.update({
      userId:body.userId,
      productId: body.productId,
      quantity: body.quantity,
    })

    return res.json({message:'Update OK',data : UpdateProduct })
});

// Delete a review by id
router.delete('/:id', permission('admin'),async (req, res) => {
    
  // Getting id from parameters
  const { params: { id } } = req; 

// Finding specific noted based on id
 const order = await sequelize.models.orders.findByPk({ id })

 if (!order) {
      return res.status(404).json({ message: 'Note not found'});
    }

  // Destroying resource
   await order.destroy();
   return res.json({ message: 'Deleted successfully' });
  
});
  

module.exports = router