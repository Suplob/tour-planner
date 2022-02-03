import { Divider, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import styled from "styled-components";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import PeopleIcon from "@mui/icons-material/People";
import Button from "../../../Shared/Button/Button";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const ServiceCard = ({ data }) => {
  const history = useHistory();

  const CardWrapper = styled.div``;
  const Img = styled.img`
    height: 200px;
    width: 100%;
    object-fit: cover;
    z-index: 500;
  `;
  const CardContent = styled.div`
    background-color: white;
    margin-top: -8px;
    height: 400px;
    border-left: 3px solid #c29d59;
    padding: 10px 20px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  `;
  const Name = styled.span`
    background-color: #c29d59;
    color: white;
    transform: translateY(-27px) translateX(20px);
    display: inline-block;
    z-index: 999;
    font-size: 24px;
    padding: 5px 10px;
    font-family: "Cormorant Garamond", serif;
    font-weight: 600;
  `;
  const HeadingText = styled.p`
    color: black;
    font-family: "Cormorant Garamond", serif;
    font-size: 18px;
    font-weight: 500;
  `;
  const Price = styled.p`
    font-family: "Cormorant Garamond", serif;
    font-size: 30px;
    font-weight: 800;
    display: flex;
    align-items: center;
  `;
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <CardWrapper>
        <Img src={data.img} alt={data.name} />
        <CardContent>
          <Name>{data.name}</Name>
          <HeadingText>
            Tour Planner is top leading online tour booking platform
          </HeadingText>
          <Divider />
          <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
            <Box sx={{ display: "flex" }}>
              <AccessTimeFilledIcon
                sx={{ color: "#c29d59", fontSize: "30px", mr: 2 }}
              />
              <Box>
                <Typography variant="subtitle2">Duration</Typography>
                <small>{data.duration}</small>
              </Box>
            </Box>
          </Box>

          <Divider sx={{ my: 1 }} />
          <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
            <Box sx={{ display: "flex" }}>
              <PeopleIcon sx={{ color: "#c29d59", fontSize: "30px", mr: 2 }} />
              <Box>
                <Typography variant="subtitle2">Group Size</Typography>
                <small>{data.groupSize}</small>
              </Box>
            </Box>
          </Box>
          <Divider sx={{ mb: 1 }} />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Price>$ {data.price}</Price>
            <Box onClick={() => history.push(`/order/${data._id}`)}>
              <Button>ORDER NOW</Button>
            </Box>
          </Box>
        </CardContent>
      </CardWrapper>
    </Grid>
  );
};

export default ServiceCard;
