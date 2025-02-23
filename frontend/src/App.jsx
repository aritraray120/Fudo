import Delivery from "./components/Delivery";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Download from "./components/Download";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
// import Cart from "./pages/Cart";

function App() {
  return ( 
    <div>

      <Navbar />
      <Hero />
      <Delivery />
      <Menu />
      <Download />
      <Footer />

      {/* <Cart /> */}
      
    </div>
   );
}

export default App;