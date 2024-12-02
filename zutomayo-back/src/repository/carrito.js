import model from '../models/carrito.js'

let pedidos = {...model};

const findAll = () => {
    return pedidos;
}

const addItem = (pedido) => {
    pedidos.items.push(pedido);
    pedidos.subtotal = pedidos.items.reduce((acc, curr) => {
        return acc + (parseInt(curr.precio) * parseInt(curr.cantidad));
    }, 0);
    return pedido;
}

const updateQuantity = (id,cantidad) => {
    const index = pedidos.items.findIndex(item => item.id == id);
    
    if(index >-1) {
        pedidos.items[index].cantidad = cantidad;
        pedidos.subtotal = pedidos.items.reduce((acc, curr) => {
            return acc + (parseInt(curr.precio) * parseInt(curr.cantidad));
        }, 0);
        return true;
    }
    else
    {
        return false;
    } 

}

const remove = (id) => {
    const index = pedidos.items.findIndex(item => item.id == id);

    if (index > -1) {
        pedidos.items.splice(index,1);
        pedidos.subtotal = pedidos.items.reduce((acc, curr) => {
            return acc + (parseInt(curr.precio) * parseInt(curr.cantidad));
        }, 0);
        return true;
    }
    else   
        return false;
} 

const removeAll =() => {
    pedidos.items = [];
    return true;
}

const repository = { findAll, addItem,updateQuantity, remove, removeAll}

export default repository;