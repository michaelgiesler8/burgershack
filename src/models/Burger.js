import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const BurgerSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  isAvailable: { type: Boolean, default: true }
}, { timestamps: true })


