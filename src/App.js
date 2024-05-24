import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter , Routes , Route } from "react-router-dom"
import Shop from './pages/Shop'
import ShopCategory from './pages/ShopCategory'
import Cart from './pages/Cart'
import Product from './pages/Product'
import LoginSignup from './pages/LoginSignup'
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div >
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCategory category="men"/>}/>
        <Route path='/women' element={<ShopCategory category="women"/>}/>
        <Route path='/kids' element={<ShopCategory category="kid"/>}/>
        <Route path='/product/:productId' element={<Product />} />
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
   
    </div>
  );
}

export default App;
