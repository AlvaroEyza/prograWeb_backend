import repository from "../repository/carrito.js";

const findAll = (req, res) => {
    const carrito = repository.findAll();

    return res.status(200).json(carrito);
}

const addItem = (req, res) => {
    const item = req.body;
    const itemCreated = repository.addItem(item);
    return res.status(201).json(itemCreated)
}

const updateQuantity = (req,res) => {
    const id = req.params.id;
    const {cantidad} = req.body;
    const result = repository.updateQuantity(id, cantidad);

    return res.status(200).json(result)
}

const remove = (req, res) => {
    const id = req.params.id;

    const result = repository.remove(id);

    return res.status(200).json(result);
}

const removeAll = (req, res) => {

    const result = repository.removeAll();

    return res.status(200).json(result);
}

const controller = { findAll, addItem, updateQuantity, remove, removeAll }

export default controller;