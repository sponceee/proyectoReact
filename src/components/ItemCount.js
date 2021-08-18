import React from 'react';
import { Button } from 'semantic-ui-react';
import  './styles/count.css';


{/*
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

export default Itemcount;*/}


const Itemcount =()=>{

    const [personas,setPersonas]= React.useState(0);
    const aumentarPersonas =()=>{

        setPersonas (personas + 1);
           
    };

    const decrementarPersonas =()=>{

        setPersonas (personas - 1);
    };

    return (
    <div className="boton0">

     <p>Personas: {personas}</p>
     <Button primary onClick={aumentarPersonas}>+</Button>
     <Button secondary onClick={decrementarPersonas}>-</Button>
    </div>
    
    );
      
}



export default Itemcount;
