import { Button, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import "./products.css";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const Products = () => {
  return (
    <div id="products" className="products">
      <Stack direction="row" pt={3} justifyContent={"center"}>
        <Typography
          style={{ fontSize: "27px", fontWeight: "900", color: "#474F62" }}
        >
          Onumlerimiz
        </Typography>
      </Stack>
      <Stack direction="row" pt={3} justifyContent={"center"} spacing={2}>
        <Typography>Hemmesi</Typography>
        <Typography>Suyt Onumleri</Typography>
        <Typography>Konditer onumleri</Typography>
        <Typography>Taze onumler</Typography>
      </Stack>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        pr={10}
        pl={10}
        pt={5}
      >
        <Grid item xs={2} sm={4} p={2} md={3}>
          <div className="productContainer">
            <img
              src="https://assets.dovesfarm.co.uk/images/recipes/DF065_Chocolate-Yule-Log_1080.jpg"
              alt=""
            />
            <Stack p={1}>
              <Typography style={{ fontWeight: "700", fontSize: "22px" }}>
                Onum ady
              </Typography>
              <Typography style={{ color: "#474F62", fontSize: "15px" }}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Recusandae, deserunt.
              </Typography>
            </Stack>
            <Stack direction="row" justifyContent={"flex-end"} pr={5} pb={2}>
              <Button
                variant="text"
                endIcon={<ArrowRightAltIcon />}
                style={{ textTransform: "none", color: "#474F62" }}
              >
                Doly oka
              </Button>
            </Stack>
          </div>
        </Grid>
        <Grid item xs={2} sm={4} p={2} md={3}>
          <div className="productContainer">
            <img
              src="https://static.toiimg.com/thumb/53096885.cms?width=1200&height=900"
              alt=""
            />
            <Stack p={1}>
              <Typography style={{ fontWeight: "700", fontSize: "22px" }}>
                Onum ady
              </Typography>
              <Typography style={{ color: "#474F62", fontSize: "15px" }}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Recusandae, deserunt.
              </Typography>
            </Stack>
            <Stack direction="row" justifyContent={"flex-end"} pr={5} pb={2}>
              <Button
                variant="text"
                endIcon={<ArrowRightAltIcon />}
                style={{ textTransform: "none", color: "#474F62" }}
              >
                Doly oka
              </Button>
            </Stack>
          </div>
        </Grid>
        <Grid item xs={2} sm={4} p={2} md={3}>
          <div className="productContainer">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEzC5Yzwgqovkl79y9kd2crftIE6eny7OKYReMDLLQZ7zRLG17QIIXdOOHs2slbQmOak8&usqp=CAU"
              alt=""
            />
            <Stack p={1}>
              <Typography style={{ fontWeight: "700", fontSize: "22px" }}>
                Onum ady
              </Typography>
              <Typography style={{ color: "#474F62", fontSize: "15px" }}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Recusandae, deserunt.
              </Typography>
            </Stack>
            <Stack direction="row" justifyContent={"flex-end"} pr={5} pb={2}>
              <Button
                variant="text"
                endIcon={<ArrowRightAltIcon />}
                style={{ textTransform: "none", color: "#474F62" }}
              >
                Doly oka
              </Button>
            </Stack>
          </div>
        </Grid>
        <Grid item xs={2} sm={4} p={2} md={3}>
          <div className="productContainer">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_fK8zVarRcANEzX73nAY37Pr1HIRspiq2kXi9A-9gA-E_S_1TUcdOUgX8wqVCRSGsK5Y&usqp=CAU"
              alt=""
            />
            <Stack p={1}>
              <Typography style={{ fontWeight: "700", fontSize: "22px" }}>
                Onum ady
              </Typography>
              <Typography style={{ color: "#474F62", fontSize: "15px" }}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Recusandae, deserunt.
              </Typography>
            </Stack>
            <Stack direction="row" justifyContent={"flex-end"} pr={5} pb={2}>
              <Button
                variant="text"
                endIcon={<ArrowRightAltIcon />}
                style={{ textTransform: "none", color: "#474F62" }}
              >
                Doly oka
              </Button>
            </Stack>
          </div>
        </Grid>
        <Grid item xs={2} sm={4} p={2} md={3}>
          <div className="productContainer">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHIRwdivpVAi4jArTMj-uNLib9uLxUTOr3J1szoBglDMDh1ehEWdknUM3hDI88EL7H8B8&usqp=CAU"
              alt=""
            />
            <Stack p={1}>
              <Typography style={{ fontWeight: "700", fontSize: "22px" }}>
                Onum ady
              </Typography>
              <Typography style={{ color: "#474F62", fontSize: "15px" }}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Recusandae, deserunt.
              </Typography>
            </Stack>
            <Stack direction="row" justifyContent={"flex-end"} pr={5} pb={2}>
              <Button
                variant="text"
                endIcon={<ArrowRightAltIcon />}
                style={{ textTransform: "none", color: "#474F62" }}
              >
                Doly oka
              </Button>
            </Stack>
          </div>
        </Grid>
        <Grid item xs={2} sm={4} p={2} md={3}>
          <div className="productContainer">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5JzJ7TYyB-wzDplIix3yf3JOhWxL-6Cft9g&usqp=CAU"
              alt=""
            />
            <Stack p={1}>
              <Typography style={{ fontWeight: "700", fontSize: "22px" }}>
                Onum ady
              </Typography>
              <Typography style={{ color: "#474F62", fontSize: "15px" }}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Recusandae, deserunt.
              </Typography>
            </Stack>
            <Stack direction="row" justifyContent={"flex-end"} pr={5} pb={2}>
              <Button
                variant="text"
                endIcon={<ArrowRightAltIcon />}
                style={{ textTransform: "none", color: "#474F62" }}
              >
                Doly oka
              </Button>
            </Stack>
          </div>
        </Grid>
        <Grid item xs={2} sm={4} p={2} md={3}>
          <div className="productContainer">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1CK_Fb3qVKEayAC8WO0qoQ57E_3a16MLxaQ&usqp=CAU"
              alt=""
            />
            <Stack p={1}>
              <Typography style={{ fontWeight: "700", fontSize: "22px" }}>
                Onum ady
              </Typography>
              <Typography style={{ color: "#474F62", fontSize: "15px" }}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Recusandae, deserunt.
              </Typography>
            </Stack>
            <Stack direction="row" justifyContent={"flex-end"} pr={5} pb={2}>
              <Button
                variant="text"
                endIcon={<ArrowRightAltIcon />}
                style={{ textTransform: "none", color: "#474F62" }}
              >
                Doly oka
              </Button>
            </Stack>
          </div>
        </Grid>
        <Grid item xs={2} sm={4} p={2} md={3}>
          <div className="productContainer">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQlCjaQAwmtMXJsJ4ST34BuSR7PVYuWH_49g&usqp=CAU"
              alt=""
            />
            <Stack p={1}>
              <Typography style={{ fontWeight: "700", fontSize: "22px" }}>
                Onum ady
              </Typography>
              <Typography style={{ color: "#474F62", fontSize: "15px" }}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Recusandae, deserunt.
              </Typography>
            </Stack>
            <Stack direction="row" justifyContent={"flex-end"} pr={5} pb={2}>
              <Button
                variant="text"
                endIcon={<ArrowRightAltIcon />}
                style={{ textTransform: "none", color: "#474F62" }}
              >
                Doly oka
              </Button>
            </Stack>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Products;
