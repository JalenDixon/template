import * as React from "react";
import { Theme } from "../styles/themestyle";
export const Navbar = () => {
  const navbarstyle = {
    width: "90%",
    height: "80px",
    display: "flex",
    justifyContent: "space-around",
    borderRadius: "10px",
    border: "1px solid",
    boxShadow: "10px 10px 5px #aaaaaa",
    backgroundColor: Theme.background.light,
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "10px",
  };
  return (
    <>
      <div style={navbarstyle}>I am the NAVBAR YAYYY</div>
    </>
  );
};
