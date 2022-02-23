import React from "react";
import { Routes, Route } from "react-router";

// Components
import Home from "./Home";
import Maps from "./Grid/Maps";
import Menu from "./Widget/Menu";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<Maps />} />
          <Route path="menu" element={<Menu/>}/>
        </Routes>
      </div>
    );
  }
}
