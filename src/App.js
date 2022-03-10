import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, CssBaseline, IconButton } from "@material-ui/core";
import ImageTrain from "./pages/components/ImageTrain";
import "../src/styles/style.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import { Link as Scroll } from "react-scroll";
import Navbar from "./pages/components/Navbar";
import MainView from "./pages/components/MainView";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundColor: "#757f9a",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundImage: "linear-gradient(147deg, #757f9a 0%, #d7dde8 100%)",
  },
  footerInfo: {
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    justifyContent: "space-between",
  },
  footerTitle: {
    color: "white",
    marginRight: "1rem",
    textUnderlineOffset: "none",
  },
  LinkedInIconInfo: {
    color: "blue",
    marginRight: "1rem",
    cursor: "pointer",
  },
  GitHubIconInfo: {
    cursor: "pointer",
  },
}));
export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Router>
        <Navbar />
        <br />
        <br />
        <h1></h1>
        <br />
        <br />
        <CssBaseline />
        <Routes>
          <Route path="/datasplitter01" element={<MainView />} />
          <Route path="/datasplitter01/train" element={<ImageTrain />} />
        </Routes>
      </Router>
    </div>
  );
}
