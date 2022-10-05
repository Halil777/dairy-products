import { Button, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import MediaBluetoothOnIcon from "@mui/icons-material/MediaBluetoothOn";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import "./about.css";

const About = () => {
  return (
    <div id="about" className="about">
      <Stack direction="row" pt={7} justifyContent={"center"}>
        <Typography
          style={{ fontSize: "27px", fontWeight: "900", color: "#474F62" }}
        >
          Biz barada
        </Typography>
      </Stack>
      <Grid container>
        <Grid item xs={6} pr={10} pl={10} pt={5}>
          <Stack spacing={2}>
            <Typography
              style={{
                color: "#474F62",
                fontWeight: "700",
                fontSize: "22px",
              }}
            >
              Akdepe Hyzmat hususy karhanasy
            </Typography>
            <Typography style={{ color: "#474F62" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              obcaecati non ratione. Omnis hic minima optio nisi vero labore
              provident at tempore ex porro voluptate, necessitatibus libero
              aliquid sit odio.
            </Typography>
          </Stack>
          <Stack pt={2} spacing={1}>
            <Typography style={{ color: "#474F62", fontSize: "14px" }}>
              MAGLUMATLARYMYZ
            </Typography>
            <Typography style={{ color: "#474F62", fontSize: "14px" }}>
              Tel: +99363430338
            </Typography>
            <Typography style={{ color: "#474F62", fontSize: "14px" }}>
              Salgymyz: Anew, Ak bugday
            </Typography>
          </Stack>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            pt={5}
          >
            <Grid item xs={2} sm={4} md={4}>
              <Button
                variant="contained"
                style={{
                  textTransform: "none",
                  background: "#fff",
                  color: "#004FFF",
                }}
                startIcon={<FacebookIcon />}
              >
                @akdepe_hyzmat
              </Button>
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <Button
                variant="contained"
                style={{
                  textTransform: "none",
                  background: "#fff",
                  color: "#004FFF",
                }}
                startIcon={<TwitterIcon />}
              >
                @akdepe_hyzmat
              </Button>
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <Button
                variant="contained"
                style={{
                  textTransform: "none",
                  background: "#fff",
                  color: "#004FFF",
                }}
                startIcon={<InstagramIcon />}
              >
                @akdepe_hyzmat
              </Button>
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <Button
                variant="contained"
                style={{
                  textTransform: "none",
                  background: "#fff",
                  color: "#004FFF",
                }}
                startIcon={<YouTubeIcon />}
              >
                @akdepe_hyzmat
              </Button>
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <Button
                variant="contained"
                style={{
                  textTransform: "none",
                  background: "#fff",
                  color: "#004FFF",
                }}
                startIcon={<MusicNoteIcon />}
              >
                @akdepe_hyzmat
              </Button>
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <Button
                variant="contained"
                style={{
                  textTransform: "none",
                  background: "#fff",
                  color: "#004FFF",
                }}
                startIcon={<MediaBluetoothOnIcon />}
              >
                @akdepe_hyzmat
              </Button>
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <Button
                variant="contained"
                style={{
                  textTransform: "none",
                  background: "#fff",
                  color: "#004FFF",
                }}
                startIcon={<MusicNoteIcon />}
              >
                @akdepe_hyzmat
              </Button>
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <Button
                variant="contained"
                style={{
                  textTransform: "none",
                  background: "#fff",
                  color: "#004FFF",
                }}
                startIcon={<YouTubeIcon />}
              >
                @akdepe_hyzmat
              </Button>
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <Button
                variant="contained"
                style={{
                  textTransform: "none",
                  background: "#fff",
                  color: "#004FFF",
                }}
                startIcon={<TwitterIcon />}
              >
                @akdepe_hyzmat
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}></Grid>
      </Grid>
    </div>
  );
};

export default About;
