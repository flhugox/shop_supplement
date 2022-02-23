import { Badge } from '@mui/material';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { CartContex } from '../context/cartContext';


function CartWidget() {
    const { cart } = useContext(CartContex);
    const result = cart.reduce((total, currentValue) => total = total + (currentValue.cantidad), 0);
    console.log(result);
    return (
        /* <li className="navbarListItem">
                    <span className="material-icons">
                    shopping_cart
                    </span>
                    <p>Cart</p>
                </li>*/
        <NavLink to="/cart">
            {result > 0 ? <Badge badgeContent={result} color="primary">
                <span className="material-icons">
                    shopping_cart
                </span>
            </Badge> :
                <span className="material-icons">
                    shopping_cart
                </span>
            }
            <p>Cart</p>
        </NavLink>

    )
}
export default CartWidget