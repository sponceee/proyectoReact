import React, {useEffect, useState}from 'react'
import ItemDetail from './itemDetail'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom';

function itemDetailContainer(){
    const {id} = useParams()

    return(

     <div>
     <h4>{id}</h4>
    <ItemList/>
    </div>
   )
}


export default itemDetailContainer

