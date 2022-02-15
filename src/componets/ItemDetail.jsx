import { Link } from "@mui/material";
import { useEffect, useState } from "react";
import Item from "./item";
import ItemCount from "./itemCount";

export default function ItemDetail({ item }) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log(count)
    },[count])
    function onChangeItemCout(newItem){
        console.log(newItem)
        setCount(newItem)
    }
    return (
        <div>
            <Item key={item.id} item={item} />
            {
                !count ? <ItemCount stock={20} initial={1} onAdd={onChangeItemCout} />:<Link to='/cart'> Ir al carrito</Link>
            }
        </div>
    );
}