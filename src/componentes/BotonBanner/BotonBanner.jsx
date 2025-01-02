import React, { useState } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #61dafb;
  border: none;
  padding: 15px 30px; /* Aumenta el padding horizontal y vertical */
  cursor: pointer;
  font-size: 1.2rem; /* Aumenta el tamaño de la fuente */
  color: black;
  border-radius: 5px;
  transition: background-color 0.3s ease, transform 0.3s ease;
  margin: 0 30px; /* Agrega márgenes horizontales a los botones */

  &:hover {
    background-color: #21a1f1;
  }
`;

const BotonBanner = () => {
  const [showOptions, setShowOptions] = useState(false);

  const handleButtonClick = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div className="banner">
      <h1 className="banner-title">
        <StyledButton onClick={handleButtonClick}>Categorias</StyledButton>
      </h1>
      {showOptions && (
        <div className="banner-options">
          <ul>
            <li>Taijutsu</li>
            <li>Técnicas de los cinco elementos</li>
            <li>Estilos de lucha ninja</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default BotonBanner;
