import authors from "../models/Author.js"

class AuthorsController {
    static list = (req, res) => {
        authors.find((err, authors) => {
            res.status(200).json(authors)
        })
    }

    static findById = (req, res) => {
        const id = req.params.id

        authors.findById(id, (err, authors) => {
            if (err) {
                res.status(400).send(`${err.message} - autor não encontrado`)
            } else {
                res.status(200).send(authors)
            }
        })
    }

    static create = (req, res) => {
        const newAuthor = new authors(req.body)
        newAuthor.save((err) => {
            if (err) {
                res.status(500).send({message: `${err.message} - falha ao salvar o autor`})
            } else {
                res.status(200).send(newAuthor.toJSON())
            }
        })
    }

    static update = (req, res) => {
        const id = req.params.id

        authors.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if (err) {
                res.status(500).send({message: err.message})
            } else {
                res.status(200).send({message: "Autor atualizado com sucesso"})
            }
        })
    }

    static delete = (req, res) => {
        const id = req.params.id

        authors.findByIdAndDelete(id, (err) => {
            if (err) {
                res.status(500).send({message: err.message})
            } else {
                res.status(200).send({message: "Autor excluído com sucesso"})
            }
        })
    }
}

export default AuthorsController