import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Profil from "./pages/Profil/Porofil";


function App() {
  const [getTokenChild, setGetTokenChild] = useState("");
  const [getEmail, setGetEmail] = useState("");
  const getToken = (token, email) => {
    setGetTokenChild(token);
    setGetEmail(email)
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login getToken={getToken} />} />
        <Route path="/profil" element={<Profil getTokenChild={getTokenChild} getEmail={getEmail} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
