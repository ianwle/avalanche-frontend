import React from "react";
import { Routes, Route } from "react-router";

// Components
import Home from "./Home";
import Maps from "./Maps";
 

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<Maps />} />
        </Routes>
      </div>
    );
  }
}