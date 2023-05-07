import books from "../models/Book.js"

class BooksController {
    static list = (req, res) => {
        books.find()
            .populate("author")
            .exec((err, books) => {
            res.status(200).json(books)
        })
    }

    static findById = (req, res) => {
        const id = req.params.id

        books.findById(id)
            .populate("author", "name")
            .exec((err, books) => {
            if (err) {
                res.status(400).send(`${err.message} - livro não encontrado`)
            } else {
                res.status(200).send(books)
            }
        })

    }

    static create = (req, res) => {
        const newBook = new books(req.body)
        newBook.save((err) => {
            if (err) {
                res.status(500).send({message: `${err.message} - falha ao cadastrar o livro`})
            } else {
                res.status(201).send(newBook.toJSON())
            }
        })
    }

    static update = (req, res) => {
        const id = req.params.id

        books.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if (err) {
                res.status(500).send({message: err.message})
            } else {
                res.status(200).send({message: "Livro atualizado com sucesso"})
            }
        })
    }

    static delete = (req, res) => {
        const id = req.params.id

        books.findByIdAndDelete(id, (err) => {
            if (err) {
                res.status(500).send({message: err.message})
            } else {
                res.status(200).send({message: "Livro excluído com sucesso"})
            }
        })
    }

    static findByEditor = (req, res) => {
        const editora = req.query.editora

        books.find({"editor": editora}, {}, (err, books) => {
            if (err) {
                res.status(400).send(`${err.message} - livro não encontrado`)
            } else {
                res.status(200).send(books)
            }
        })
    }
}

export default BooksController