const Booking=require('../models/Booking')
const Program=require('../models/Program')
const User=require('../models/User')


exports.getAllBookings=async (req,res)=>{
    const bookings= await Booking.find().populate('idPadre').populate('programa')
    res.status(200).json({bookings})
}


exports.addBoking=async (req,res)=>{
    const {programa, cantidad, dia, horario}=req.body
    const {user}= req
    const programaCompleto= await Program.findOne({_id:programa}).populate('idCoach')
    const costoTotal=cantidad*programaCompleto.costoClase
    const {lugar,tipo}=programaCompleto
    const data=await Booking.create({idPadre:user, programa, numPersonas:cantidad, tipo, costoTotal, dia, horario, lugar})
    res.status(200).json({data})
}


exports.deleteBooking=async (req,res)=>{
  const { idBooking } = req.params;
  await Booking.findByIdAndDelete(idBooking);
  res.status(200).json({ message: "booking deleted" })
}

exports.updateBooking=async (req,res)=>{
    const { idBooking } = req.params;
    const { idPadre, programa, numPersonas, tipo, costoTotal, dia, horario, lugar } = req.body;
    await Booking.findByIdAndUpdate(idBooking, { idPadre, programa, numPersonas, tipo, costoTotal, dia, horario, lugar });
    res.status(200).json({ message: "boking updated" });
}

exports.getBooking=async (req,res)=>{
   const { idBooking } = req.params;
   const boking = await Booking.findById(idBooking).populate("idPadre").populate('programa')
   res.status(200).json(boking);
}
