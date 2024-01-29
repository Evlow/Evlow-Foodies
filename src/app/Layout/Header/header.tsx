import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./header.css";
import iconSite from "../../../assets/site.svg";
import iconDeconnexion from "../../../assets/deconnexion.svg";

const links = [
  { title: "Evlow Foodies", path: "/accueil", className: "evlow-navbar" },
];

const buttons = [
  {
    title: "Accéder au site",
    path: "/accueil",
    className: "evlow-foodies",
    icon: iconSite,
  },
  {
    title: "Déconnexion",
    path: "/deconnexion",
    className: "deconnexion-navbar",
    icon: iconDeconnexion,
  },
];

export default function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userId");
    navigate("/accueil");
  };

  return (
    <header>
      <nav>
        <ul className="ul-header">
          {/* Afficher les liens */}
          {links.map((item) => (
            <li key={item.path} className={item.className}>
              <NavLink to={item.path}>{item.title}</NavLink>
            </li>
          ))}
          {/* Afficher le bouton de déconnexion */}
          {buttons.map((item) => (
            <li key={item.path} className={item.className}>
              <button onClick={handleLogout}>
                <img src={item.icon} alt={item.title} />
                {item.title}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
