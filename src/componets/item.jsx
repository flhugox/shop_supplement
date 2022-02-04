import { Card, CardContent, CardMedia, Typography } from "@mui/material";

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
                        </CardContent>
           
        </div>
        </Card>
    )
}