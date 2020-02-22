import mongoose from 'mongoose'

const { Schema } = mongoose

const user = new Schema(
  {
    userName: { type: String, index: true },
    password: { type: String, index: true, minlength: 8 },
    firstName: { type: String, index: true },
    lastname: { type: String, index: true },
    status: { type: [String], enum: ["Admin", "Manger", "User"] },
    email: [String],
    phone: [String]
  },
  { collection: "User" }
);

module.exports = mongoose.model('UserModel', user)