import { Button, TextField, Typography } from "@mui/material";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { getStorage, ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase";


const EdititemContainer = () => {
    const { id } = useParams()
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [stock, setStock] = useState(0);
    const [defaultImage, setDefaultImage] = useState("");
    const [image, setImage] = useState();

    let pictureUrl = "";
 
    const handleTitleChange = event => setTitle(event.target.value);
    const handleDescriptionChange = event => setDescription(event.target.value);
    const handleCategoryChange = event => setCategory(event.target.value);
    const handlePriceChange = event => setPrice(event.target.value);
    const handleStockChange = event => setStock(event.target.value);
    const handleImageChange = event => setImage(event.target.files[0]);

    useEffect(() => {
        const docRef = doc(db, "items", id);
        getDoc(docRef).then((doc) => {
            const document = doc.data();
            setTitle(document.title);
            setDescription(document.description);
            setPrice(document.price);
            setCategory(document.category);
            setStock(document.stock);
            setDefaultImage(document.pictureUrl);

        }).catch((err) => {

        })
    }, [id])

    const onSubmit = async (event) => {
        event.preventDefault();      
        const docRef = doc(db, "items", id)
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
            pictureUrl: pictureUrl ? pictureUrl : defaultImage
        }

        updateDoc(docRef, newItem)
            .then()
            .catch(error => console.log(error))
    }
    return (
        <div>

            <Typography variant="h5">BASIC WITH MATERIAL UI</Typography>
            <form onSubmit={onSubmit}>
                <TextField
                    style={{ width: "200px", margin: "5px" }}
                    type="text"
                    value={title}
                    label="Nombre del producto"
                    variant="outlined"
                    onChange={handleTitleChange}
                />
                <br />
                <TextField
                    style={{ width: "200px", margin: "5px" }}
                    type="text"
                    value={description}
                    label="Descripcion del producto"
                    variant="outlined"
                    onChange={handleDescriptionChange}
                />
                <br />
                <TextField
                    style={{ width: "200px", margin: "5px" }}
                    type="text"
                    value={category}
                    label="Categoria"
                    variant="outlined"
                    onChange={handleCategoryChange}
                />
                <br />
                <TextField
                    style={{ width: "200px", margin: "5px" }}
                    type="number"
                    value={price}
                    label="Precio"
                    variant="outlined"
                    onChange={handlePriceChange}
                />
                <br />
                <TextField
                    style={{ width: "200px", margin: "5px" }}
                    type="number"
                    value={stock}
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
                    onChange={handleImageChange}

                />
                <div>
                    <img src="{pictureUrl ? pictureUrl:defaultImage}" alt="preview" />
                </div>
                <br />
                <br />
               <Button variant="contained" type="submit" color="primary">save </Button>
            </form>
        </div>
    )
}
export default EdititemContainer