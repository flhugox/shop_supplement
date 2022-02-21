
import './App.css';
import ItemDetailContainer from './componets/ItemDetailContainer';
import ItemListContainer from './componets/ItemListContainer';
import Navbar from './componets/Navbar';
import { Routes, Route } from 'react-router-dom';
import Cart from './componets/Cart';
import CartContextProvideer from './context/cartContext';
function App() {
  return (
    <CartContextProvideer>
      <div className="App">
        <Navbar></Navbar>
        <main>
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/producto/:productId" element={<ItemDetailContainer />} />
            <Route path="/category/:categoryName" element={<ItemListContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<div>
              <h1>No found 404</h1>
            </div>} />
          </Routes>
        </main>
      </div>
      </CartContextProvideer>


      );
}
      export default App;