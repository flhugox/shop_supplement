import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';

import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useState } from 'react';
function ItemCount({ stock, initial, onAdd, onChangeItemCout }) {
    const [count, setCount] = useState(0);

    function addTo() {
        onAdd(count)
    }
    function addToCart(event) {
        onAdd(event.target.value)
    }
    /* useEffect(function() {
        
       if( count === 0 ) {
           setCount(initial);
       }
       if (count > stock) {   
           setCount(count-1)
       }
       if (count < 0) {   
           setCount(count+1)
       }
     }, [count])*/

    const sumar = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }
    const restar = () => {
        if (count > initial) {
            setCount(count - 1)
        }
    }

    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={5} md={4}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardContent>
                        </CardContent>
                        <CardActions className="cardAcciones">
                            <IconButton aria-label="delete" onClick={restar}>
                                <RemoveCircleOutlineIcon />
                            </IconButton>
                            <TextField
                                disabled
                                id="outlined-disabled"
                                label=""
                                value={count} />
                            {
                                /*
                                <FormControl fullWidth>
                                     <InputLabel id="demo-simple-select-label">Age</InputLabel>
                                     <Select labelId="demo-simple-select-label" id="demo-simple-select" label="Age" onChange={onChangeItemCout}>
                                         {
                                             Array.from(Array(stock).keys()).map(function (num) {
                                                 return <MenuItem key={num + 1} value={num + 1}>{num + 1}</MenuItem>
                                             })
                                         }
                                     </Select>
                                 </FormControl> 
                                 */
                            }
                            <IconButton aria-label="add" onClick={sumar}>
                                <AddIcon />
                            </IconButton>
                        </CardActions>
                        <CardActions className="cartButton">
                            <Button variant="outlined" startIcon={<AddShoppingCartIcon />} onClick={addTo}>
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