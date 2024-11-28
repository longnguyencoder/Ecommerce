import logo from './logo.svg';
import './App.css';
import Navigation from './customer/components/Navigation/Navigation';
import HomePages from './customer/pages/HomePages';
import Footer from './customer/components/Footer/Footer';

import ProductCard from './customer/components/Product/ProductCard';
import Products from './customer/components/Product/Products';
import ProductDetails from './customer/components/ProductDetails/ProductDetails';
import Cart from './customer/components/Cart/Cart';
import Checkout from './customer/components/Checkout/Checkout';
import Order from './customer/components/Order/Order';
import OrderDetails from './customer/components/Order/OrderDetails';
import { Route, Routes } from 'react-router-dom';
import CustommerRouters from './customer/Routers/CustommerRouters';

function App() {
  return (
    <div className="">

<Routes>  
    <Route path="*" element={<CustommerRouters />} />  
</Routes>
      

      
    </div>
  );
}

export default App;
