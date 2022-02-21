import React, { createContext, useState } from 'react';

export const CartContex = createContext([]);

const CartContextProvideer = ({ children }) => {
    const [cart, setCart] = useState([])
    const addToCart = (cantidad, items) => {
     
        if (isOnCart(items.id)) {
            let  index  =  cart.findIndex((obj => obj.id === items.id));
             cart[index].cantidad =   cart[index].cantidad + cantidad;

        } else {
            setCart([...cart, { ...items, cantidad }])
        }

  
    }


    const isOnCart = (id) => {
        const respuesta = cart.some((prod) => prod.id === id);
        return respuesta;
    }
    
    const clearCart = () => {
        setCart([]);
       
    }
    const deleteItem = (id) => {
        const newList = cart.filter((item) => item.id !== id);
        
        setCart(newList);
    }

    return (<CartContex.Provider value={{ cart, addToCart,clearCart,deleteItem }}>{children}</CartContex.Provider>)

}
export default CartContextProvideer;