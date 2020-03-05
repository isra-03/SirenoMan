const Booking=require('../models/Booking')
const Program=require('../models/Program')
const User=require('../models/User')

const router=require('express').Router()
const {
    getAllBookings,
    addBoking,
    deleteBooking,
    updateBooking,reservaciones,
    getBooking}=require('../controller/booking')
    
router.get('/',getAllBookings)
    .post('/add',addBoking)
    .post('/reservaciones/:id',async (req,res)=>{
        const {id}=req.params
        const bookings= await Booking.find({idPadre:id}).populate('idPadre').populate('programa')
        console.log(bookings)
        res.status(200).json({bookings})})
    .patch('/update/:idBooking',updateBooking)
    .get('/delete/:idBooking',deleteBooking)//ver si lleva id
    .get('/:idBooking',getBooking)

module.exports=router