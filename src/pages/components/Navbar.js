import { AppBar, IconButton, makeStyles, Toolbar } from "@material-ui/core";
import React from "react";
import SortIcon from "@material-ui/icons/Sort";
import "././Navbar.scss";

const useStyle = makeStyles((theme) => ({
  appbar: {
    backgroundColor: "transparent",
  },
  appbarWrapper: {
    width: "80%",
    margin: "0 auto",
  },
  appbarTitle: {
    flexGrow: "1",
    color: "white",
  },
  icon: {
    color: "black",
    fontSize: "2rem",
  },
  colorText: {
    color: "#fff",
    fontSize: "25px",
    marginRight: "1300px",
  },
  container: {
    textAlign: "center",
  },
  title: {
    color: "black",
    fontSize: "4.5rem",
  },
  goDown: {
    color: "#fff",
    fontSize: "4rem",
  },
  img: {
    display: "flex",
    alinItem: "center",
    justifyContent: "center",
    fontSize: "20px",
  },
  titleInfo: {
    fontSize: "30px",
    display: "flex",
    justifyContent: "center",
    alignItem: "center",
  },
}));

const Navbar = () => {
  const classes = useStyle();
  return (
    <div>
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className="titleInfo">
            <p className="pTag">
              Data
              <span style={{ fontSize: "20px", color: "orange" }}>
                Splitter..
              </span>
            </p>
          </h1>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
