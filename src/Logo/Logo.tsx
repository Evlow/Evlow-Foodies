import "./Logo.css";
export default function Logo() {
  return (
    <>
      <a className="logo" href="#">
        <img src={process.env.PUBLIC_URL + '/Images/logo.jpg'} height="300px" width="300px" />
      </a>
    </>
  );
}
