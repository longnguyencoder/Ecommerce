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

function App() {
  return (
    <div className="">
      <Navigation/>
      <div>
        {/* <HomePages/> */}
        {/* <ProductCard/> */}
        {/* <Products/> */}
        {/* <ProductDetails/> */}
        <Checkout/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
