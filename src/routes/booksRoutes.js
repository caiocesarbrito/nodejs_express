import express from "express"
import BooksController from "../controllers/BooksController.js"

const router = express.Router()

router
    .get("/books", BooksController.list)
    .get("/books/busca", BooksController.findByEditor)
    .get("/books/:id", BooksController.findById)
    .post("/books", BooksController.create)
    .put("/books/:id", BooksController.update)
    .delete("/books/:id", BooksController.delete)

export default router