
import './App.css';
import ItemListContainer from './componets/ItemListContainer';
import Navbar from './componets/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <ItemListContainer greeting="Hola mundo"/>
    </div>
  );
}

export default App;
