import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import HomePages from '../pages/HomePages'
import Cart from '../components/Cart/Cart'
import Products from '../components/Product/Products'
import ProductDetails from '../components/ProductDetails/ProductDetails'
import Checkout from '../components/Checkout/Checkout'
import Navigation from '../components/Navigation/Navigation'
import Order from '../components/Order/Order'
import OrderDetails from '../components/Order/OrderDetails'

const CustommerRouters = () => {
  return (
    <div>
      <div>
        <Navigation/>
      </div>
      <Routes>  
    <Route path="/" element={<HomePages />} />  
    <Route path="/cart" element={<Cart />} />  
    <Route path="/:levelOne/:levelTwo/:levelThree" element={<Products />} />  
    <Route path="/product/:productId" element={<ProductDetails />} />  
    <Route path="/checkout" element={<Checkout />} /> 
    <Route path="/account/order" element={<Order />} /> 
    <Route path="/account/order/:orderId" element={<OrderDetails />} /> 
</Routes>

      <div>
      <Footer/>
      </div>
    </div>
    
  )
}

export default CustommerRouters
