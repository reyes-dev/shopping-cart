import React from "react";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import Shop from "./components/Shop";
import { Outlet } from "react-router-dom";
import RouteSwitch from "./RouteSwitch";

function App() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
