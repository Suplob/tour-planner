import React from "react";
import styled from "styled-components";

const Button = ({ children }) => {
  const PrimaryBtn = styled.button`
    padding: 10px 14px;
    color: white;
    background-color: #c29d59;
    border-radius: 4px;
    border: 1px solid transparent;
    height: 50px;
    font-size: 20px;
    font-family: "Poppins", sans-serif;
    display: flex;
    align-items: center;
    transition: 150ms ease-in-out;
    cursor: pointer;
    &:hover {
      background-color: #ac8d4f;
    }
  `;
  return <PrimaryBtn>{children}</PrimaryBtn>;
};

export default Button;
