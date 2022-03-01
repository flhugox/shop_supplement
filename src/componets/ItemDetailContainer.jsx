import { LinearProgress } from "@mui/material";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { doc, getDoc } from "firebase/firestore"
import { db } from "../firebase"

function ItemDetailContainer() {
    const [item, setItem] = useState();
    const { productId } = useParams();

    useEffect(() => {
        const itemRef = doc(db, "items", productId)
        getDoc(itemRef).then((item) => {
            if (item.exists()) {
                setItem({ id: item.id, ...item.data() })
            }
        }).catch(function (err) {
            console.error(err);
        });
    }, [productId])

    return (
        
        <div className="item-detail-container">
            {!item ? <LinearProgress /> : <ItemDetail item={item} />}
        </div>

    )
}
export default ItemDetailContainer