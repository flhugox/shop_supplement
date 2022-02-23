import { Fingerprint, Link } from "@mui/icons-material";
import { Button, Card, CardContent, CardMedia, Grid, IconButton, Typography } from "@mui/material";
import { NavLink, Router } from "react-router-dom";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
export default function Item({ item }) {
    const Items = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    return (
        <Grid item xs={4}>
            <Items>
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
                        <Button variant="outlined" size="medium">
                            <NavLink to={'/producto/' + item.id}
                                key={item.item}> Ver Detalles
                                <Fingerprint /></NavLink>
                        </Button>
                    </CardContent>
                </div>
            </Items>
        </Grid>
    )
}