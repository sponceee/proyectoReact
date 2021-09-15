{/*import React,{useContext, createContext, useState} from "react";
import { items } from "./ItemList";

export const CartContext = createContext();

export const CartProv = ({ children}) =>{

    const [carrito, setCarrito] = useState([]);

    setCarrito(previo=>console.log(previo))
    
    const enElCarrito = (id)=> carrito.some((items)=>items.id === id);

    const agregarACarrito = (items, cantidad) => {
        if (enElCarrito(items.id)){
            const nuevoCarrito = carrito.map((cartElement)=>{
            if(cartElement.id === items.id){
                return{ ...cartElement, cantidad: cartElement.cantidad + cantidad};
            } else return cartElement;
            });
            setCarrito(nuevoCarrito);
        } else{
            setCarrito((previo)=>[...previo,{...items, cantidad}]);

        }
    };

    const removeItem =(itemId)=>{
        setCarrito(carrito.filter((items)=> items.id !== itemId))
    }

    const clear = () => setCarrito([]);
    return(
        <CartContext.Provider value={{carrito, agregarACarrito,removeItem, clear} }>{children}</CartContext.Provider>

    );

}*/}
    