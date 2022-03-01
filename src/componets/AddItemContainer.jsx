import { Button, TextField, Typography } from "@mui/material";
import { addDoc, collection } from "firebase/firestore";
import { getStorage, ref, getDownloadURL,uploadBytes } from "firebase/storage";
import { useState } from "react";
import { db } from "../firebase";

const AddItemContainer = () => {

    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [stock, setStock] = useState(0);
    const [image, setImage] = useState();

    const handleTitleChange = event => setTitle(event.target.value);
    const handleDescriptionChange = event => setDescription(event.target.value);
    const handleCategoryChange = event => setCategory(event.target.value);
    const handlePriceChange = event => setPrice(event.target.value);
    const handleStockChange = event => setStock(event.target.value);
    const handleImageChange = event => setImage(event.target.files[0]);

    const onSubmit = async (event) => {
        event.preventDefault();
        if (![title, category, description].some(field => field === "")) {
            let pictureUrl = "";
            const itemCollection = collection(db, "items")
                 
            if (typeof image !== "undefined") {
                const storage = getStorage();
                const imageName = (+ new Date()).toString(36);
                const storageRef = ref(storage, `items/${imageName}`);

                const uploadTask = await uploadBytes(storageRef, image)

                pictureUrl = await getDownloadURL(uploadTask.ref)

            }
            const newItem = {
                title: title,
                category: category,
                description: description,
                price: price,
                stock: stock,
                pictureUrl:pictureUrl
            }
          
            addDoc(itemCollection, newItem).then(doc => {
            }).catch(err => {
                console.log(err);
            })
        } else {

        }
    }


    return (
        <div>
            <Typography variant="h5">BASIC WITH MATERIAL UI</Typography>
            <form onSubmit={onSubmit}>
                <TextField
                    style={{ width: "200px", margin: "5px" }}
                    type="text"
                    label="Nombre del producto"
                    variant="outlined"
                    onChange={handleTitleChange}
                />
                <br />
                <TextField
                    style={{ width: "200px", margin: "5px" }}
                    type="text"
                    label="Descripcion del producto"
                    variant="outlined"
                    onChange={handleDescriptionChange}
                />
                <br />
                <TextField
                    style={{ width: "200px", margin: "5px" }}
                    type="text"
                    label="Categoria"
                    variant="outlined"
                    onChange={handleCategoryChange}
                />
                <br />
                <TextField
                    style={{ width: "200px", margin: "5px" }}
                    type="number"
                    label="Precio"
                    variant="outlined"
                    onChange={handlePriceChange}
                />
                <br />
                <TextField
                    style={{ width: "200px", margin: "5px" }}
                    type="number"
                    label="Stock"
                    variant="outlined"
                    onChange={handleStockChange}
                />
                <br />
                <TextField
                    style={{ width: "200px", margin: "5px" }}
                    type="file"
                    label="Imagen"
                    variant="outlined"
                    onChange={ handleImageChange}

                />
                <br />
                <br />
                <Button variant="contained" type="submit" color="primary">
                    save
                </Button>
            </form>
        </div>
    )
}
export default AddItemContainer