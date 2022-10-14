import './App.css';
import Navbar from './components/navbar/navbar';
import Button from './components/Button/Button';
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>     
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListConteiner/>}/>
          <Route path='/detail/:productId' element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>








      <Button handleOnClick={(children) => console.log(children)} style={{ color: 'white', }}>
        Aceptar
      </Button>

      <Button handleOnClick={(children) => console.log(children)} style={{ backgroundColor: 'red', fontFamily: 'arial' }}>
        Cancelar
      </Button>







      {/* <BrowserRouter>
        
        <Routes>
          <Route path='/' element={<ItemListConteiner/>}/>
          <Route path='/detail' element={sfhs }/> */} {/* aca va el itemDetailContainer */}
      {/* <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
        </Routes>
      </BrowserRouter> */}

    </div>
  );
}

export default App;
{ }