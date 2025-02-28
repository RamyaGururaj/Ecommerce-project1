import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './index.css';  
import Home from "./pages/Home";
import Marketplace from "./pages/Marketplace";
import Reels from "./pages/Reels";
import Onboarding from "./pages/Onboarding";

export default function App() {
  return (
    <Router>
      {/* Navigation Bar */}
      <div className="p-5 bg-white shadow-md flex gap-5">
        <Link to="/" className="text-blue-500 font-semibold">Home</Link>
        <Link to="/marketplace" className="text-green-500 font-semibold">Marketplace</Link>
        <Link to="/reels" className="text-red-500 font-semibold">Reels</Link>
      </div>

      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/reels" element={<Reels />} />
        <Route path="/onboarding" element={<Onboarding />} />
      </Routes>
    </Router>
  );
}