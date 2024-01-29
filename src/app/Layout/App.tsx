import React from "react";
import Footer from "./Footer/Footer";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Header from "./Header/header";

function App() {
  return (
    <>
 {localStorage.getItem('accessToken') ? (
  <Header />
) : <Navbar />}
<Outlet />
{localStorage.getItem('accessToken') ? (
  null
) : <Footer />}
    </>
  );
}

export default App;
