const router=require('express').Router()
const {
    getAllBookings,
    addBoking,
    deleteBooking,
    updateBooking,
    getBooking}=require('../controller/booking')
router.get('/',getAllBookings)
    .post('/add',addBoking)
    .patch('/update/:idBooking',updateBooking)
    .get('/delete/:idBooking',deleteBooking)//ver si lleva id
    .get('/:idBooking',getBooking)

module.exports=router