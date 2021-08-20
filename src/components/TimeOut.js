import React, {useEffect} from "react";


const App =() =>{

    useEffect(()=>{

        setTimeout(()=>{

          console.log("Obteniendo informacion");
          }, 4000 );
        
    },[]);

    

}

export default App;
