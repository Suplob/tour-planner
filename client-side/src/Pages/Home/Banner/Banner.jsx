import { Container, Grid, Typography, Box } from "@mui/material";
import React from "react";
import styled from "styled-components";
import useMediaQuery from "@mui/material/useMediaQuery";

const Banner = () => {
  const matches = useMediaQuery("(min-width:600px)");
  const backgroundStyle = {
    background:
      'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")',
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    marginTop: "-80px",
    height: "100vh",
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
    margin-top: 25%;
    width: 100%;
  `;

  const H1 = styled.h1`
    font-family: "Cormorant Garamond", serif;
    color: white;
    text-align: center;
  `;
  return (
    <div>
      <Box style={backgroundStyle}>
        <Container sx={{ mt: 10, filter: "brightness(100%)" }}>
          <HeroText>
            <H1
              style={{
                fontSize: matches ? "60px" : "40px",
              }}
            >
              Get Ready To Travel The World
            </H1>
            <br />
            <H1
              style={{
                fontSize: matches ? "60px" : "40px",
                backgroundColor: "rgb(194, 157, 89, 0.9)",
                width: "50%",
                margin: "0 auto",
              }}
            >
              With Tour Planner
            </H1>
          </HeroText>
        </Container>
      </Box>
    </div>
  );
};

export default Banner;
