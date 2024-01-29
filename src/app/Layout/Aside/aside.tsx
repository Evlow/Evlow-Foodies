import { NavLink } from "react-router-dom";
import "./aside.css";
import iconAccueil from '../../../assets/accueil.svg';
import iconRecipes from  '../../../assets/recettes.svg';
import iconFavori from '../../../assets/favori.svg';
import iconCorbeille from  '../../../assets/corbeille.svg';


const aside = [
  { title: "Accueil", path: "/Accueil", className: "item-button-aside", icon: iconAccueil },
  {
    title: "Recettes",
    path: "/Recettes",
    className: "item-button-aside",
    icon: iconRecipes,
  },
  {
    title: "Favoris",
    path: "/Favoris",
    className: "item-button-aside",
    icon: iconFavori,
  },
  {
    title: "Corbeille",
    path: "/Corbeille",
    className: "item-button-aside",
    icon: iconCorbeille,
  },
];
export default function NavBarLeft() {
  return (
  
      <aside>
        <nav className="nav-aside">
        <ul className="">
            {/* Afficher les liens de navigation */}
            {aside.map((item) => (
       <NavLink key={item.path} to={item.path}>
       <button className={item.className}>{item.title}<img src={item.icon} /> </button>  
                 </NavLink>
            ))}
          </ul>
        </nav>
      </aside>
  );
}
