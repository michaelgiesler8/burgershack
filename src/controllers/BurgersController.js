import BaseController from "../utils/BaseController";
import { burgersService } from "../services/BurgersService";

export class BurgersControllers extends BaseController {
  constructor() {
    super('api/burgers')
    this.router
      .get('/test', this.getTest)
      .get('', this.getBurgers)
      .post('', this.createBurger)
      .delete('/:burgerId', this.removeBurger)
  }


}