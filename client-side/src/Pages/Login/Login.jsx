import { Container } from "@mui/material";
import React from "react";
import GoogleButton from "react-google-button";
import useAuth from "../../hooks/useAuth";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { Box } from "@mui/system";

const Login = () => {
  const { handleGoogleLogin } = useAuth();
  const history = useHistory();
  const location = useLocation();

  const backgroundStyle = {
    background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4)), url("https://images.unsplash.com/photo-1422564030440-1ecae6e21f67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1229&q=80")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    marginTop: "-80px",
    height: "70vh",
    position: "relative",
    zIndex: "999",
  };
  const HeroText = styled.div`
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    width: 100%;
  `;

  const H1 = styled.h1`
    font-family: "Cormorant Garamond", serif;
    color: white;
    text-align: center;
    font-size: 80px;
  `;

  return (
    <>
      <Box style={backgroundStyle}>
        <HeroText>
          <H1>Login</H1>
        </HeroText>
      </Box>
      <Container
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <GoogleButton
          onClick={() => handleGoogleLogin(history, location)}
          style={{ margin: "70px 0" }}
        />
      </Container>
    </>
  );
};

export default Login;
