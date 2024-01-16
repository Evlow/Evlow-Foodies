import Banners from "../../Features/Banners/banners";
import Descriptions from "../../Features/Descriptions/Descriptions";
import imgRecettes from "../../assets/contact.png";

export default function contact() {
  return (
    <div className="">
      <Banners positionText="right" imgBanner={imgRecettes} textBanner="" />
      <Descriptions
        titleDescription="Des questions ?<br/> Des suggestions ?
        "
        textDescription="Connectez-vous dès à présent !"
      />
    </div>
  );
}
