import { NavLink } from "react-router-dom";
import "./header.css";
import iconSite from "../../../assets/site.svg";
import iconDeconnexion from "../../../assets/deconnexion.svg";

const link = [
  { title: "Evlow Foodies", path: "/accueil", className: "evlow-navbar" },
  {
    title: "Accéder au site",
    path: "/accueil",
    className: "evlow-foodies",
    icon: iconSite,
  },
];

const button = [
  {
    title: "Déconnexion",
    path: "/accueil",
    className: "deconnexion-navbar",
    icon: iconDeconnexion,
  },
];

export default function Header() {





  
  return (
    <header>
      <nav>
        <ul className="ul-header">
          {/* Afficher les boutons */}
          {link.map((item) => (
            <li key={item.path} className={item.className}>
              <NavLink to={item.path}>
                <img src={item.icon} alt={item.title} />
                {item.title}
              </NavLink>
            </li>
          ))}
          {button.map((item) => (
            <li key={item.path} className={item.className}>
              <NavLink to={item.path}>
                <img src={item.icon} alt={item.title} />
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
