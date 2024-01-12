import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import Logo from "../../../Logo/Logo";

const nav = [
  { title: "Accueil", path: "/Accueil" },
  { title: "Recettes salées", path: "/recettes-salees" },
  { title: "Recettes sucrées", path: "/Recettes-sucrées" },
  { title: "Recettes P'tits Gônes", path: "/Recettes-P'tits-Gônes" },
  { title: "Régimes spécifiques", path: "/Régimes-spécifiques" },
];

const button = [
  { title: "Inscription", path: "/Inscription" },
  { title: "Connexion", path: "/Connexion" },
];

export default function NavBar() {
  return (
    <><div>
      <Logo></Logo>
    </div><div className="nav">
        <nav className="navbar">
          <ul className="item-button">
            {/* Afficher les liens de navigation */}
            {nav.map((item) => (
              <li key={item.path}>
                <NavLink to={item.path}>{item.title}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="item-button">
          {/* Afficher les boutons */}
          {button.map((item) => (
            <NavLink key={item.path} to={item.path}>
              <button>{item.title}</button>
            </NavLink>
          ))}
        </div>
      </div></>
  );
}