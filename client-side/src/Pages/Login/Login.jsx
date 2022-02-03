import { Container } from "@mui/material";
import React from "react";
import img from "../../utilities/img/welcome-register.png";
import GoogleButton from "react-google-button";
import useAuth from "../../hooks/useAuth";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useLocation } from "react-router-dom";

const Login = () => {
  const { handleGoogleLogin, user } = useAuth();
  const history = useHistory();
  const location = useLocation();

  return (
    <Container
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <img src={img} alt="Welcome" style={{ width: "50%" }} />
      <GoogleButton
        onClick={() => handleGoogleLogin(history, location)}
        style={{ marginBottom: "50px" }}
      />
    </Container>
  );
};

export default Login;
