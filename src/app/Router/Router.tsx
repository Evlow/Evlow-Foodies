import { createBrowserRouter } from "react-router-dom";
import App from "../Layout/App";
import HomePage from "../../Pages/Home/HomePage";
import SweetRecipes from "../../Pages/SweetRecipes/SweetRecipes";
import LittleGonesRecipes from "../../Pages/LittleGonesRecipes/LittleGonesRecipes";
import SpecificRecipes from "../../Pages/SpecificRecipes/SpecificRecipes";
import SaltRecipes from "../../Pages/SaltRecipes/SaltRecipes";
import Inscription from "../../Pages/Inscription/Inscription";
import Connexion from "../../Pages/Connexion/Connexion";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "accueil", element: <HomePage /> },
      { path: "recettes-salees", element: <SaltRecipes /> },
      { path: "recettes-sucrees", element: <SweetRecipes /> },
      { path: "recettes-ptits-gones", element: <LittleGonesRecipes /> },
      { path: "regimes-specifiques", element: <SpecificRecipes /> },
      { path: "inscription", element: <Inscription /> },
      { path: "connexion", element: <Connexion /> },
    ],
  },
]);
