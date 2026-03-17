import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Sobre } from "./pages/Sobre";
import { Certificados } from "./pages/Certificados";
import { Projetos } from "./pages/Projetos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/certificados" element={<Certificados/>} />
        <Route path="/projetos" element={<Projetos/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;