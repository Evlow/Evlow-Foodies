import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./header.css";
import iconSite from "../../../assets/site.svg";
import iconDeconnexion from "../../../assets/deconnexion.svg";

const buttons = [
  {
    title: "Accéder au site",
    path: "/accueil",
    className: "accueil-navbar",
    icon: iconSite,
  },
  {
    title: "Déconnexion",
    // path: "/#",
    className: "deconnexion-navbar",
    icon: iconDeconnexion,
  },
];

export default function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    delete localStorage["accessToken"];
    localStorage.clear()
    navigate("/accueil");
  };

  return (
    <header>
      <h2 className="evlow-foodies">Evlow Foodies</h2>
      <nav>
        <ul className="ul-header">
          {buttons.map((item, index) => (
            <li key={index} className={item.className}>
              {item.path ? (
                <NavLink to={item.path}>
                  <div className="button-content">
                    <img src={item.icon} alt={item.title} />
                    <span>{item.title}</span>
                  </div>
                </NavLink>
              ) : (
                <button onClick={handleLogout}>
                  <div className="button-content">
                    <img src={item.icon} alt={item.title} />
                    <span>{item.title}</span>
                  </div>
                </button>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
