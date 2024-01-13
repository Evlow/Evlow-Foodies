import './banners.css';

interface Props {
    textBanner?: string | null;
    imgBanner : string;
    positionText? : "left" | "center" | "right";
}
export default function Banners(Props : Props) {

return <div className="banner">

<img src={Props.imgBanner} alt="" />
<h2 style={{textAlign:Props.positionText}}>{Props.textBanner}</h2>
</div>

};