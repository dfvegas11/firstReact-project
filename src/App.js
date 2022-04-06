import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar";
import Home from "./Pages/home/Home";
import NewHero from "./Pages/NewHero/NewHero";

const App = () => {
  useEffect(() => {
    fetchHeroes();
  }, []);

  const [heroes, setHeroes] = useState({
    1: {
      nombre: "",
      nombreReal: "",
      edad: "",
      imagen: "",
      descripcion: "",
    },
  });

  const fetchHeroes = async () => {
    const response = await fetch(
      "https://peticiones-giweb-4b594-default-rtdb.firebaseio.com/heroes.json"
    );
    const data = await response.json();
    setHeroes(data);
  };

  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/home" element={<Home heroes={heroes} />}></Route>
          <Route path="/new" element={<NewHero />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
