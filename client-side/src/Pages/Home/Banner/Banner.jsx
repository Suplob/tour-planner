import { Container, Box } from "@mui/material";
import React from "react";
import styled from "styled-components";
import useMediaQuery from "@mui/material/useMediaQuery";
import Button from "../../Shared/Button/Button";
import { useHistory } from "react-router-dom";
import smoothscroll from "smoothscroll-polyfill";
import { HashLink } from "react-router-hash-link";

const Banner = () => {
  const matches = useMediaQuery("(min-width:600px)");
  const history = useHistory();
  smoothscroll.polyfill();
  window.__forceSmoothScrollPolyfill__ = true;

  const backgroundStyle = {
    background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4)), url("https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")`,
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
    <div>
      <Box style={backgroundStyle}>
        <HeroText matches>
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
          <br />
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <HashLink
              to="/home#services"
              smooth
              style={{ textDecoration: "none" }}
            >
              <Button
                style={{ margin: "0 auto" }}
                onClick={() => history.push("/home#services")}
              >
                ORDER NOW
              </Button>
            </HashLink>
          </Box>
        </HeroText>
      </Box>
    </div>
  );
};

export default Banner;
