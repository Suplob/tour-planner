import { Container, Grid, Typography, Box } from "@mui/material";
import React from "react";
import styled from "styled-components";

const Banner = () => {
  const backgroundStyle = {
    background:
      'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")',
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    marginTop: "-80px",
    height: "100vh",
    position: "relative",
  };
  const HeroText = styled.div`
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
  `;

  const H1 = styled.h1`
    font-family: "Cormorant Garamond", serif;
    color: white;
  `;
  return (
    <div>
      <Box style={backgroundStyle}>
        <Container sx={{ mt: 10, filter: "brightness(100%)" }}>
          <HeroText>
            <H1>Get Ready To Travel The World</H1>
          </HeroText>
        </Container>
      </Box>
    </div>
  );
};

export default Banner;