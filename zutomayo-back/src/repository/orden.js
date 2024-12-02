import model from '../models/orden.js';

let ordenes = [...model];
let counter = ordenes.length;

const findAll = () => {
    return ordenes;
}

const create = (orden) => {
    orden.id = ++counter;
    ordenes.push(orden);
    
    return orden;
}

const findOne = (id) => {
    const result = ordenes.find(x => x.id == id);

    return result;
}

const update = (orden) => {
    const index = ordenes.findIndex(item => item.id == orden.id);

    if (index > -1) {
        ordenes[index] = orden;
        return true;
    }
    else 
        return false   
}

const remove = (id) => {
    const index = ordenes.findIndex(item => item.id == id);

    if (index > -1) {
        ordenes.splice(index,1);
        return true;
    }
    else   
        return false;
} 

const repository = { findAll, create, findOne, update, remove }

export default repository;