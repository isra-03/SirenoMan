const { Schema, model } = require('mongoose');

const programSchema = new Schema(
    {
        idCoach:{
            type:Schema.Types.ObjectId,
            ref:'User'},
        tipo: {
            type: String,
            enum: ["Clase", "Rehabilitacion"]
        },
        lugar:{
            type:String,
            enum:["hogar","escuela"]
        },
        inicioSemana:Date,
        capacidad:{
            type: Number           
        },
        costoClase: Number,
        disponibilidad:{
            lunes:Array,
            martes:Array,
            miercoles:Array,
            jueves:Array,
            viernes:Array,
            sabado:Array,
            domingo:Array
        }
        }
    );
    
    
    module.exports = model("Program", programSchema);