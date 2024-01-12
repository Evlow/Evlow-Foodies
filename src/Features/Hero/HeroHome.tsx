import HeroImage from "../../assets/img-home.png"
import "./HeroHome.css"

export default function HeroHome () {

    return (<div className="Hero-home-container">
      <img src={HeroImage}/> 
      <p>En manque d’inspiration ? Retrouvez ici des idées de recettes !
      </p>
    </div>)
}