import React, {useState} from 'react';
import React from 'react';
import Itemcount from './ItemCount';
import { Button } from 'semantic-ui-react';





function ItemDetail({items}){

    
    
 

    return<>
    <h4>{items.title}</h4>
    <Itemcount/>
    <button>Terminar compra</button>
    </>
}

export default ItemDetail