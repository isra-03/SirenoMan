const { Schema, model } = require('mongoose');

const bookingSchema = new Schema(
    {
        idPadre:{
            type:Schema.Types.ObjectId,
            ref:'User'
        },
        programa:{
            type:Schema.Types.ObjectId,
            ref:'Program'
        },
        numPersonas:Number,
        tipo: {
            type: String,
            enum: ["clase", "rehabilitacion"]
        },
        costoTotal: Number,
        dia:Date,
        horario:String,
        lugar:{
            type:String,
            enum:["hogar","escuela"]
        }  
    }
);
    
    
    module.exports = model("Booking", bookingSchema);