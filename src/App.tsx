import { Provider } from "react-redux";
import { store } from "./redux/store";
import Navbar from './components/Navbar'
import Hero from "./components/Hero";
import Feature from "./components/Feature";
import TrendingProducts from "./components/TrendingProducts";
import { Toaster } from "react-hot-toast";
import Banner from "./components/Banner";
import NewArrival from "./components/NewArrival";
import Footer from "./components/Footer";
import { useState } from "react";
import Cart from "./components/Cart";

const App = () => {
const [showCart,setShowCart] = useState(false);


  return (
    <div className="max-w-[1360px] m-auto">
<Provider store={store}>
    <Navbar setShowCart={setShowCart} />
    {showCart && <Cart setShowCart={setShowCart}/>}
    <Hero/>
    <Feature/>
    <TrendingProducts/>
    <Banner/>
    <NewArrival/>
    <Footer/>
    <Toaster position="bottom-center" reverseOrder={false}/>
</Provider>

    </div>
  )
}

export default App;