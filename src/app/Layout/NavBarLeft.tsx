import { NavLink } from "react-router-dom";

const button = [
  { title: "Accueil", path: "/Accueil", className: "accueil-navbar", icon: "" },
  {
    title: "Recettes",
    path: "/Recettes",
    className: "recettes-navbar",
    icon: "",
  },
  {
    title: "Favoris",
    path: "/Favoris",
    className: "favoris-navbar",
    icon: "",
  },
  {
    title: "Corbeille",
    path: "/Corbeille",
    className: "corbeille-navbar",
    icon: "",
  },
];
export default function NavBarLeft() {
  return (
    <>
      <div className="nav">
        <nav className="navbar-left">
          <ul className="item-button-navbar-left">
            {/* Afficher les boutons */}
            {button.map((item) => (
              <NavLink key={item.path} to={item.path}>
                <button className={item.className}>
                  <img src={item.icon} /> {item.title}
                </button>
              </NavLink>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
