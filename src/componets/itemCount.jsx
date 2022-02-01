import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import  { useState,useEffect  } from 'react';
function ItemCount({ stock, initial, onAdd }) {
    const [count, setCount] = useState(0);

   function addTo(){
       onAdd(count)
   } 
  useEffect(function() {
     
    if( count === 0 ) {
        setCount(initial);
    }
    if (count > stock) {   
        setCount(count-1)
    }
    if (count < 0) {   
        setCount(count+1)
    }
  }, [count])
  
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={5} md={4}>   
                </Grid>
                <Grid item xs={5} md={4}>
                          <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://st2.depositphotos.com/1001951/10455/i/450/depositphotos_104554512-stock-photo-bodybuilding-nutrition-supplements-and-chemistry.jpg"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Proteina
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Especial para deportistas
                            </Typography>
                        </CardContent>
                        <CardActions className="cardAcciones">
                            <IconButton aria-label="delete" onClick={() => setCount(count - 1)}>
                                <RemoveCircleOutlineIcon />
                            </IconButton>
                            <TextField
                            disabled
                            id="outlined-disabled"
                            label=""
                            value={count}
                           
                            />
                            <IconButton  aria-label="add" onClick={() => setCount(count + 1)}>
                                <AddIcon />
                            </IconButton>
                        </CardActions>
                        <CardActions className="cartButton">
                        <Button variant="outlined"  startIcon={<AddShoppingCartIcon />} onClick={addTo}>
                        Agregar Al carrito
                        </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={5} md={4}>
                </Grid>
            </Grid>
        </div>

    )
}
export default ItemCount