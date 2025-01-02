import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Header from "./componentes/header/Header";
import Banner from "./componentes/banner/Banner";
import Footer from "./componentes/footer/Footer";
import Formulario from "./componentes/nuevoVideo/NuevoVideo";
import Home from "./componentes/HomeCard/Home";

function App() {
  const [videos, setVideos] = useState([]);
  const agregarVideo = (nuevoVideo) => {
    setVideos([...videos, { ...nuevoVideo, id: uuidv4() }]);
  };
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <Home videos={videos} setVideos={setVideos} />
            </>
          }
        />
        <Route
          path="/nuevo-video"
          element={<Formulario agregarVideo={agregarVideo} />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
