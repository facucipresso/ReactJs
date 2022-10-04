import './App.css';
import Navbar from './components/navbar/navbar';
import Button from './components/Button/Button';
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner';

function App() {
  return (
    <div className="App">
      <Navbar/>

      <ItemListConteiner greeting={'Bienvenidos!'}/>

      <Button handleOnClick={(children)=>console.log(children)} style={{ color: 'white', }}>
        Aceptar
      </Button>

      <Button handleOnClick={(children)=>console.log(children)} style={{backgroundColor: 'red', fontFamily: 'arial'}}>
        Cancelar
      </Button>
    </div>
  );
}

export default App;
