import { collection, getDocs } from "firebase/firestore"
import { db } from "../firebase"

const promesa = new Promise(function(resolve, reject) {
    setTimeout(function() {
        getDocs(collection(db, "items")).then((items) => {
            const products = items.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
            resolve(products);
        }).catch((err) => {

        });
    }, 2000)
})

function getProducts() {
    return promesa;
}
export {
    getProducts,
}