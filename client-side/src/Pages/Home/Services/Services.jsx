import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import axios from "axios";
import ServiceCard from "./ServiceCard/ServiceCard";
import { Box } from "@mui/system";
import Button from "../../Shared/Button/Button";
import Preloader from "../../Shared/Preloader/Preloader";
import HeadingText from "../../Shared/HeadingText/HeadingText";

const Services = () => {
  const [services, setServices] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setLoading(true);
    axios
      .get(`https://tour-planner-backend.herokuapp.com/allServices`)
      .then((res) => setServices(res.data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <Box sx={{ backgroundColor: "#F6F6F6", marginTop: "-160px" }}>
      <Container sx={{ py: 5 }}>
        {loading ? (
          <Preloader></Preloader>
        ) : (
          <>
            <HeadingText>Amazing Tours</HeadingText>
            <Typography
              variant="h3"
              sx={{ fontFamily: "Cormorant Garamond", mb: 2 }}
            >
              Trending, Best <strong>Selling Tours</strong> And <br /> Fun
              Destinations
            </Typography>
            <Grid container spacing={2}>
              {services.map((data) => (
                <ServiceCard data={data} key={data._id}></ServiceCard>
              ))}
            </Grid>
          </>
        )}
      </Container>
    </Box>
  );
};

export default Services;
