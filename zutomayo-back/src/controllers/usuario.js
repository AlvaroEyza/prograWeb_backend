import repository from "../repository/usuario.js";

const login = (req, res) => { 
    const { email, password } = req.body; 
    const user = repository.findByEmailAndPassword(email, password); 
    
    if (user) { 
        res.json({ message: 'Login successful', role: user.role }); 
    } else { 
        res.status(401).json({ message: 'Invalid credentials' }); 
    } 
}

const findAll = (req, res) => {
    const usuario = repository.findAll();
    return res.status(200).json(usuario);
}

const create = (req, res) => {
    const usuario = req.body;
    usuario.role = 'user';
    const usuarioCreated = repository.create(usuario);
    return res.status(201).json(usuarioCreated);
}

const findOne = (req, res) => {
    const id = req.params.id;
    const result = repository.findOne(id);
    return res.status(200).json(result);
}

const update = (req, res) => {
    const usuario = req.body;
    const result = repository.update(usuario);
    return res.status(200).json(result);
}

const remove = (req, res) => {
    const id = req.params.id;
    const result = repository.remove(id);
    return res.status(200).json(result);
}

const controller = { login, findAll, findOne, create, update, remove }; 

export default controller;