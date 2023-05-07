import express from "express"
import AuthorsController from "../controllers/authorsController.js"

const router = express.Router()

router
    .get("/authors", AuthorsController.list)
    .get("/authors/:id", AuthorsController.findById)
    .post("/authors", AuthorsController.create)
    .put("/authors/:id", AuthorsController.update)
    .delete("/authors/:id", AuthorsController.delete)

export default router