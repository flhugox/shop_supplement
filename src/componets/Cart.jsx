import { Alert, AlertTitle, Button, Divider, IconButton, List, ListItem } from "@mui/material";
import { useContext, useState } from "react";
import { CartContex } from "../context/cartContext";
import DeleteIcon from '@mui/icons-material/Delete';
import { NavLink } from "react-router-dom";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const Cart = () => {
  const { cart, clearCart, deleteItem } = useContext(CartContex);
  const total = 0;
  const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
  };
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const result = cart.reduce((total, currentValue) => total = total + (currentValue.price * currentValue.cantidad), 0);
  console.log(result)
  return (
    <div>
      {cart.length === 0 ?
        <Alert severity="error">
          <AlertTitle>No hay items Agregados</AlertTitle>
          Regresar al inicio — <NavLink to='/'>
            <Button color="secondary"><strong>Aqui</strong></Button>
          </NavLink>
        </Alert> :
        (
          <> <List sx={style} component="nav">
            {cart.map((obj) => (
              <ListItem key={obj.id}
                secondaryAction={
                  <IconButton edge="end" aria-label="delete">
                    <DeleteIcon onClick={() => deleteItem(obj.id)} />
                  </IconButton>
                }
              >
                Descripcion : {obj.title}
                Cantidad: {obj.cantidad}
                precio : {obj.price}
              </ListItem>
            ))}
          </List>


            <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
              <Box sx={{ my: 3, mx: 2 }}>
                <Grid container alignItems="center">
                  <Grid item xs>
                    <Typography gutterBottom variant="h4" component="div">
                      Cantidad Total
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography gutterBottom variant="h6" component="div">
                      {result}
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
              <Box sx={{ mt: 3, ml: 1, mb: 1 }}>
                <Button  onClick={handleClickOpen}>Pagar </Button>
                <Button onClick={clearCart} variant="outlined" color="error">Vaciar</Button>
              </Box>
            </Box>
          </>
        )}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
         Se ha pagado....
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           Pagado
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cerrar</Button>
         
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default Cart