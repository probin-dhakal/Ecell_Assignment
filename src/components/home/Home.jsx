import React from "react";
import "./Home.css";

import { FaFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
function Home() {
  return (
    <>
     
      <div className="main">
      
        <div className="img">
          <img className="" src="/probin.jpg" alt="Probin Dhakal" />
        </div>
        <div className="intro">
          <div className="intro-def">
            <h1>Turning Vision Into Reality With Code And Design.</h1>
            <p>
              As a skilled <span className="imp">Frontend</span> developer, I am
              dedicated to turning ideas into innovative web applications.
              Explore my latest projects and articles, showcasing my expertise
              in <span className="imp">React.js</span> and web development.
            </p>
          </div>

          <div className="social-media">
            <a
              href="https://www.facebook.com/profile.php?id=100088985135162"
              target="_blank"
            >
              <FaFacebook className="icon1" />
            </a>
            <a href="/">
              <FaInstagramSquare className="icon2" />
            </a>
            <a
              href="https://www.linkedin.com/in/probin-dhakal-1306092b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
            >
              <FaLinkedin className="icon3" />{" "}
            </a>
            <a href="https://github.com/" target="_blank">
              <FaGithub className="icon4" />
            </a>
          </div>

          <div className="other">
            <a
              className="btn"
              href="https://drive.google.com/file/d/12pr3pHXN4e0yg74-XbOdjr9AS1CjMlqd/view?usp=drivesdk"
              target="_blank"
            >
              {" "}
              Resume
            </a>

            <a className="btn2" href="mailto:probindhakal5@gmail.com">
              Contact
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
