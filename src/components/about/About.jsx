import React from "react";
import "./About.css";

function About() {
  return (
    <>
    <div className="cont">
      <div className="about">
        <h1>Trust the process!</h1>

        <div className="about_content">
          <p>
            Hi, this is <span className="important">Probin</span>, a web developer specializing in front-end
            technologies with a strong foundation in HTML, CSS, and JavaScript.
            I have completed several projects, including a news website, weather
            website, number guessing game, and a portfolio that showcases my
            work. My experience extends to React, where I use React Router for
            navigation and Tailwind CSS for styling, though I prefer vanilla CSS
            for modular component styling.
            <br />
            <br />
            Recently, I have started learning back-end development to become a
            full-stack developer. I have worked with APIs like the News API and
            a Movie API. One of my ongoing projects is a movie recommendation
            website built with React, demonstrating my ability to create dynamic
            and interactive applications.
          </p>
          <img src="/probin.jpg" alt="" />
        </div>
      </div>

      {/* <div className="skills">
        <h1>Skills</h1>

        <div className="skills_content">
          <h3 className="one">
            {" "}
            <span>HTML</span> <span>CSS</span> <span>JavaScript</span>
          </h3>

          <h3 className="two">
            {" "}
            <span>ReactJS</span> <span className="special">Web</span>{" "}
            <span>Tailwind CSS</span>
          </h3>

          <h3 className="three">
            <span>C++</span> <span>GitHub </span> <span>VS Code</span>
          </h3>
        </div>
      </div> */}
<div className="skills">

<div className="intro">
  <h1>SKILLS</h1>
  <h2>My current skill level may be limited, but it does not signify the end of my learning journey.
</h2>
</div>
<div className="container">
  <div className="card1">
    <img src="html.jpeg" alt="" />
    <h1>HTML</h1>
  </div>
  <div className="card1">
    <img src="css.jpeg" alt="" />
    <h1>CSS</h1>
  </div>
  <div className="card1">
    <img src="js.jpeg" alt="" />
    <h1>JAVASCRIPT</h1>
  </div>
  <div className="card1">
    <img src="react.jpeg" alt="" />
    <h1>REACT JS</h1>
  </div>
  <div className="card1">
    <img src="tailwind.jpeg" alt="" />
    <h1>TAILWIND</h1>
  </div>
  <div className="card1">
    <img src="boot.jpeg" alt="" />
    <h1>BOOTSTRAP</h1>
  </div>
  <div className="card1">
    <img src="c.jpeg" alt="" />
    <h1>C</h1>
  </div>
  <div className="card1">
    <img src="c++.jpeg" alt="" />
    <h1>C++</h1>
  </div>
  <div className="card1">
    <img src="github.jpeg" alt="" />
    <h1>GITHUB</h1>
  </div>
  <div className="card1">
    <img src="vs.jpeg" alt="" />
    <h1>VS CODE</h1>
  </div>

  
</div>

</div>
   
</div>
    </>
  );
}

export default About;
