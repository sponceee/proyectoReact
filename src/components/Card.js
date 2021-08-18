import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import 'semantic-ui-css/semantic.min.css'
import Itemcount from './ItemCount';


function Card({title, imagenSrc}) {
    return (
        <div className="card text-center bg-dark">
            <img src={imagenSrc} alt=""/>
            <div className="card-body text-light">
                <h4 className="card-title ">{title}</h4>
                <p className="card-text text-secondary"> textoooo</p>
               {/* <a href="#!" className="btn btn-outline-secondary rounded-0">Comprar</a>*/}
                <Itemcount/>
            </div>
            
        </div>
    )
}

export default Card;
