const Booking=require('../models/Booking')
const Program=require('../models/Program')
const User=require('../models/User')


exports.getAllBookings=async (req,res)=>{
    const bookings= await Booking.find().populate('idPadre').populate('programa')
    res.status(200).json({bookings})
}

exports.addBoking=async (req,res)=>{

}

exports.deleteBooking=async (req,res)=>{

}

exports.updateBooking=async (req,res)=>{

}

exports.getBooking=async (req,res)=>{

}
