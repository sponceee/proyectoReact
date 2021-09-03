import React, {useContext} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import 'semantic-ui-css/semantic.min.css';
import Itemcount from './ItemCount';
import {Link} from 'react-router-dom';
import {CartContext} from "./CartContext"





function Item({title, imagenSrc, descripcion, precio, id}) {

    const useC =useContext(CartContext);
    console.log("useC: ", useC);

    return (
        <div className="card text-center bg-dark">
            
            <img src={imagenSrc} alt=""/>
            <div className="card-body text-light">
                <Link to={`/item/${id}`}><h4 className="card-title ">{title}</h4></Link>
                <p className="card-text text-secondary"> {descripcion}</p>
                <p className="card-text text-secondary"> Precio desde: ${precio}</p>
                <p className="card-text text-secondary"> Personas: <Itemcount/> </p>
            </div>
            
        </div>
        
    )
}

export default Item;
