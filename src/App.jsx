import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import PlantsPage from "./pages/PlantsPage";
import CartPage from "./pages/CartPage";
import AboutPage from "./pages/AboutPage";

function App() {

  return (
    <Routes>
      <Route path="/about" element={<AboutPage />} /> 
      
      <Route path="/" element={<LandingPage />} />

      <Route path="/plants" element={<PlantsPage />} />

      <Route path="/cart" element={<CartPage />} />

    </Routes>
  );
}

export default App;
