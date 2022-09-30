import './App.css';
import Navbar from './components/navbar/navbar';
import Button from './components/Button/Button';
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListConteiner greeting={'Bienvenidos!'}/>
      <Button/>
    </div>
  );
}

export default App;
