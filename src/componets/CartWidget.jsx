import { Badge, Box, Tooltip } from '@mui/material';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { CartContex } from '../context/cartContext';


function CartWidget() {
    const { cart } = useContext(CartContex);
    const result = cart.reduce((total, currentValue) => total = total + (currentValue.cantidad), 0);
    return (
    
        <Box sx={{ flexGrow: 0 }}>
            <NavLink to="/cart">
                <Tooltip title="Open settings">
                    {result > 0 ? <Badge badgeContent={result} color="primary">
                        <span className="material-icons">
                            shopping_cart
                        </span>
                    </Badge> :
                        <span className="material-icons">
                            shopping_cart
                        </span>
                    }
                </Tooltip>
            </NavLink>
        </Box>
    )
}
export default CartWidget