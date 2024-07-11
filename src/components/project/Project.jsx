import React from "react";
import "./Project.css";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
function Project() {
  return (
    <>
      <div className="projects">
        <h1>Imagination sparks creation!</h1>

        <div className="project-content">
          <div class="project1_card">
            <img src="movi.jpeg" alt="" />
            <h1>MoviFlex</h1>
            <p>
              Developed a movie recommendation website (MoviFlex) using React
              and Tailwind CSS. The site fetches real-time data from an external
              API and allows users to filter movies by rating and year. With
              React Router, it offers a smooth single-page experience across
              Home, Top Movies, and Latest sections. Tailwind CSS ensures a
              modern, responsive design.{" "}
            </p>
            <button>
              <a href="https://github.com/probin-dhakal/MoviFlex">View Code</a>
            </button>
          </div>
          <div class="project1_card">
            <img src="portfolio.jpeg" alt="" />
            <h1>Portfolio</h1>
            <p>
              Crafted using HTML, CSS, and JavaScript. This site is a showcase
              of my front-end development skills and features a collection of my
              projects, including a dynamic news website, an interactive weather
              website, and an engaging number guessing game. Each project
              highlights my proficiency in creating responsive web applications,
              integrating APIs, and designing user-friendly interfaces.{" "}
            </p>
            <button>
              <a href="https://github.com/probin-dhakal/Portfolio">View Code</a>
            </button>
          </div>

          <div class="project1_card">
            <img src="news.jpeg" alt="" />
            <h1>News-App</h1>
            <p>
              Developed a dynamic news website using HTML, CSS, and JavaScript,
              integrating the News API to deliver real-time updates and
              comprehensive coverage on various topics. The site features a
              user-friendly interface and an up-to-date news feed, ensuring
              visitors stay informed with the latest headlines and breaking news
              from around the world.{" "}
            </p>
            <button>
              <a href="https://github.com/probin-dhakal/pulsepres">View Code</a>
            </button>
          </div>
          <div class="project1_card">
            <img src="weather.jpeg" alt="" />
            <h1>Weather-Web</h1>
            <p>
              Developed an interactive weather website using HTML, CSS, and
              JavaScript, leveraging weather APIs to provide real-time weather
              updates and forecasts. The site features a clean and intuitive
              interface, allowing users to easily access current weather
              conditions, hourly forecasts, and extended weather predictions for
              locations around the world.{" "}
            </p>
            <button>
              <a href="https://github.com/probin-dhakal/weather_app">
                View Code
              </a>
            </button>
          </div>

          <div class="project1_card">
            <img src="shoe.jpeg" alt="" />
            <h1>Shoe Store</h1>
            <p>
              A sleek React-based shoe store website showcasing a variety of
              stylish footwear. Product data is stored in a JSON file, ensuring
              efficient and dynamic content updates. Features include intuitive
              navigation, detailed product pages, and a seamless shopping
              experience, all crafted with modern web design principles.{" "}
            </p>
            <button>
              <a href="/">View Code</a>
            </button>
          </div>
          <div class="project1_card">
            <img src="number.jpeg" alt="" />
            <h1>Number Guessing Game</h1>
            <p>
              Developed an engaging number guessing game using HTML, CSS, and
              JavaScript. The game challenges players to guess a randomly
              generated number within a specified range, providing feedback on
              each guess to guide them towards the correct answer. The project
              features a simple yet appealing user interface and interactive
              gameplay, demonstrating my ability to create fun and user-friendly
              web applications.{" "}
            </p>
            <button>
              <a href="https://github.com/probin-dhakal/Guess_my_number_game">
                View Code
              </a>
            </button>
          </div>
          <div class="project1_card">
            <img src="jokes.jpeg" alt="" />
            <h1>Jokes Generator</h1>
            <p>
              A lively jokes website built with React, featuring a wide array of
              humorous content stored in a JSON file. Enjoy quick loading times
              and an engaging user experience with random joke displays, and a
              clean, responsive design. Perfect for a daily dose of laughter.
            </p>
            <button>
              <a href="https://jokes-generator-kappa.vercel.app/">
                Visit
              </a>
            </button>
          </div>
          <div class="project1_card">
            <img src="color.jpeg" alt="" />
            <h1>Gradient Generator</h1>
            <p>
              A dynamic gradient generator built with HTML, CSS, and JavaScript,
              allowing users to create and customize beautiful gradients.
              Features include real-time preview, multiple color stops, and easy copy-to-clipboard functionality. The
              intuitive interface and responsive design make it simple to
              generate stunning gradients for any project.{" "}
            </p>
            <button>
              <a href="https://linear-gradient-generator.vercel.app/">
                Visit
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
