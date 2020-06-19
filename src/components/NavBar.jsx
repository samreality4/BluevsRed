import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <AppBar
      position="static"
      style={{
        background:
          "linear-gradient(90deg, rgba(9,9,121,1) 35%, rgba(255,0,0,1) 100%)",
      }}
    >
      <Toolbar className=" navbar ml-auto">
        <Button style={{ color: "#ffffff" }}>Home</Button>

        <Button style={{ color: "#ffffff" }}>About</Button>
      </Toolbar>
    </AppBar>
  );
}
export default NavBar;
