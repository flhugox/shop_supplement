import { useEffect, useState } from "react"
import ItemCount from "./itemCount"
import { styled } from '@mui/material/styles';
import { getProducts } from '../api/api'
import Paper from '@mui/material/Paper';
import ItemList from "./itemList"
import { useParams } from "react-router-dom"
import { Box, Grid, LinearProgress } from "@mui/material"
function ItemListContainer({ greeting }) {
    const [products, setProducts] = useState([])
    const { categoryName } = useParams();


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

    }
    return (
        <div>
            <header className="header">
                <h1 className="logo">Productos</h1>
            </header>


            {products.length > 0 ?
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <ItemList products={products} />
                    </Grid>
                </Box> : <LinearProgress />}

        </div>

    )
}
export default ItemListContainer