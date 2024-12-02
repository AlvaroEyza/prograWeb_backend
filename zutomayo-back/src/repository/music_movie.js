import model from '../models/music_movie.js'

let music_movies = [...model];
let counter = music_movies.length;

const findAll = () => {
    return music_movies;
}

const create = (music_movie) => {
    music_movie.id = ++counter;
    music_movies.push(music_movie);
    
    return music_movie;
}

const findOne = (id) => {
    const result = music_movies.find(x => x.id == id);

    return result;
}

const update = (music_movie) => {
    const index = music_movies.findIndex(item => item.id == music_movie.id);

    if (index > -1) {
        music_movies[index] = music_movie;
        return true;
    }
    else 
        return false   
}

const updateStock = (id, cantidadComprada) => {
    const index = music_movies.findIndex(item => item.id == id);
    if (index > -1) {
        const stockActual = parseInt(music_movies[index].stock, 10);
        const cantidadCompradaNum = parseInt(cantidadComprada, 10);
        music_movies[index].stock = (stockActual - cantidadCompradaNum).toString();
        return true;
    } else {
        return false;
    }
};

const remove = (id) => {
    const index = music_movies.findIndex(item => item.id == id);

    if (index > -1) {
        music_movies.splice(index,1);
        return true;
    }
    else   
        return false;
} 

const repository = { findAll, create, findOne, updateStock, update, remove }

export default repository;