import logo from './logo.svg';
import './App.css';
import Navigation from './customer/components/Navigation/Navigation';
import HomePages from './customer/pages/HomePages';
import Footer from './customer/components/Footer/Footer';

import ProductCard from './customer/components/Product/ProductCard';
import Products from './customer/components/Product/Products';

function App() {
  return (
    <div className="">
      <Navigation/>
      <div>
        {/* <HomePages/> */}
        {/* <ProductCard/> */}
        <Products/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
