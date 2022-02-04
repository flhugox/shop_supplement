import { useEffect, useState } from "react"
import ItemCount from "./itemCount"
import { getProducts } from '../api/api'
import ItemList from "./itemList"
function ItemListContainer({ greeting }) {
    const [products, setProducts] = useState([])
    useEffect(() => {
        console.log('Se ejecuta cuando se monta el componente')
        getProducts().then(function (products) {
            console.log(products)
            setProducts(products)
        });
    }, [])
    function agregarItems(itemCount) {
        console.log(itemCount)
    }
    return (
        <div>
            <header className="header">
                <h1 className="logo"><a>{greeting}</a></h1>
            </header>
            {products.length}
            {products.length > 0 ? <ItemList products={products} /> : <p>Cargando...</p>}
            <ItemCount stock={5} initial={1} onAdd={agregarItems} />
        </div>

    )
}
export default ItemListContainer