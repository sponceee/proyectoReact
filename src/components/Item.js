import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import 'semantic-ui-css/semantic.min.css';
import Itemcount from './ItemCount';
import { Button } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import items from './ItemList';



function Item({title, imagenSrc, descripcion, precio}) {



    return (
        <div className="card text-center bg-dark">
            
            <img src={imagenSrc} alt=""/>
            <div className="card-body text-light">
                <Link to={`/items/${items.id}`}><h4 className="card-title ">{title}</h4></Link>
                <p className="card-text text-secondary"> {descripcion}</p>
                <p className="card-text text-secondary"> Precio desde: ${precio}</p>
                <p className="card-text text-secondary"> Personas: <Itemcount/> </p>
            </div>
            
        </div>
        
    )
}

export default Item;
