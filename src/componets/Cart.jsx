import { Button, IconButton, List, ListItem } from "@mui/material";
import { useContext } from "react";
import { CartContex } from "../context/cartContext";
import DeleteIcon from '@mui/icons-material/Delete';
const Cart = () => {
  const { cart, clearCart, deleteItem } = useContext(CartContex);

  return (

    <div>

      {cart.length === 0 ? <h2>Sin datos</h2> :
        (
          <> <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>

            {cart.map((obj) => (
              <ListItem key={obj.id}
                secondaryAction={
                  <IconButton edge="end" aria-label="delete">
                    <DeleteIcon onClick={() => deleteItem(obj.id)} />
                  </IconButton>
                }
              >

                {obj.title} Cantidad: {obj.cantidad}
              </ListItem>
            ))}
          </List>
            <Button onClick={clearCart} variant="outlined">Vaciar</Button>
          </>
        )}



    </div>
  );
};
export default Cart