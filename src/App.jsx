import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Game from "./components/Game.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Game />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
