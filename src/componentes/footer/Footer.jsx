import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 9px;
  background-color: #333;
  color: #fff;
  position: fixed;
  bottom: 0;
  width: 100%;
   /* ...otros estilos... */
   @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 10px;
  }
`;

const LeftSection = styled.div`
  font-size: 1.2rem;
  padding-right: 10px;
   /* ...otros estilos... */
   @media (max-width: 768px) {
    padding-right: 0;
  }
`;

const RightSection = styled.div`
  font-size: 1rem;
  padding-right: 40px;
  /* ...otros estilos... */
  @media (max-width: 768px) {
    padding-right: 0;
  }
`;

const Footer = () => (
  <FooterContainer>
    <LeftSection>AluraFlix</LeftSection>
    <RightSection>Creado y Programado por ®Daniel Ariza</RightSection>
  </FooterContainer>
);

export default Footer;