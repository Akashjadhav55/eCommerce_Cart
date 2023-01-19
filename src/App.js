import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Product/Home';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/cart/:id' element={<Cart/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
