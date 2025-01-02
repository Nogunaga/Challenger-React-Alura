import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const HeaderContainer = styled.header`

  background-color: #282c34;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding-left: 20px; /* Agrega un padding izquierdo */
  padding-right: 20px; /* Agrega un padding derecho */
  /* ...otros estilos... */
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
  }
`;

const Title = styled.div`
  font-size: 2.5rem;
  padding: 10px;
  font-weight: bold;
   /* ...otros estilos... */
   @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 15px;
  margin-right: 20px; /* Agrega un margen derecho al contenedor de navegación */
  /* ...otros estilos... */
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const Button = styled.button`
  background-color: #61dafb;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 1rem;
  color: black;
  border-radius: 5px;
  transition: background-color 0.3s ease, transform 0.3s ease;
  margin: 0 20px; /* Agrega márgenes horizontales a los botones */

  &:hover {
    background-color: #21a1f1;
  }
`;

const HomeButton = styled(Button)`
  background-color: #aedff7; /* Color más suave */
  &:hover {
    background-color: #92d4f0; /* Color más suave al pasar el cursor */
    transform: scale(1.05); /* Expande el botón un 5% */
  }
`;

const Header = () => {
  const navigate = useNavigate();
  const handleNuevoVideo = () => {
    navigate("/nuevo-video");
  };
  return (
    <HeaderContainer>
      <Title>AluraFlix</Title>
      <Nav>
        <Link to="/">
          <HomeButton>Home</HomeButton>
        </Link>
        <Link to="/nuevo-video">
          <Button>Nuevo Video</Button>
        </Link>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
