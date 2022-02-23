import { Button, Grid, Link } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { CartContex } from "../context/cartContext";
import Item from "./item";
import ItemCount from "./itemCount";

export default function ItemDetail({ item }) {
    const [count, setCount] = useState(0);
    const { addToCart, cart } = useContext(CartContex)
    useEffect(() => {
    }, [count])

    function onChangeItemCout(newItem) {
        setCount(newItem)
        addToCart(newItem, item);
    }
    return (
        <div>

            <Grid container spacing={2}>
                <Grid item xs={3}>

                </Grid>
                <Grid item xs={6}>
                    <Item key={item.id} item={item} />
                </Grid>

            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={3}>

                </Grid>
                <Grid item xs={6}>
                    {
                        !count ? <ItemCount stock={20} initial={1} onAdd={onChangeItemCout} /> :
                            <NavLink to='/cart'><Button variant="contained" color="success">Terminar Compra</Button> </NavLink>
                    }
                </Grid>
                <Grid item xs={3}>

                </Grid>
            </Grid>
        </div>
    );
}