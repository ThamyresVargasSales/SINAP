import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/conceitos" element={<div>Conceitos em Informática em Libras</div>} />
        <Route path="/jogos" element={<div>Jogos</div>} />
        <Route path="/contato" element={<div>Contato</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
