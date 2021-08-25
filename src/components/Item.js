import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import 'semantic-ui-css/semantic.min.css'
import Itemcount from './ItemCount';


function Item({title, imagenSrc, descripcion, precio}) {
    return (
        <div className="card text-center bg-dark">
            <img src={imagenSrc} alt=""/>
            <div className="card-body text-light">
                <h4 className="card-title ">{title}</h4>
                <p className="card-text text-secondary"> {descripcion}</p>
                <p className="card-text text-secondary"> Precio desde: ${precio}</p>
                <a href="#!" className="btn btn-outline-secondary rounded-0">Ver más</a>
                <Itemcount/>
            </div>
            
        </div>
    )
}

export default Item;
