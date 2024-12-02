import model from '../models/usuario.js'

let usuarios = [...model];
let counter = usuarios.length;

const findAll = () => {
    return usuarios;
}

const create = (usuario) => {
    usuario.id = ++counter;
    usuarios.push(usuario);
    
    return usuario;
}

const findOne = (id) => {
    const result = usuarios.find(x => x.id == id);

    return result;
}

const findByEmailAndPassword = (email, password) => { 
    const result = usuarios.find(x => x.email === email && x.password === password); 
    return result; 
};

const update = (usuario) => {
    const index = usuarios.findIndex(item => item.id == usuario.id);

    if (index > -1) {
        usuarios[index] = usuario;
        return true;
    }
    else 
        return false   
}

const remove = (id) => {
    const index = usuarios.findIndex(item => item.id == id);

    if (index > -1) {
        usuarios.splice(index,1);
        return true;
    }
    else   
        return false;
} 

const repository = { findAll, create, findOne, findByEmailAndPassword, update, remove }

export default repository;