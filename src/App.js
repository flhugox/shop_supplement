
import './App.css';
import ItemDetailContainer from './componets/ItemDetailContainer';
import ItemListContainer from './componets/ItemListContainer';
import Navbar from './componets/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <ItemListContainer greeting="Hola mundo"/>
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
