import Delivery from "./components/Delivery";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Download from "./components/Download";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
// import Cart from "./pages/Cart";

function App() {
  return ( 
    <div className="w-[96%] max-w-[1400px] mx-auto py-5">
    {/* Your existing components */}
    <Navbar />
    <Hero />
    <Delivery />
    <Menu />
<Download />
    <Footer />
  </div>
   );
}

export default App;