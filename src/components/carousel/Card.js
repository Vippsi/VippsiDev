import React from "react";
import { Link } from "react-router-dom";
import MA from "../../img/MA.PNG";

export const Card = (props) => {
  console.log(props.project.skills);

  return (
    <div className="cardContainer">
      <article className="card">
        <header className="card-header">
          <h3 className="title">{props.project.title}</h3>
          <p>{props.project.mission}</p>
          <ul className="skillsList">
            <h3 className="skillsUsed">Skills Used:</h3>
            <div className="skillsItemsDiv">
              {props.project.skills.map((skill) => (
                <li>{skill}</li>
              ))}
            </div>
          </ul>
          <ul className="projectTextList">
            {props.project.bulletpoints.map((bullet) => (
              <li>
                <p>{bullet}</p>
              </li>
            ))}
          </ul>
        </header>
        <div className="projectButtonsDiv">
          <div className="projectButtons">
            {props.project.github === undefined ? (
              <> </>
            ) : (
              <button className="cardButton">
                <a target="_blank" href={props.project.github}>
                  Github
                </a>
              </button>
            )}
            {props.project.demo === undefined ? (
              <></>
            ) : (
              <button className="cardButtonBlue">
                <a target="_blank" href={props.project.demo}>
                  Demo
                </a>
              </button>
            )}
          </div>
        </div>
      </article>
    </div>
  );
};

export default Card;
