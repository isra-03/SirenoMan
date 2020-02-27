const { Schema, model } = require('mongoose');

const claseSchema = new Schema(
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
        costo: Number,
        }
        
        }
    );
    
    
    module.exports = model("Clase", claseSchema);