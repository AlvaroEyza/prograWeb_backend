import repository from "../repository/orden.js";

const findAll = (req, res) => {
    const orden = repository.findAll();

    return res.status(200).json(orden);
}

const create = (req, res) => {
    const { idUsuario, items, subtotal } = req.body;
    const orden = { id: 0, items, subtotal, idUsuario };
    const ordenCreated = repository.create(orden);
    return res.status(201).json(ordenCreated);
}

const findOne = (req,res) => {
    
    const id = req.params.id;

    const result = repository.findOne(id);

    return res.status(200).json(result);
}

const update = (req, res) => {
    const orden = req.body;
    const result = repository.update(orden);

    return res.status(200).json(result)
}

const remove = (req, res) => {
    const id = req.params.id;

    const result = repository.remove(id);

    return res.status(200).json(result);
}

const controller = { findAll, create, findOne, update, remove }

export default controller;