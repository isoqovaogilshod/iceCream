import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Help from "./Components/Help/Help";
import Pricing from "./Components/Pricing/Pricing";
import Product from "./Components/Products/Product";
import Simple from "./Components/Simple/Simple";
import SugarPart from "./Components/SugarPart/SugarPart";
function App() {
  return (
    <div className="wrapper">
      <Header />
      <Pricing />
      <SugarPart />
      <Product />
      <Simple />
      <Help />
      <Footer />
    </div>
  );
}

export default App;
