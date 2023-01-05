import { } from "react-router-dom"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Profil from "./pages/Profil/Porofil";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/profil" element={<Profil />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
