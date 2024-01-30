import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import Logo from "../../../Logo/Logo";
import iconConnexion from '../../../assets/connexion.svg';
import iconInscription from  '../../../assets/inscription.svg';

const nav = [
  { title: "Accueil", path: "/accueil" },
  { title: "Recettes salées", path: "/recettes-salees" },
  { title: "Recettes sucrées", path: "/recettes-sucrees" },
  { title: "Recettes p'tits Gônes", path: "/recettes-ptits-gones" },
  { title: "Régimes spécifiques", path: "/regimes-specifiques" },
];

const button = [
  {
    title: "Inscription",
    path: "/inscription",
    className: "inscription-button",
    icon: iconInscription,
  },
  {
    title: "Connexion",
    path: "/connexion",
    className: "connexion-button",
    icon: iconConnexion,
  },

];

export default function NavBar() {
  return (
    <>
      <div>
        <Logo></Logo>
      </div>
      <div className="nav">
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
   <button className={item.className}><img src={item.icon} /> {item.title}</button>  
             </NavLink>
          ))}
        </div>
      </div>
    </>
  );
}