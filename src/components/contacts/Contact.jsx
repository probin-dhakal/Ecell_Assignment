import React, { useEffect, useState } from "react";
import "./Contact.css";
import { IoMdMail } from "react-icons/io";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
function Contact() {
    
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  
  });

  const handleName =(e)=>{
    setName(e.target.value)
  }

  const handleEmail =(e)=>{
    setEmail(e.target.value)
  }
 const handleMes =(e)=>{
    setMessage(e.target.value)
  }

  useEffect(() => {
    
      localStorage.setItem("data", JSON.stringify(data));
    
  }, [data]);


  const handleSubmit = (e) => {
    e.preventDefault();
     setData({
       name:name,
       email:email,
       message:message,
     })
    
   
    setName("");
    setEmail("");
    setMessage("")
  }

  return (
    <div className="contact">
      
      <div className="head">
        <h1>Let's talk</h1>
        <p>
          I'm currently avaliable to take on new projects, so feel free to send
          me a message about anything that you want me to work on. You can
          contact anytime.
        </p>
        <div className="social">
        <span>  <IoMdMail /> <span>probindhakal5@gmail.com</span></span> 
        <span>  <FaPhoneVolume /> <span>+91 7896041989</span></span> 
        <span>  <FaMapMarkerAlt /> <span>Silchar, Assam</span></span> 
         
        </div>
      </div>
      <form onSubmit={handleSubmit}> 
        
        <input type="text" placeholder="Enter your name" value={name} onChange={handleName} required/>
        <input type="email" placeholder="Enter your email" value={email} onChange={handleEmail} required/>
        <textarea  rows="5" type="text" placeholder="Enter your message" value={message} onChange={handleMes} required/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Contact;
