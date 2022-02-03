import { Box } from "@mui/material";
import React from "react";
import { Grid } from "react-loader-spinner";

const Preloader = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Grid heigth="100" width="100" color="#C29D59" ariaLabel="loading" />
    </Box>
  );
};

export default Preloader;
