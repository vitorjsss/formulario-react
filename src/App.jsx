import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Forms from "./pages/Forms";
import Invalid from "./pages/Invalid";

export default function App() {
  return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/forms" element={<Forms />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/invalid" element={<Invalid />} />
          </Routes>
        </BrowserRouter>
      </div>
  )
}