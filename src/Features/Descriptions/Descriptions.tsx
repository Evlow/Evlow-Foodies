import "./Descriptions.css";

interface Props {
  titleDescription: string;
  textDescription: string;
}
export default function Descriptions(Props: Props) {
  return (
    <div className="description">
<h3 className="title-description" dangerouslySetInnerHTML={{ __html: Props.titleDescription }} />
<p className="text-description" dangerouslySetInnerHTML={{ __html: Props.textDescription }}></p>    </div>
  );
}
