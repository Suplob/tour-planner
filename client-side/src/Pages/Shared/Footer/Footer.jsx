import styled from "styled-components";
import React from "react";

const Footer = () => {
  const Footer = styled.footer`
    background-color: #2b2b2b;
    height: 100px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: auto;
  `;
  return (
    <Footer>
      <small>&copy; Suplob Roy || 2022</small>
    </Footer>
  );
};

export default Footer;
