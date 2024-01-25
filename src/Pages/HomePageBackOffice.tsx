import React, { useEffect, useState } from "react";
import imgRecettes from "../../assets/inscription.png";
import axios from "axios";
import NavBarBottom from "../app/Layout/NavBarBottom";
import NavBarLeft from "../app/Layout/NavBarLeft";

interface Response {
  token: string;
}

export default function HomePageBackOffice() {
  const [userPseudo, setUserPseudo] = useState<string | null>(null);



  return (
    <>
      <NavBarBottom />
      <NavBarLeft />
      
      {userPseudo && (
        <p>Bienvenue {userPseudo}</p>
      )}

      {/* Reste de votre contenu pour la page HomePageBackOffice */}
    </>
  );
}
