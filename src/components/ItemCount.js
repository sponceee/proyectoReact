import React, {useState}from 'react';
import { Button } from 'semantic-ui-react';
import  './styles/count.css';


/*
class Itemcount extends React.Component{

    constructor(){

        super()

        this.state = {
            counter: 0,
        };

        this.handleCounterUp = this.handleCounterUp.bind(this);
    }

    handleCounterUp(){

       this.setState({counter: this.state.counter + 1})
    }

    handleCounterDown =()=>{
        this.setState({counter: this.state.counter - 1})
    }

    render(){

        return(
    <div className="boton0">
        <h1>Personas: {this.state.counter} </h1>
    <Button primary onClick={this.handleCounterUp}>+</Button>
    <Button secondary onClick={this.handleCounterDown}>-</Button>
    </div>   
    
    );
    
}
 
}

export default Itemcount;*/


const Itemcount =({onAdd, stock, initial = 1})=>{

    const [personas,setPersonas]= useState(initial);
    const aumentarPersonas =()=>{

        setPersonas (personas + 1);
           
    };

    const decrementarPersonas =()=>{

        setPersonas (personas - 1);
    };

    const agregarPersonas = ()=>{
        onAdd (personas)
    }

    return (
    <div className="boton0">

     <p>{personas}</p>
     <Button primary onClick={aumentarPersonas} disbled={personas >= stock}>+</Button>
     <Button secondary onClick={decrementarPersonas} disabled={personas <= 1}>-</Button>
     <Button onClick={agregarPersonas}>AGREGAR</Button>
    </div>
    
    );
      
}



export default Itemcount;
