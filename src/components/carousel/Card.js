import React from "react";
import MA from "../../img/MA.PNG";

export const Card = () => {
  return (
      <div className="cardContainer">
        <article className="card">
          <header className="card-header">
            <h3>Minimal Arena</h3>
            <p>Test Title</p>
            <ul className="skillsList">
              <h3 className="skillsUsed">Skills Used:</h3>
              <div className="skillsItemsDiv">
                <li>React</li>
                <li>React</li>
                <li>React</li>
                <li>React</li>
              </div>
            </ul>
            <ul className="projectTextList">
              <li>
                <p>On this project I... </p>
              </li>
              <li>
                <p>On this project I... </p>
              </li>
              <li>
                <p>
                  On this project I... Did some thing and did some stuff this is
                  just temporary text that I need in place so I can style{" "}
                </p>
              </li>
            </ul>
          </header>
          <div className="projectButtons">
            <button className="cardButton">GitHub</button>
            <button className="cardButtonBlue">Demo</button>
          </div>
        </article>
      </div>
  );
};

export default Card;
