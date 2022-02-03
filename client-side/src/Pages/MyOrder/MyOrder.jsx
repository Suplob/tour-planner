import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { Box } from "@mui/system";
import styled from "styled-components";
import { CircularProgress, Container, Grid, Typography } from "@mui/material";
import HeadingText from "../Shared/HeadingText/HeadingText";
import Preloader from "../Shared/Preloader/Preloader";
import { useHistory } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "../Shared/Button/Button";
import smoothscroll from "smoothscroll-polyfill";
import { HashLink } from "react-router-hash-link";

const MyOrder = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [controlFetch, setControlFetch] = useState(true);

  const { user } = useAuth();
  const history = useHistory();

  smoothscroll.polyfill();
  window.__forceSmoothScrollPolyfill__ = true;

  const handleDelete = (id) => {
    setDeleteLoading(id);
    axios
      .delete(
        `https://tour-planner-backend.herokuapp.com/deleteUserOrder/${id}`
      )
      .then((res) => {
        if (res.status === 200) {
          setControlFetch(!controlFetch);
        }
      })
      .finally(() => {
        setDeleteLoading(false);
      });
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://tour-planner-backend.herokuapp.com/userOrder/${user.email}`)
      .then((res) => setOrders(res.data))
      .finally(() => setLoading(false));
  }, [user.email, controlFetch]);

  const backgroundStyle = {
    background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4)), url("https://images.unsplash.com/photo-1431794062232-2a99a5431c6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")`,
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

  const GridItemLeft = styled.p`
    font-family: "Cormorant Garamond", sans-serif;
    font-weight: 800;
    font-size: 18px;
    padding: 0 0 0 20px;
  `;
  const GridItemRight = styled.p`
    font-family: "Cormorant Garamond", sans-serif;
    color: rgba(0, 0, 0, 0.8);
    padding: 0 0 0 20px;
  `;

  const CancelButton = styled.div`
    height: 12px;
    width: 12px;
    padding: 15px;
    background-color: red;
    border-radius: 3px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  return (
    <>
      <Box style={backgroundStyle}>
        <HeroText>
          <H1>My Order</H1>
        </HeroText>
      </Box>
      <Container sx={{ my: 5 }}>
        <HeadingText>My All Orders</HeadingText>
        {loading ? (
          <Preloader></Preloader>
        ) : orders.length !== 0 ? (
          <>
            <Grid container>
              <Grid
                xs={3}
                style={{
                  borderTop: "1px solid rgba(0,0,0,0.1)",
                  borderRight: "1px solid rgba(0,0,0,0.1)",
                  borderLeft: "1px solid rgba(0,0,0,0.1)",
                }}
              >
                <GridItemLeft>Package</GridItemLeft>
              </Grid>
              <Grid
                xs={3}
                style={{
                  borderTop: "1px solid rgba(0,0,0,0.1)",
                  borderRight: "1px solid rgba(0,0,0,0.1)",
                }}
              >
                <GridItemLeft>Price</GridItemLeft>
              </Grid>
              <Grid
                xs={3}
                style={{
                  borderTop: "1px solid rgba(0,0,0,0.1)",
                  borderRight: "1px solid rgba(0,0,0,0.1)",
                }}
              >
                <GridItemLeft>Status</GridItemLeft>
              </Grid>
              <Grid
                xs={3}
                style={{
                  borderTop: "1px solid rgba(0,0,0,0.1)",
                  borderRight: "1px solid rgba(0,0,0,0.1)",
                }}
              >
                <GridItemLeft>Cancel Order</GridItemLeft>
              </Grid>
            </Grid>

            {orders.map((order, i) => (
              <Grid container key={order._id}>
                <Grid
                  xs={3}
                  style={{
                    border: "1px solid rgba(0,0,0,0.1)",
                  }}
                >
                  <GridItemRight sx={{ cursor: "pointer" }}>
                    {order.itemOrdered.name}
                  </GridItemRight>
                </Grid>
                <Grid
                  xs={3}
                  style={{
                    border: "1px solid rgba(0,0,0,0.1)",
                  }}
                >
                  <GridItemRight>{order.itemOrdered.price}</GridItemRight>
                </Grid>
                <Grid
                  xs={3}
                  style={{
                    border: "1px solid rgba(0,0,0,0.1)",
                  }}
                >
                  <GridItemRight>{order.status}</GridItemRight>
                </Grid>
                <Grid
                  xs={3}
                  style={{
                    border: "1px solid rgba(0,0,0,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {deleteLoading === order._id ? (
                    <CircularProgress sx={{ width: "100%" }} />
                  ) : (
                    <CancelButton onClick={() => handleDelete(orders[i]._id)}>
                      <DeleteIcon sx={{ color: "white" }}></DeleteIcon>
                    </CancelButton>
                  )}
                </Grid>
              </Grid>
            ))}
          </>
        ) : (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h3"
              sx={{ fontFamily: "Cormorant Garamond", mb: 3 }}
            >
              Your order list is empty :(
            </Typography>
            <HashLink
              to="/home#services"
              smooth
              style={{ textDecoration: "none" }}
            >
              <Button>ORDER NOW</Button>
            </HashLink>
          </Box>
        )}
      </Container>
    </>
  );
};

export default MyOrder;
