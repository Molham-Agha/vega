import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { Helmet } from "react-helmet-async";


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
          process.env.REACT_APP_SERVICE_ID, 
          process.env.REACT_APP_TEMPLATE_ID,
          form.current,
          process.env.REACT_APP_USER_ID
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
     
      <div className="contact">
        <div className="container">
          <div className="location">
            <div className="contact-info">
              <h3>WhatsApp</h3>
              <span>+90 551 883 86 77</span>
            </div>
            <div className="contact-info">
              <h3>Location</h3>
              <span>Turkiye</span>
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

    </>
  );
};

export default Contact;
