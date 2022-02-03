import { Container, Grid, Typography, Box } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { HeroVideo } from "react-hero-video";

const Banner = () => {
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
  `;

  const H1 = styled.h1`
    font-family: "Cormorant Garamond", serif;
    color: white;
    text-align: center;
  `;
  return (
    <div>
      {/* <Box style={backgroundStyle}>
        <Container sx={{ mt: 10, filter: "brightness(100%)" }}>
          <HeroText>
            <H1>Get Ready To Travel The World</H1>
          </HeroText>
        </Container>
      </Box> */}
      <HeroVideo
        videoSrc="https://www.youtube.com/embed/W0LHTWG-UmQ?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=W0LHTWG-UmQ"
        videoTitle="react-hero-video Demo Page"
        videoSubtitle="Even though large tracts of Europe and many old and famous States have fallen or may fall into the grip of the Gestapo and all the odious apparatus of Nazi rule, we shall not flag or fail. We shall go on to the end. We shall fight in France, we shall fight on the seas and oceans, we shall fight with growing confidence and growing strength in the air, we shall defend our island, whatever the cost may be. We shall fight on the beaches, we shall fight on the landing grounds, we shall fight in the fields and in the streets, we shall fight in the hills; we shall never surrender, and if, which I do not for a moment believe, this island or a large part of it were subjugated and starving, then our Empire beyond the seas, armed and guarded by the British Fleet, would carry on the struggle, until, in God's good time, the New World, with all its power and might, steps forth to the rescue and the liberation of the old."
      >
        <p>
          This is from a child element: The source for this code is available on{" "}
          <a href="https://github.com/sw-yx/react-hero-video">Github</a>
        </p>
      </HeroVideo>
    </div>
  );
};

export default Banner;
