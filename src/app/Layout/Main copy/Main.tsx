import { Outlet } from "react-router-dom";
import Aside from "../Aside/aside";
import Header from "../Header/header";
import "./main.css";
import React from "react";

function Main() {
  return (
    <>
      <Aside />
      <Header />
      <main className="main">
        <Outlet />
      </main>
    </>
  );
}
export default Main;
