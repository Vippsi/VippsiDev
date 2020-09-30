import React, { useState } from "react";
import Card from "./Card";
import slide1 from "../../img/img-slides/slide1.png";

const projects = [
  {
    title: "Story Squad",
    mission:
      "Story Squad’s mission is to empower kids’ imaginations so they don’t veg out on YouTube, Fortnite or social media all day",
    bulletpoints: [
      "Utilized React to create an enjoyable user experience",
      "Used Python scripts to analyze and filter user uploaded papers",
      "Implemented CRON scheduling to incentivize user competition",
    ],
    skills: ["HTML", "SASS", "React", "Node", "Python", "AWS"],
    github: "https://github.com/Expat-Journal-21/Backend",
    demo: "https://contest.storysquad.app/",
  },
  {
    title: "Conway's Game of Life",
    mission:
      "This project aimed at creating a visualization tool for John Conway's Game of Life",
    bulletpoints: [
      "Utilized React to build a visualization tool",
      "Implemented custom features to control speed, generation, grid-size",
    ],
    skills: ["React", "CSS"],
    demo: "https://conways-game-of-life-puce.vercel.app/",
    github: "https://github.com/Vippsi/conways-game-of-life",
  },

  {
    title: "Expat Journal",
    mission:
      "This was a team project to give expats a place to upload and save their stories",
    bulletpoints: [
      "Created a SQlite3 database for Test Driven Development and used Postgres for production",
      "Implemented an API to handle all CRUD operations for the front end developers on the team",
      "Utilized Bcrypt to hash passwords and check them against a signed JWT for authorization",
    ],
    skills: ["Node.js", "Express.js", "Bcrypt", "JWT", "Supertest", "Jest"],
    github: "https://github.com/Expat-Journal-21/Backend",
  },
  {
    title: "A-Star PathFinding Visualizer",
    mission:
      "This was a small side project to demonstrate the a* pathfinding algorithm",
    bulletpoints: [
      "Utilized React to create an enjoyable user Implemented an A-star algorithm",
      "Used PyGame to create a user interface with the ability to set starting, ending, and barrier nodes.",
    ],
    skills: ["Python", "PyGame"],
  },
  {
    title: "NASA A Photo a Day",
    mission: "This project utilizes the public NASA APOD API",
    bulletpoints: [
      "Utilized React to build a photo view for the NASA APOD API",
      "Used axios to make API calls",
    ],
    skills: ["React", "Axios", "Styled Components"],
    demo: "https://nasa-photo-of-the-day-qfeo250rs.vercel.app/",
    github: "https://github.com/Vippsi/nasa-photo-of-the-day",
  },
];
const CardGroup = () => {
  return (
    <div className="scrollDiv">
      <div id="projects" className="carouselDiv">
        <h3>Projects</h3>
        <div className="dash">&mdash;</div>
      </div>
      <div className="outerCardList">
        <div className="cardList">
          {projects.map((project) => (
            <Card project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardGroup;
