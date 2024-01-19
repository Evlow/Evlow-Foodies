import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
               <div className="footer-column">
      <article className="newsletter">
        <h1 className="h1-footer">Newsletter</h1>
        <p className="p-newsletter">
          Inscrivez-vous à la newsletter et recevez les nouvelles recettes
          publiées ainsi que des conseils !
        </p>
      </article>
     
      <article className="contact">
      <p>
      Vous avez une question ?
      </p>
      <p>
Des suggestions ?
        </p>
        <br />
        <a href="#" className="contact-link">
        Conctactez-nous
        </a>
        <ul className="social-network-footer">
        <li className="social-network-facebook"> <a href="#">  <img src={process.env.PUBLIC_URL + '/Images/facebook.svg'} height="30px" width="30px" /></a></li>
        <li className="social-network-instagram"> <a href="#">  <img src={process.env.PUBLIC_URL + '/Images/instagram.svg'} height="30px" width="30px" /></a></li>
        <li className="social-network-linkedin"> <a href="#">  <img src={process.env.PUBLIC_URL + '/Images/linkedin.svg'} height="30px" width="30px" /></a></li>

        </ul>
      </article>
      </div>
      <hr className="hr-footer"/>

      <article className="footer-last">
        <p className="mentions">
          Mentions légales - Conditions Générales d'Utilisation Politique de
          protection des données personnelles - Politique des cookies
        </p>
        <p  className="copyright">Tous droits réservés Evlow Foodies 2023</p>
      </article>
    </footer>
  );
}
