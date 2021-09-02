import ItemList from "./ItemList";
import Itemcount from './ItemCount';
import './styles/ilc.css'; 
import ItemDetailContainer from "./ItemDetailContainer";


function ItemListContainer() {

    return(

        <div>
            <h1 className="tilc"> Conoce todos los viajes que tenemos para ofrecerte acá!</h1>

            <ItemDetailContainer/>


        </div>
    )


}

export default ItemListContainer;