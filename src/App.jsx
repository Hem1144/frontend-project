import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Customers from "./pages/Customers";
import Resources from "./pages/Resources";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Company from "./pages/Company";
import Pricing from "./pages/Pricing";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/company" element={<Company />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </Router>
  );
}

export default App;
