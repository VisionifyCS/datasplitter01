import {
  Box,
  Button,
  Collapse,
  Container,
  IconButton,
  makeStyles,
  AppWrapper,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "././MainView.scss";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import SortIcon from "@material-ui/icons/Sort";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link as Scroll } from "react-scroll";
import BrowserUpdatedOutlinedIcon from "@mui/icons-material/BrowserUpdatedOutlined";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import SupportOutlinedIcon from "@mui/icons-material/SupportOutlined";
import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";

const useStyles = makeStyles((theme) => ({
  goDown: {
    color: "black",
    fontSize: "1rem",
    position: "fixed",
  },
  infoIcon: {
    color: "orange",
  },
}));

const MainView = () => {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <>
      <Container id="header">
        <div className="main-info">
          <Box className="mainBox-info">
            <PrecisionManufacturingIcon style={{ fontSize: "70px" }} />
            <br />
            use AI to make your work more productive
          </Box>
          <Box className="mainBox-info">
            <BrowserUpdatedOutlinedIcon style={{ fontSize: "70px" }} />
            <br />
            No Installation required, Simple open Your Browser
          </Box>
          <Box className="mainBox-info">
            <LockOutlinedIcon style={{ fontSize: "70px" }} />
            <br />
            we Don't share your images, because we don't send them anywhere
          </Box>
        </div>
        <div className="main-info1">
          <Box className="mainBox-info1">
            <CloudDownloadIcon style={{ fontSize: "70px" }} />
            <br />
            Download You data into Train, Test and Validation
          </Box>
          <Box className="mainBox-info1">
            <SupportOutlinedIcon style={{ fontSize: "70px" }} />
            <br />
            Support any image file type
          </Box>
          <Box className="mainBox-info1">
            <SmartToyOutlinedIcon style={{ fontSize: "70px" }} />
            <br />
            Data is the new science. Big Data holds the anwsers
          </Box>
        </div>
        <div className="scroll-box-div">
          <Box className="scroll-box">
            <Scroll to="place-to-visit" smooth={true}>
              <Box className="Arrow-box">Get Started</Box>
            </Scroll>
          </Box>
        </div>
      </Container>
    </>
  );
};

export default MainView;
