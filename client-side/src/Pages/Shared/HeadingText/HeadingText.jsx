import React from "react";
import styled from "styled-components";

const HeadingText = ({ children, color }) => {
  const Text = styled.p`
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    padding-left: 10px;
    border-left: 3px solid #c29d59;
    color: ${(props) => (props.color ? color : "#c29d59")};
    font-size: 20px;
  `;
  return <Text color={color}>{children}</Text>;
};

export default HeadingText;
