const { Schema, model } = require('mongoose');

const invSchema = new Schema(
    {
        idUsuario:{
            type:Schema.Types.ObjectId,
            ref:'User'},
        numPersonas: {
            type: Number,
            min: 1, max: 2,
        tipo: {
            type: String,
            enum: ["clase", "rehabilitacion"]
        },
        disponibilidad: {
            type: Number,
            min: 1, max: 10,
        },
        costo: Number,
        }
        
        }
    );
    
    
    module.exports = model("invClases", invSchema);