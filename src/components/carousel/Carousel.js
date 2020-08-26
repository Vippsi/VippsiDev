import React, { useState } from "react";
import CardGroup from './CardGroup'


import Carousel from "react-bootstrap/Carousel";
import slide1 from "../../img/img-slides/slide1.png";
import slide2 from "../../img/img-slides/slide2.jpg";
import slide3 from "../../img/img-slides/slide3.jpg";


import { makeStyles } from "@material-ui/core/styles";
import Card from "./Card"
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const projects =[{
  id: 1
},{
  id: 2
},
{
  id: 3
},
{
  id: 5
},
]

const useStyles = makeStyles({
  root: {
    maxWidth: 620,
    height: 350,
    // color:'black',
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
});


function ControlledCarousel() {
  const [index, setIndex] = useState(0);
  const classes = useStyles();

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div id="carousel" className="carousel-container">
      <h3>My Projects</h3>
      <div className="dash">&mdash;</div>
      <Carousel interval={null} activeIndex={index} onSelect={handleSelect}>
{projects.map(project => (
  <Carousel.Item>
        <Card/>
        </Carousel.Item>
))}
        
    
      </Carousel>
    </div>
  );
}

export default ControlledCarousel;
