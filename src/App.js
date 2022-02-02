import React, { Component } from "react";
import "./App.css";
import { hot } from "react-hot-loader";
import { FlightsBox } from "./components/dropdown";
import { Theme } from "./styles/themestyle";
import { Navbar } from "./components/navBar";
class App extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "#101923",
          color: Theme.text.primary,
        }}
        className="App"
      >
        <Navbar />
        <h1> Hello, World! </h1>
        <FlightsBox />
      </div>
    );
  }
}

export default hot(module)(App);
