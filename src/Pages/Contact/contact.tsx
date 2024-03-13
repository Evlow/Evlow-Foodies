import { useState } from "react";
import Banners from "../../Features/Banners/banners";
import Descriptions from "../../Features/Descriptions/Descriptions";
import imgRecettes from "../../assets/contact.png";
import ContactInputForm from "../../Features/Formulaires/contactInputForm";
import NavBar from "../../app/Layout/Navbar/Navbar";
import Footer from "../../app/Layout/Footer/Footer";

export default function Contact() {
  const [userEmail, setEmail] = useState("");
  const [userFirstName, setFirstName] = useState("");
  const [userLastName, setLastName] = useState("");
  const [userMessage, setMessage] = useState("");

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log(
    //   "Message envoyé:",
    //   userEmail,
    //   userFirstName,
    //   userLastName,
    //   userMessage
    // );
  };

  const changeFirstName = (value: string) => {
    setFirstName(value);
  };

  const changeLastName = (value: string) => {
    setLastName(value);
  };

  const changeEmail = (value: string) => {
    setEmail(value);
  };

  const changeMessage = (value: string) => {
    setMessage(value);
  };

  return (
    <div className="">
      <NavBar></NavBar>
      <Banners positionText="right" imgBanner={imgRecettes} textBanner="" />
      <div className="main-front">

      <Descriptions
        titleDescription="Des questions ?<br/> Des suggestions ?"
        textDescription="N’hésitez pas à nous contacter !"
      />
      <form onSubmit={submitForm}>
        <div className="contact-form-container">
          <div className="contact-form-input">
            <ContactInputForm
              type="text"
              value={userFirstName}
              label="*Prénom"
              onChange={changeFirstName}
            />
            <ContactInputForm
              type="text"
              value={userLastName}
              label="Nom"
              onChange={changeLastName}
            />
          </div>
          <div className="contact-form-input">
            <ContactInputForm
              type="email"
              value={userEmail}
              label="*Email"
              onChange={changeEmail}
            />
          </div>
          <div className="contact-form-input-message">
            <ContactInputForm
              type="area"
              value={userMessage}
              label="*Message"
              onChange={changeMessage}
            />
          </div>
        </div>
        <button name="button" className="contact-button-form" type="submit">
          Envoyer
        </button>
      </form>
      <div></div>
      </div>
      <Footer></Footer>
    </div>
  );
}
