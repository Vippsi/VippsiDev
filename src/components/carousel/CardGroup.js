import React, { useState } from "react";
import Card from "./Card";
import slide1 from "../../img/img-slides/slide1.png";

const projects = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 5,
  },
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },

];
const CardGroup = () => {
  return (
    <div className="scrollDiv">
      <div id="projects" className="carouselDiv">
        <h3>Projects</h3>
        <div className="dash">&mdash;</div>
      </div>
      <div className='outerCardList'>
        <div className="cardList">
          {projects.map((project) => (
            <Card />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardGroup;
