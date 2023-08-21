import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "../commp/Header";
import Footer from "../commp/Footer";


const Contact = () => {
    const form = useRef();
    const [formcontent , setFormcontent]=useState({
      name:"",
      email:"",
      text:""
    })
  
    const sendEmail = (e) => {
      e.preventDefault();
        setFormcontent(form.current)
      emailjs
        .sendForm(
           "service_e9topdn", 
           "template_l8o050g",
            form.current,
           "XIUS4UzufwEcPBIUT"
        )
        .then(
          (result) => {
            console.log(result.text);
            console.log("message sent");
            setFormcontent({
              name:"",
              email:"",
              text:""
            })
          },
          (error) => {
            console.log(error.text);
          }
        );
    };
  return (
    <>
      <Helmet>
        <title>Contact Page</title>
      </Helmet>
      <Header />
      <div className="contact">
        <div className="container">
          <div className="location">
            <div className="contact-info">
              <h3>Call Us</h3>
              <span>+90 551 883 86 77</span>
            </div>
            <div className="contact-info">
              <h3>Location</h3>
              <span>Bursa-Turkiye</span>
            </div>
          </div>
          <hr/>
          <form className="form" ref={form} onSubmit={sendEmail}>
            <label>Your Name</label>
            <input className="contact_input" type="text" name="user_name"  value={formcontent.name}onChange={(e) => setFormcontent({...formcontent , name:e.target.value})}/>
            <label>Your Email</label>
            <input className="contact_input" type="email" name="user_email"  value={formcontent.email}onChange={(e) => setFormcontent({...formcontent , email:e.target.value})}/>
            <label>Your message</label>
            <textarea className="contact_input" name="message" cols={0} rows={10}  value={formcontent.text}onChange={(e) => setFormcontent({...formcontent , text:e.target.value})}/>
            <input className="button" type="submit" value="Send" />
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
