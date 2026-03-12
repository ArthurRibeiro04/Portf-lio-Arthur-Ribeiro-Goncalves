import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Sobre } from "./pages/Sobre";
import { Certificados } from "./pages/Certificados";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/certificados" element={<Certificados/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;