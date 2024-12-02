import repository from "../repository/music_movie.js";

const findAll = (req, res) => {
    const music_movie = repository.findAll();

    return res.status(200).json(music_movie);
}

const create = (req, res) => {
    const music_movie = req.body;
    const music_movieCreated = repository.create(music_movie);
    return res.status(201).json(music_movieCreated)
}

const findOne = (req,res) => {
    
    const id = req.params.id;

    const result = repository.findOne(id);

    return res.status(200).json(result);
}

const update = (req, res) => {
    const music_movie = req.body;
    const result = repository.update(music_movie);

    return res.status(200).json(result)
}

const updateStock = (req, res) => {
    const id = req.params.id;
    const { cantidadComprada } = req.body;
    const result = repository.updateStock(id, cantidadComprada);
    return res.status(200).json(result)
}

const remove = (req, res) => {
    const id = req.params.id;

    const result = repository.remove(id);

    return res.status(200).json(result);
}

const controller = { findAll, create, findOne, update,updateStock, remove }

export default controller;