import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const BurgerSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
}, { timestamps: true })

class DbContext {
  Burgers = mongoose.model('Burger', BurgerSchema)
}

export const dbContext = new DbContext
