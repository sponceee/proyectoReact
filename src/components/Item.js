import React, {useContext, useState} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from 'semantic-ui-css/semantic.min.css';
import Itemcount from './ItemCount';
import {Link} from 'react-router-dom';
import {CartContext} from "./CartContext"





function Item({title, imagenSrc, descripcion, precio, id, stock}) {

    const {agregarACarrito} =useContext(CartContext);
    const onAdd=(contador) =>console.log(contador)

    const [personas, setPersonas] = useState(0)

    const agregarPersonas = (contador) =>{
        console.log('Agregado a carrito')
        setPersonas(contador)
    }

    return (
        <div className="card text-center bg-dark"> 
                <img src={imagenSrc} alt=""/>
            <div className="card-body text-light">
                <Link to={`/item/${id}`}><h4 className="card-title ">{title}</h4></Link>
                <p className="card-text text-secondary"> {descripcion}</p>
                <p className="card-text text-secondary"> Precio desde: ${precio}</p>
                <p className="card-text text-secondary"> Personas: <Itemcount stock={stock} onAdd={agregarPersonas} /> </p>
                {personas === 0 ?
                <Itemcount stock="5" initial="0" onAdd={agregarPersonas}/>
                :
                <Link to ='/Cart'>
                    <Button>Finalizar compra</Button>
                </Link>
                
                }
                
            </div>
    
            
        </div>
        
    )
}

export default Item;
