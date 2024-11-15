import logo from './logo.svg';
import './App.css';
import Navigation from './customer/components/Navigation/Navigation';
import HomePages from './customer/pages/HomePages';
import Footer from './customer/components/Footer/Footer';

function App() {
  return (
    <div className="">
      <Navigation/>
      <div>
        <HomePages/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
