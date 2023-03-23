import React, { memo } from "react";

import "../styles/portfolio.scss";
import paint from "../images/paint.png";
import pickup from "../images/pickups.png";
import note from "../images/note.gif";
import picker from "../images/picker.gif";
import word from "../images/word.jpg";
import popol from "../images/popol.png";
import ProjectInfo from "./projectinfo";
import taxirun from "../images/taxirun.mp4";
import carpark from "../images/carpark.mp4";
import colorpage from "../images/colorpage.mp4";
import sixoclock from "../images/sixoclock.mp4";
import ewb from "../images/ewb.mp4";
const projects = [
  {
    name: "Crazy Driver 3D: Car Traffic",
    subname: "Mobile Game",
    description: "This is a 3D car racing game which you have to avoid obstacles and other cars. I made it with Unity and C#. This is my proud project because I've made this game almost from scratch. Currently, this game has over 500K downloads.",
    link: "https://play.google.com/store/apps/details?id=com.nostel.taxi.run&hl=en",
    image: taxirun,
  },
  {
    name: "Car Parking: Traffic Jam 3D",
    subname: "Mobile Game",
    description: "This is a 3D puzzle game in which you have to free all the cars. I've been maintaining and improve this game for 1 year. Currently, this game has over 5M downloads. With this game, I've learned a lot about code optimization and game performance.",
    link: "https://play.google.com/store/apps/details?id=com.nostel.parking.car&hl=en",
    image: carpark,
  },
  {
    name: "Color Draw: Relaxing ASMR",
    subname: "Mobile Game",
    description: "A simple game in which you have to draw a picture with a given color. I learned a lot about images processing (pixel manipulation). Now the game designer can simply drop an image into it and it will auto generate a level. This is also my latest project.",
    link: "https://play.google.com/store/apps/details?id=com.nostel.color.page&hl=en",
    image: colorpage,
  },
  {
    name: "Six O'clock",
    subname: "HDRP Game Prototype",
    description: "This is a game prototype which I made with Unity and C# in a short time to prove that I can make a game with Unity HDRP.",
    link: "https://www.youtube.com/watch?v=FoF2KROv1Ag&ab_channel=PhuPhu",
    image: sixoclock,
  },
  {
    name: "eWorkbook",
    subname: "Web Application and Mobile App",
    description: "This is a graduate project which my team (6 members) made with React, React Native, Nest.js, and MongoDB. eWorkbook is a free online platform that makes English exercise books more engaging with a variety of exercises. It also helps teachers automate grading, manage students, and assign exercises.",
    link: "https://student.eworkbook.me",
    image: ewb,
  }
]

const Portfolio = memo(({ refs }) => {
  return (
    <section ref={refs} className="portfolio-section">
      <div className="section-title">PORTFOLIO</div>
      <div className="portfolio-content">
        {projects.map((project, index) => (
          <ProjectInfo
            key={index}
            refs={refs}
            name={project.name}
            subname={project.subname}
            description={project.description}
            link={project.link}
            image={project.image}
          />
        ))}
      </div>
    </section>
  );
});

export default Portfolio;
