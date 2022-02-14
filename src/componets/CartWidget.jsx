import { MenuItem, Typography } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';


function CartWidget() {

    return (
        /*        <li className="navbarListItem">
                    <span className="material-icons">
                    shopping_cart
                    </span>
                    <p>Cart</p>
                </li>*/

        <MenuItem>
            <Typography textAlign="center">
                <span className="material-icons">
                    shopping_cart
                </span>  <p>Cart</p></Typography>
        </MenuItem>
    )
}
export default CartWidget