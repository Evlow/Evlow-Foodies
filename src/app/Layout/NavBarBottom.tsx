import { NavLink } from "react-router-dom";

const button = [
  { title: "Evlow Foodies", path: "/Accueil", className: "Evlow-navbar",},
  {
    title: "Accéder au site",
    path: "/Evlow-foodies",
    className: "evlow-foodies",
    icon: "",
  },
  {
    title: "Déconnexion",
    path: "/déconnexion",
    className: "deconnexion-navbar",
    icon: "",
  },

];
export default function NavBarBottom() {
  return (
    <>
      <div className="nav">
        <nav className="navbar-bottom">
          <ul className="item-button-navbar-bottom">
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
