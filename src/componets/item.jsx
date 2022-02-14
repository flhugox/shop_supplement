import { Fingerprint, Link } from "@mui/icons-material";
import { Button, Card, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import { NavLink, Router } from "react-router-dom";

export default function Item({ item }) {
    return (
        <Card sx={{ maxWidth: 445 }}>
            <div>
                <CardMedia
                    component="img"
                    height="auto"
                    image={item.pictureUrl}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {item.price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {item.title}
                    </Typography>
                   
                    
                    <IconButton aria-label="fingerprint" color="success">
                    <NavLink to={'/producto/' + item.id}
                        key={item.item}> Ver Detalles
                         <Fingerprint /></NavLink>
                    </IconButton>
                </CardContent>

            </div>
        </Card>
    )
}