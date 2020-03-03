const Booking=require('../models/Booking')
const Program=require('../models/Program')
const User=require('../models/User')


exports.getAllProgram=async (req,res)=>{
    const programs= await Program.find().populate('idCoach').populate('programa')
    res.status(200).json({programs})
}

exports.addProgram=async (req,res)=>{
const {idCoach, tipo, lugar, inicioSemana, capacidad,costoClase, disponibilidad}=req.body
const newProgram = await Program.create({idCoach, tipo, lugar, inicioSemana, capacidad,costoClase, disponibilidad})
res.status(200).json({newProgram})
}


exports.deleteProgram=async (req,res)=>{ //borrar
    const { idProgram } = req.params;
    await Program.findByIdAndDelete(idProgram);
    res.status(200).json({ message: "program deleted" })
}

exports.updateProgram=async (req,res)=>{  
    const { idProgram } = req.params;
    const { tipo, lugar, inicioSemana, capacidad, costoClase, disponibilidad } = req.body;
    await Program.findByIdAndUpdate(idProgram, { tipo, lugar, inicioSemana, capacidad, costoClase, disponibilidad:{...disponibilidad} },{new:true});
    res.status(200).json({ message: "program updated" });
}

exports.getProgram=async (req,res)=>{  //uno
    const { idProgram } = req.params;
    const program = await Program.findById(idProgram).populate("idCoach").populate('programa')
    res.status(200).json(program);
}
