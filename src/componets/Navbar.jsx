import {useNavigate,useLocation} from 'react-router-dom';


function Navbar(){
  
    return (
        <footer className="navbar">
        <nav className="navbarNav" >
            <ul  className="navbarListItems"> 
                <li className="navbarListItem"> 
                <span className="material-icons">
grade
</span>
                <p>Ofertas</p>
                 </li>
                <li className="navbarListItem"> 
                <span className="material-icons">
store
</span>
                <p>Productos</p>
                </li>
                <li className="navbarListItem"> 
<span className="material-icons">
face
</span>
                <p>Perfil</p>
                 </li>
               
            </ul>
        </nav>
    </footer>
    )
}
export default Navbar