import { MenuItem, Typography } from '@mui/material';
import { useNavigate, useLocation, NavLink } from 'react-router-dom';


function CartWidget() {

    return (
        /*        <li className="navbarListItem">
                    <span className="material-icons">
                    shopping_cart
                    </span>
                    <p>Cart</p>
                </li>*/
        <NavLink to="category/cart">
            <span className="material-icons">
                shopping_cart
            </span>
            <p>Cart</p>
        </NavLink>

    )
}
export default CartWidget