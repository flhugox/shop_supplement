import { useEffect, useState } from "react"
import ItemCount from "./itemCount"
import { getProducts } from '../api/api'
import ItemList from "./itemList"
import { useParams } from "react-router-dom"
function ItemListContainer({ greeting }) {
    const [products, setProducts] = useState([])
    const { categoryName } = useParams();
    console.log(categoryName)
    useEffect(() => {

        getProducts().then(function (products) {
            if (!categoryName) {
                setProducts(products)
            } else {
                const itemByCategory = products.filter((productos) => {
                    return productos.category === categoryName;
                }); setProducts(itemByCategory)
            }


        });
    }, [categoryName])
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