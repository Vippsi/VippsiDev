import React, { useState } from "react";
import Card from "./Card";

import slide1 from "../../img/img-slides/slide1.png";

const projects = [
  {
    id: 1,
  },
];
const CardGroup = () => {
  return (
    <div className="bigCardGroupDiv">
      <div className="cardGroupDiv">
        {projects.map((project) => (
          <Card />
        ))}
      </div>
    </div>
  );
};

export default CardGroup;
