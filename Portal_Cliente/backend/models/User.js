const { Schema, model } = require('mongoose');
const PLM = require('passport-local-mongoose');

const userSchema = new Schema(
  {
    name: String,
    email: String,
    status:{
      type: String,
      enum: ["Pending Confirmation", "Active"],
      default: "Pending Confirmation"
    },
      confirmationCode:{
      unique: true, 
      type: String,
    },
      rol:{
      type: String,
      enum: ["USER", "ADMIN"],
      default: "USER"
    },
  },
  {
    timestamps: true,
    versionKey: false
  }
);

userSchema.plugin(PLM, { usernameField: 'email' });

module.exports = model('User', userSchema);
