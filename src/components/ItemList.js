import React, {useState, useEffect} from 'react';
import Item from './Item';
import usa from "../img/productos/usa.png";
import mx from "../img/productos/mx.png";
import pc from "../img/productos/puntacana.png";
import bcn from "../img/productos/bcn.png";
import bogota from "../img/productos/bogota.png";
import brisbane from "../img/productos/brisbane.png";
import costarica from "../img/productos/costarica.png";
import frankfurt from "../img/productos/frankfurt.png";
import miami from "../img/productos/miami.png";
import riojaneiro from "../img/productos/riodejaneiro.png";
import sgochile from "../img/productos/sgochile.png";
import playacarmen from "../img/productos/playacarmen.png";
import { useParams } from 'react-router-dom';




export const items = [

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
        precio: '120', 
    },
    
    {
        id:4,
        title: 'Bogota',
        image: bogota, 
        descripcion: '',
        precio: '110', 
    },
    
    {
        id:5,
        title: 'Miami',
        image: miami, 
        descripcion: '',
        precio: '90', 
    },
    
    {
        id:6,
        title: 'Santiago de Chile',
        image: sgochile, 
        descripcion: ' ',
        precio: '60', 
    },
    
    {
        id:7,
        title: 'Barcelona',
        image: bcn, 
        descripcion: '',
        precio: '111', 
    },
    
    {
        id:8,
        title: 'Costa Rica',
        image: costarica, 
        descripcion: ' ',
        precio: '87', 
    },
    {
        id:9,
        title: 'Rio de Janeiro',
        image: riojaneiro, 
        descripcion: ' ',
        precio: '30', 
    },
    
    {
        id:10,
        title: 'Playa del Carmen',
        image: playacarmen, 
        descripcion: ' ',
        precio: '60', 
    },
    
    {
        id:11,
        title: 'Brisbane',
        image: brisbane, 
        descripcion: ' ',
        precio: '150', 
    },
    
    {
        id:12,
        title: 'Frankfurt',
        image: frankfurt, 
        descripcion: ' ',
        precio: '90', 
    },
]

const getItems =()=>{

    return new Promise ((trajoDatosOk,error)=>{
        setTimeout(()=>{
            trajoDatosOk(items)
        })
    },2000)
}



function ItemList  () {
    const [datosItem, setdatosItem]=useState([]);
    const params = useParams ()

    useEffect(() => {
        getItems()
        .then((items) => {
            setdatosItem(items)
        })
    }, [])

    const[ResultadoItems,setResultadoItems] = useState ([])

    const {id} = useParams()

    useEffect(() => {
        const llamadaAServidor = new Promise ((traerDatosok, error)=>{
            setTimeout(()=>{
                id ?
                traerDatosok(items.find(e=>e.id === id))
                :
                traerDatosok(items)
    }, 2000)
})
    llamadaAServidor.then((items)=>{
        setResultadoItems(items)
    })

},[])



    return (

        
        <div className="container d-flex justify-content-center h-100 align-items-center">
            <div className="row">
               {
                   items.map(items => (
                    
                    <div className="col-md-4">
                    <Item items ={datosItem} title={items.title} imagenSrc={items.image} descripcion={items.descripcion} precio={items.precio}  id={items.id}/>
               
                   </div>

                   ))
               }
                

            </div>
            
        </div>
    );
}


export default ItemList;
