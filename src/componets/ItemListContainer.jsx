import { useEffect, useState } from "react"
import { getProducts } from '../api/api'
import ItemList from "./itemList"
import { useParams } from "react-router-dom"
import { Box, Grid, LinearProgress } from "@mui/material"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../firebase"

function ItemListContainer({ greeting }) {
    const [products, setProducts] = useState([])
    const { categoryName } = useParams();
    useEffect(() => {
        getProducts().then(function (products) {
            if (!categoryName) {
                setProducts(products)
            } else {
                const categoryProducts = collection(db, "items");
                const q = query(categoryProducts, where("category", "==", categoryName));
                getDocs(q).then((items) => {
                    const products = items.docs.map((doc) => ({ id: doc.id, ...doc.data() }))

                    setProducts(products)
                }).catch((err) => {

                });
            }
        });
    }, [categoryName]);

    useEffect(() => {
        getDocs(collection(db, "items")).then((items) => {
            const products = items.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
            console.log(products);
        }).catch((err) => {

        });
    }, []);

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