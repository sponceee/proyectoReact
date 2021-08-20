import React from 'react';
import Card from './Card';
import usa from "../img/productos/usa.png";
import mx from "../img/productos/mx.png";
import pc from "../img/productos/puntacana.png";
import App from "./TimeOut";


const cards = [
    {
        id:1,
        title: 'Estados Unidos',
        image: usa,

    },

    {
        id:2,
        title: 'Cancun',
        image: mx,

    },

    {
        id:3,
        title: 'Punta Cana',
        image: pc,  
    }
]

function Cards() {
    
    return (
        <div className="container d-flex justify-content-center h-100 align-items-center">
            <div className="row">
               {
                   cards.map(card => (
                    <div className="col-md-4" key={card.id}>
            
                    <Card title={card.title} imagenSrc={card.image}/>
               
                   </div>

                   ))
               }
                

            </div>
            
        </div>
    )
}


export default Cards;
