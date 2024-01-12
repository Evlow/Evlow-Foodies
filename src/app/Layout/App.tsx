import React from "react";
import Footer from "./Footer/Footer";
import { Outlet } from "react-router-dom";
import NavBar from "./Navbar/Navbar";

function App() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer></Footer>
    </>
  );
}

export default App;
