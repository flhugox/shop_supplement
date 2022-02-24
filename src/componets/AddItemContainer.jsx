import { Button, TextField, Typography } from "@mui/material";
import { useState } from "react";



const AddItemContainer = () => {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");

    const handleTitleChange = event => setTitle(event.target.value);
    const handleDescriptionChange = event => setDescription(event.target.value);
    const handleCategoryChange = event => setCategory(event.target.value);
    const handlePriceChange = event => setPrice(event.target.value);
    const handleStockChange = event => setStock(event.target.value);

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(title)
    }
    const setImage = () => {

    }

    return (
        <div>
            <Typography variant="h5">BASIC WITH MATERIAL UI</Typography>
            <form>
                <TextField
                    style={{ width: "200px", margin: "5px" }}
                    type="text"
                    label="setgoal"
                    variant="outlined"
                />
                <br />
                <TextField
                    style={{ width: "200px", margin: "5px" }}
                    type="text"
                    label="goal description"
                    variant="outlined"
                />
                <br />
                <TextField
                    style={{ width: "200px", margin: "5px" }}
                    type="text"
                    label="Diversity catagory"
                    variant="outlined"
                />
                <br />
                <TextField
                    style={{ width: "200px", margin: "5px" }}
                    type="text"
                    label="Attribute"
                    variant="outlined"
                />
                <br />
                <TextField
                    style={{ width: "200px", margin: "5px" }}
                    type="text"
                    label="goal stage"
                    variant="outlined"
                />
                <br />
                <TextField
                    style={{ width: "200px", margin: "5px" }}
                    type="number"
                    label="job id"
                    variant="outlined"
                />
                <br />
                <TextField
                    style={{ width: "200px", margin: "5px" }}
                    type="text"
                    label="job region"
                    variant="outlined"
                />
                <br />
                <Button variant="contained" color="primary">
                    save
                </Button>
            </form>
        </div>
    )

    
}

export default AddItemContainer