import React,{useContext, createContext, useState} from "react";
import { items } from "./ItemList";

export const CartContext = createContext();

export const CartProv = ({ children}) =>{

    const [carrito, setCarrito] = useState([]);
    
    const enElCarrito = (id)=> carrito.some((items)=>items.id === id);

    const agregarACarrito = (items, cantidad) => {
        if (enElCarrito(items.id)){
            const nuevoCarrito = carrito.map((cartElement)=>{
            if(cartElement === items.id){
                return{ ... cartElement,cantidad: cartElement.cantidad + cantidad};
            } else return cartElement;
            });
        }
    }


    return(
        <CartContext.Provider value={{carrito, agregarACarrito, removeItem, clear}}>{children}</CartContext.Provider>

    );

}
    