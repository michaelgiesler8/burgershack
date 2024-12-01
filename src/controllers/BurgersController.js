import BaseController from '../utils/BaseController'
import { burgersService } from '../services/BurgersService'

export class BurgersController extends BaseController {
  constructor() {
    super('api/burgers')
    this.router
      .get('/test', this.getTest)
      .get('', this.getBurgers)
      .post('', this.createBurger)
      .delete('/:burgerId', this.removeBurger)
      .put('/:burgerId', this.updateBurger)
  }

  async getTest(req, res, next) {
    try {
      res.send('🍔 Test Successful!')
    } catch (error) {
      next(error)
    }
  }

  async getBurgers(req, res, next) {
    try {
      const burgers = await burgersService.getBurgers()
      res.send(burgers)
    } catch (error) {
      next(error)
    }
  }

  async createBurger(req, res, next) {
    try {
      const burger = await burgersService.createBurger(req.body)
      res.send(burger)
    } catch (error) {
      next(error)
    }
  }

  async removeBurger(req, res, next) {
    try {
      const message = await burgersService.deleteBurger(req.params.burgerId)
      res.send(message)
    } catch (error) {
      next(error)
    }
  }

  async updateBurger(req, res, next) {
    try {
      const burger = await burgersService.updateBurger(
        req.params.burgerId,
        req.body
      )
      res.send(burger)
    } catch (error) {
      next(error)
    }
  }
}