import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class BurgersService {
  async getBurgers() {
    const burgers = await dbContext.Burgers.find()
    return burgers
  }

  async createBurger(burgerData) {
    const burgers = await dbContext.Burgers.create(burgerData)
    return burgers
  }

  async deleteBurger(burgerId) {
    const burger = await dbContext.Burgers.findById(burgerId)
    if (!burger) {
      throw new BadRequest('Invalid Burger Id')
    }
    await dbContext.Burgers.deleteOne({ _id: burgerId })
    return `${burger.name} has been removed from the menu`
  }
}

export const burgersService = new BurgersService()