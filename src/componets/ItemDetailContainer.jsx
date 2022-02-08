import { useEffect, useState } from "react"

import { getProducts } from '../api/api'
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
    const [item, setItem] = useState();
    useEffect(() => {
        console.log('Se ejecuta cuando se monta el componente')
        let itemId = 1;
        getProducts().then(function (products) {
            
            const item = products.find((i) => i.id === Number(itemId))
            console.log(item);
            setItem(item)
        }).catch(function (err) {
            console.error(err);
        });
    }, [])

    return (
        <div className="item-detail-container">
            {!item ? <p>Cargando producto ...</p>: <ItemDetail item={item}/>}
        </div>

    )
}
export default ItemDetailContainer