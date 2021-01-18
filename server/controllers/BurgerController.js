import express from "express";
import BaseController from "../utils/BaseController"
import { burgersService } from "../services/BurgerService"

export class BurgersController extends BaseController {
  constructor() {
    super("api/burgers")
    this.router
      .get("", this.getAll)
      .post("", this.create)
      .put("")
  }

  async getAll(_, res, next) {
    try {

    } catch (error) {
      next(error)
    }
  }
  async create(req, res, next) {
    try {
      res.send(req.body)
      console.log(req.body)
    } catch (error) {
      next(error)
    }
  }
  async
}