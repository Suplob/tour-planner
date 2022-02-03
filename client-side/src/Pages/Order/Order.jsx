import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Preloader from "../Shared/Preloader/Preloader";
import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import styled from "styled-components";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import PeopleIcon from "@mui/icons-material/People";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import ReactPlayer from "react-player";
import HeadingText from "../Shared/HeadingText/HeadingText";
import useAuth from "../../hooks/useAuth";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Button from "../Shared/Button/Button";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import AirplaneTicketIcon from "@mui/icons-material/AirplaneTicket";

const Order = () => {
  const [service, setService] = useState({});
  const { serviceId } = useParams();
  const [loading, setLoading] = useState(true);
  const [btnDisable, setBtnDisable] = useState(false);
  const [orderText, setOrderText] = useState("ORDER NOW");
  const [success, setSuccess] = useState(false);
  const { user } = useAuth();

  const handleOrderSubmit = (event) => {
    setOrderText("Ordering");
    setBtnDisable(true);

    const data = new FormData(event.target);
    const name = data.get("name");
    const email = data.get("email");
    const number = data.get("number");
    const ticket = data.get("ticket");
    const orderData = {
      name,
      email,
      number,
      ticket,
      itemOrdered: service,
      status: "Pending",
      departureTime: "Approximately 10:30 PM",
    };

    axios
      .post("https://tour-planner-backend.herokuapp.com/orderItem", orderData)
      .then((res) => {
        if (res.status === 200) {
          setSuccess(true);
          setBtnDisable(true);
          setOrderText("Ordered!");
        } else {
          setSuccess(null);
        }
      });
    event.preventDefault();
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://tour-planner-backend.herokuapp.com/singleService/${serviceId}`
      )
      .then((res) => setService(res.data))
      .finally(() => setLoading(false));
  }, [serviceId]);

  const backgroundStyle = {
    background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4)), url("${service.img}")`,
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

  const DescriptionContainer = styled.div`
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    padding: 30px;
    border-radius: 20px;
  `;
  const HeadingTextOrderPage = styled.h3`
    font-family: "Cormorant Garamond", sans-serif;
    font-size: 35px;
    color: rgba(0, 0, 0, 0.7);
  `;
  const Summary = styled.div`
    background: rgb(194, 157, 89);
    padding: 15px 30px;
    margin: 20px 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
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
  const Form = styled.form`
    padding: 20px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const InputWrapper = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid rgba(0, 0, 0, 0.7);
    border-radius: 5px;
    width: 100%;
    padding: 12px 16px;
    margin-bottom: 20px;
  `;

  const Input = styled.input`
    border: 1px solid transparent;
    font-size: 18px;
    &:focus {
      outline: none;
    }
  `;

  return (
    <div>
      {loading ? (
        <Preloader></Preloader>
      ) : (
        <>
          <Box style={backgroundStyle}>
            <HeroText>
              <H1>{service.name}</H1>
            </HeroText>
          </Box>
          <Container sx={{ my: 5 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={8}>
                <DescriptionContainer>
                  <HeadingTextOrderPage>
                    A wonderful serenity has taken possession of my entire soul
                  </HeadingTextOrderPage>
                  <Summary>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <AccessTimeFilledIcon
                        sx={{ color: "white", fontSize: "30px" }}
                      ></AccessTimeFilledIcon>
                      <Typography
                        variant="subtitle2"
                        sx={{ color: "white", mt: 1 }}
                      >
                        {service.duration}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <PeopleIcon
                        sx={{ color: "white", fontSize: "30px" }}
                      ></PeopleIcon>
                      <Typography
                        variant="subtitle2"
                        sx={{ color: "white", mt: 1 }}
                      >
                        {service.groupSize}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <LocationOnIcon
                        sx={{ color: "white", fontSize: "30px" }}
                      ></LocationOnIcon>
                      <Typography
                        variant="subtitle2"
                        sx={{ color: "white", mt: 1 }}
                      >
                        {service.name}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <Brightness7Icon
                        sx={{ color: "white", fontSize: "30px" }}
                      ></Brightness7Icon>
                      <Typography
                        variant="subtitle2"
                        sx={{ color: "white", mt: 1 }}
                      >
                        Discovery
                      </Typography>
                    </Box>
                  </Summary>
                  <ReactPlayer
                    url="https://youtu.be/F_7ZoAQ3aJM"
                    playing
                    loop
                    muted
                    style={{ margin: "0 auto" }}
                    width="100%"
                    height="400px"
                  />
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      mt: 4,
                      flexDirection: "column",
                    }}
                  >
                    <Grid container>
                      <Grid
                        xs={6}
                        style={{
                          borderTop: "1px solid rgba(0,0,0,0.1)",
                          borderRight: "1px solid rgba(0,0,0,0.1)",
                        }}
                      >
                        <GridItemLeft>Destination</GridItemLeft>
                      </Grid>
                      <Grid
                        xs={6}
                        style={{ borderTop: "1px solid rgba(0,0,0,0.1)" }}
                      >
                        <GridItemRight>{service.name}</GridItemRight>
                      </Grid>
                    </Grid>
                    <Grid container>
                      <Grid
                        xs={6}
                        style={{
                          borderTop: "1px solid rgba(0,0,0,0.1)",
                          borderRight: "1px solid rgba(0,0,0,0.1)",
                        }}
                      >
                        <GridItemLeft>Departure</GridItemLeft>
                      </Grid>
                      <Grid
                        xs={6}
                        style={{ borderTop: "1px solid rgba(0,0,0,0.1)" }}
                      >
                        <GridItemRight>N/A</GridItemRight>
                      </Grid>
                    </Grid>
                    <Grid container>
                      <Grid
                        xs={6}
                        style={{
                          borderTop: "1px solid rgba(0,0,0,0.1)",
                          borderRight: "1px solid rgba(0,0,0,0.1)",
                        }}
                      >
                        <GridItemLeft>Departure Time</GridItemLeft>
                      </Grid>
                      <Grid
                        xs={6}
                        style={{ borderTop: "1px solid rgba(0,0,0,0.1)" }}
                      >
                        <GridItemRight>9 AM To 10 AM</GridItemRight>
                      </Grid>
                    </Grid>
                    <Grid container>
                      <Grid
                        xs={6}
                        style={{
                          borderTop: "1px solid rgba(0,0,0,0.1)",
                          borderRight: "1px solid rgba(0,0,0,0.1)",
                        }}
                      >
                        <GridItemLeft>Return Time</GridItemLeft>
                      </Grid>
                      <Grid
                        xs={6}
                        style={{ borderTop: "1px solid rgba(0,0,0,0.1)" }}
                      >
                        <GridItemRight>Approximately 10:30 PM</GridItemRight>
                      </Grid>
                    </Grid>
                    <Grid container>
                      <Grid
                        xs={6}
                        style={{
                          borderTop: "1px solid rgba(0,0,0,0.1)",
                          borderRight: "1px solid rgba(0,0,0,0.1)",
                        }}
                      >
                        <GridItemLeft>Dress Code</GridItemLeft>
                      </Grid>
                      <Grid
                        xs={6}
                        style={{ borderTop: "1px solid rgba(0,0,0,0.1)" }}
                      >
                        <GridItemRight>Comfortable Clothing</GridItemRight>
                      </Grid>
                    </Grid>
                    <Grid container>
                      <Grid
                        xs={6}
                        style={{
                          borderTop: "1px solid rgba(0,0,0,0.1)",
                          borderRight: "1px solid rgba(0,0,0,0.1)",
                        }}
                      >
                        <GridItemLeft>Price Included</GridItemLeft>
                      </Grid>
                      <Grid
                        xs={6}
                        style={{ borderTop: "1px solid rgba(0,0,0,0.1)" }}
                      >
                        <GridItemRight
                          style={{ display: "flex", alignItems: "center" }}
                        >
                          <DoneIcon
                            sx={{
                              color: "#C29D59",
                              display: "flex",
                              mr: 1,
                            }}
                          />
                          5 Star Accommodation
                        </GridItemRight>
                        <GridItemRight
                          style={{ display: "flex", alignItems: "center" }}
                        >
                          <DoneIcon
                            sx={{
                              color: "#C29D59",
                              display: "flex",
                              mr: 1,
                            }}
                          />
                          Air fases
                        </GridItemRight>
                        <GridItemRight
                          style={{ display: "flex", alignItems: "center" }}
                        >
                          <DoneIcon
                            sx={{
                              color: "#C29D59",
                              display: "flex",
                              mr: 1,
                            }}
                          />
                          3 Nights Hotel Accomodation
                        </GridItemRight>
                        <GridItemRight
                          style={{ display: "flex", alignItems: "center" }}
                        >
                          <DoneIcon
                            sx={{
                              color: "#C29D59",
                              display: "flex",
                              mr: 1,
                            }}
                          />
                          All transportation in destination location
                        </GridItemRight>
                      </Grid>
                    </Grid>
                    <Grid container>
                      <Grid
                        xs={6}
                        style={{
                          borderTop: "1px solid rgba(0,0,0,0.1)",
                          borderRight: "1px solid rgba(0,0,0,0.1)",
                        }}
                      >
                        <GridItemLeft>Price Not Included</GridItemLeft>
                      </Grid>
                      <Grid
                        xs={6}
                        style={{ borderTop: "1px solid rgba(0,0,0,0.1)" }}
                      >
                        <GridItemRight
                          style={{ display: "flex", alignItems: "center" }}
                        >
                          <CloseIcon
                            sx={{
                              color: "black",
                              mr: 1,
                            }}
                          />
                          Guide Service Fee
                        </GridItemRight>
                        <GridItemRight
                          style={{ display: "flex", alignItems: "center" }}
                        >
                          <CloseIcon
                            sx={{
                              color: "black",
                              mr: 1,
                            }}
                          />
                          Any Private Expenses
                        </GridItemRight>
                        <GridItemRight
                          style={{ display: "flex", alignItems: "center" }}
                        >
                          <CloseIcon
                            sx={{
                              color: "black",
                              mr: 1,
                            }}
                          />
                          Room Service Fees
                        </GridItemRight>
                      </Grid>
                    </Grid>
                  </Box>
                </DescriptionContainer>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box
                  sx={{
                    background: "white",
                    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                    padding: "20px 10px",
                    borderRadius: "20px",
                  }}
                >
                  <HeadingText color="black">BOOK THIS TOUR</HeadingText>
                  <Form onSubmit={handleOrderSubmit}>
                    <InputWrapper>
                      <AccountCircleIcon
                        sx={{ color: "rgb(194, 157, 89)", mr: 1 }}
                      ></AccountCircleIcon>
                      <Input
                        placeholder="Your Name *"
                        required
                        value={user.displayName}
                        type="text"
                        name="name"
                      />
                    </InputWrapper>
                    <InputWrapper>
                      <EmailIcon
                        sx={{ color: "rgb(194, 157, 89)", mr: 1 }}
                      ></EmailIcon>
                      <Input
                        placeholder="Your Email *"
                        required
                        value={user.email}
                        type="email"
                        name="email"
                      />
                    </InputWrapper>
                    <InputWrapper>
                      <LocalPhoneIcon
                        sx={{ color: "rgb(194, 157, 89)", mr: 1 }}
                      ></LocalPhoneIcon>
                      <Input
                        placeholder="Your Number *"
                        required
                        type="number"
                        name="number"
                      />
                    </InputWrapper>
                    <InputWrapper>
                      <AirplaneTicketIcon
                        sx={{ color: "rgb(194, 157, 89)", mr: 1 }}
                      ></AirplaneTicketIcon>
                      <Input
                        placeholder="Numbers of Tickets *"
                        required
                        type="text"
                        name="ticket"
                      />
                    </InputWrapper>
                    {success ? (
                      <p style={{ color: "green" }}>Ordered Successfully</p>
                    ) : success === null ? (
                      <p style={{ color: "red" }}>
                        Ooops! There has been an error!
                      </p>
                    ) : (
                      <small></small>
                    )}
                    <Button
                      type="submit"
                      sx={{ width: "100%" }}
                      disable={btnDisable}
                    >
                      {orderText}
                    </Button>
                  </Form>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </>
      )}
    </div>
  );
};

export default Order;
