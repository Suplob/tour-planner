import { Container, Grid } from "@mui/material";
import React from "react";
import axios from "axios";
import ServiceCard from "./ServiceCard/ServiceCard";
import { Box } from "@mui/system";
import Button from "../../Shared/Button/Button";
import Preloader from "../../Shared/Preloader/Preloader";

const Services = () => {
  const [services, setServices] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [loadText, setLoadText] = React.useState("Load More");

  React.useEffect(() => {
    setLoading(true);
    axios
      .get(`https://tour-planner-backend.herokuapp.com/allServices`)
      .then((res) => setServices(res.data))
      .finally(() => setLoading(false));
  }, []);
  console.log(services);

  return (
    <Box sx={{ backgroundColor: "#F6F6F6" }}>
      <Container sx={{ py: 5 }}>
        {loading ? (
          <Preloader></Preloader>
        ) : (
          <Grid container spacing={2}>
            {services.map((data) => (
              <ServiceCard data={data} key={data._id}></ServiceCard>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
};

export default Services;
