import React from 'react';
import Item from './Item';
import usa from "../img/productos/usa.png";
import mx from "../img/productos/mx.png";
import pc from "../img/productos/puntacana.png";


const items = [
    {
        id:1,
        title: 'Estados Unidos',
        image: usa,
        descripcion: 'Viajá al país más visitado del mundo! ',
        precio: '150',

    },

    {
        id:2,
        title: 'Cancun',
        image: mx,
        descripcion: 'Relajate en una de las playas más lindas y exoticas del mundo ;)',
        precio: '120',

    },

    {
        id:3,
        title: 'Punta Cana',
        image: pc, 
        descripcion: 'Necesitas relajarte? Sin dudas, el mejor lugar para lo que necesitas! ',
        precio: '90', 
    }
]

function ItemList() {
    
    return (
        <div className="container d-flex justify-content-center h-100 align-items-center">
            <div className="row">
               {
                   items.map(items => (
                    <div className="col-md-4" key={items.id}>
            
                    <Item title={items.title} imagenSrc={items.image} descripcion={items.descripcion} precio={items.precio}/>
               
                   </div>

                   ))
               }
                

            </div>
            
        </div>
    )
}


export default ItemList;
