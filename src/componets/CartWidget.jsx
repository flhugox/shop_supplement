import { useNavigate, useLocation } from 'react-router-dom';


function CartWidget() {

    return (
                    <li className="navbarListItem">
                        <span className="material-icons">
                        shopping_cart
                        </span>
                        <p>Cart</p>
                    </li>
    )
}
export default CartWidget