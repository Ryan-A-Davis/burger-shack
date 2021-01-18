import { catsService } from "../services/CatsService"
import BaseController from "../utils/BaseController"


export class CatsController extends BaseController {
  constructor() {
    super("api/cats")
    this.router
      .get("", this.getAll)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete)
  }
  async delete(req, res, next) {
    try {
      let data = await catsService.delete(req.params.id)
      res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async edit(req, res, next) {
    try {
      req.body.id = req.params.id
      let data = await catsService.edit(req.body)
      res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async create(req, res, next) {
    try {
      let data = await catsService.create(req.body)
      res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async getAll(req, res, next) {
    try {
      let data = await catsService.getAll()
      res.send(data)
    } catch (error) {
      next(error)
    }
  }

}