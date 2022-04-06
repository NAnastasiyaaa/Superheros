import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import React from "react";
import AddHero from "./components/AddHero";
import Heros from "./components/Hero/Heros";

function App() {
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>

      <main>
        <Routes>
          <Route path="/add" element={<AddHero />} exact />
          <Route path="/heros" element={<Heros />} exact />
        </Routes>
       
      </main>
    </React.Fragment>
  );
}

export default App;
