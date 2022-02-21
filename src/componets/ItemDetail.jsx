import { Link } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { CartContex } from "../context/cartContext";
import Item from "./item";
import ItemCount from "./itemCount";

export default function ItemDetail({ item }) {
    const [count, setCount] = useState(0);
    const {addToCart,cart}= useContext(CartContex)
    useEffect(() => {
    }, [count])
    
    function onChangeItemCout(newItem) {     
        setCount(newItem)
        addToCart(newItem,item);
    }
    return (
        <div>
            <Item key={item.id} item={item} />
            {
                !count ? <ItemCount stock={20} initial={1} onAdd={onChangeItemCout} /> : <NavLink to='/cart'> Ir al carrito</NavLink>
            }
        </div>
    );
}