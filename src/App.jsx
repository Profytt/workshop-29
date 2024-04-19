import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllPlayers from "./components/AllPlayers.jsx";
import NewPlayer from "./components/NewPlayer.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<AllPlayers />} />
        <Route path="/NewPlayer" element={<NewPlayer />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
