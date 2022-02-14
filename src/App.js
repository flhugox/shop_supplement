
import './App.css';
import ItemDetailContainer from './componets/ItemDetailContainer';
import ItemListContainer from './componets/ItemListContainer';
import Navbar from './componets/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
   
      <div className="App">
        <Navbar></Navbar>
        <main>
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/producto/:productId" element={<ItemDetailContainer />} />
            <Route path="/category/:categoryName" element={<ItemListContainer />} />
          </Routes>
        </main>
      </div>
  
  );
}
export default App;