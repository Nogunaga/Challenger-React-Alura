import React from "react";
import styled from "styled-components";
import BotonBanner from "../BotonBanner/BotonBanner";


const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw; /* Ocupar todo el ancho de la ventana */
  height: 832px;
  background-image: url("https://wallpaperaccess.com/full/246653.jpg"); /* URL de la imagen de Naruto  pantalla grande*/
  background-size: cover; /* Asegura que la imagen cubra todo el contenedor */
  background-position: center; /* Centra la imagen */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin: 0 auto; /* Centra el banner horizontalmente */
  padding: 20px; /* Ajusta el padding según sea necesario */
  box-sizing: border-box; /* Incluye el padding en el ancho total */
  position: relative; /* Necesario para la imagen superpuesta */
  /* ...otros estilos... */
  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 10px;
  }
`;

const TextSection = styled.div`
  flex: 1;
  padding: 20px;
   /* ...otros estilos... */
   @media (max-width: 768px) {
    padding: 10px;
  }
`;
const Subtitle = styled.h2`
  font-size: 1.5rem;
  color: #666;
  margin-bottom: 20px;
`;

const Banner = () => (
  <BannerContainer>
    <TextSection>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
      <BotonBanner />
      </div>
      <Subtitle>
        Bienvenido a mi pagina de Challenger en donde podes encontrar todos tus
        videos favoritos en un solo lugar
      </Subtitle>
      {/* {videos && videos.length > 0 ? (
        videos.map((video, index) => (
          <Card key={index}>
            <h3>{video.titulo}</h3>
            <p>Categoría: {video.categoria}</p>
            <a href={video.enlace} target="_blank" rel="noopener noreferrer">
              Ver Video
            </a>
            <p>{video.descripcion}</p>
          </Card>
        ))
      ) : (
        <p>No hay videos disponibles</p>
      )} */}
    </TextSection>
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/OqDt31r4Q4E?si=hT_1iFlBT6YefTJC"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    ></iframe>
  </BannerContainer>
);

export default Banner;
