import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

import { getProducts } from '../api/api'
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
    const [item, setItem] = useState();
    const { productId } = useParams();
  
    useEffect(() => {
        getProducts().then(function (products) {
            const item = products.find((i) => i.id === Number(productId))
            setItem(item)
        }).catch(function (err) {
            console.error(err);
        });
    }, [productId])
    return (
        <div className="item-detail-container">
            {!item ? <p>Cargando producto ...</p> : <ItemDetail item={item} />}
        </div>

    )
}
export default ItemDetailContainer