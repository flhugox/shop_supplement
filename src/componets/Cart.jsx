import { Alert, AlertTitle, AppBar, Button, IconButton, List, ListItem, Paper, Toolbar } from "@mui/material";
import { useContext, useEffect, useState } from "react";
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
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import "./css/Cart.css";
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const Cart = () => {
  const { cart, clearCart, deleteItem } = useContext(CartContex);
  const result = cart.reduce((total, currentValue) => total = total + (currentValue.price * currentValue.cantidad), 0);
  let id;
  const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
  };
  const [open, setOpen] = useState(false);
  const [idB, setIB] = useState();
  const handleClickOpen = () => {
    const orderCollection = collection(db, "order")

    var products = []
    var buyer = []
    cart.forEach((doc, i) => {
      products[i] = {
        'cantidad': doc.cantidad,
        'precio': doc.price,
        'id': doc.id,

      }
    })
    buyer = {
      'name': 'hugo',
      'phone': '433434',
      'email': 'hugo@teachcoders.com',

    }

    const newOrder = {
      buyer: {
        buyer
      },
      items: {
        products
      },
      total: result,
      date: new Date()
    }

    addDoc(orderCollection, newOrder).then(doc => {
      id = doc.id;
      setIB(doc.id);
    }).catch(err => {
      console.log(err);
    })
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    setIB(idB);
  }, [id])
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
                <Button onClick={handleClickOpen}>Pagar </Button>
                <Button onClick={clearCart} variant="outlined" color="error">Vaciar</Button>
              </Box>
            </Box>
          </>
        )}
      <Dialog
        open={open}
        fullScreen
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              TICKET {idB}
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <DialogTitle id="alert-dialog-title">

        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <div id="register">
              <div id="ticket">
                <h1>Thank You! {idB}</h1>
                {cart.map((obj) => (
                  <Grid container spacing={1} key={obj.id}>
                    <Grid item xs={2}>
                      <Item>{obj.cantidad}</Item>
                    </Grid>
                    <Grid item xs={8}>
                      <Item>{obj.title}</Item>
                    </Grid>
                    <Grid item xs={2}>
                      <Item>{obj.price}</Item>
                    </Grid>
                  </Grid>
                ))}
              </div>

              <Grid container spacing={1}>
                <Grid item xs={2}>
                  <Item>total: {result}</Item>
                </Grid>

              </Grid>

            </div>
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