import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import slide1 from '../../img/img-slides/slide1.png'
import slide2 from '../../img/img-slides/slide2.jpg'
import slide3 from '../../img/img-slides/slide3.jpg'


function ControlledCarousel() {
	const [index, setIndex] = useState(0);
  
	const handleSelect = (selectedIndex, e) => {
	  setIndex(selectedIndex);
	};
  
	return (
		<div className='carousel-container'>
			<h3>My Projects</h3>
			<div className='dash'>&mdash;</div>
	  <Carousel interval={null} activeIndex={index} onSelect={handleSelect}>
		<Carousel.Item >
		
		<img
			className="mw-100 "
			src={slide1}
			alt="First slide"
		  />
		  
		
		  <Carousel.Caption>
			<h3>First slide label</h3>
		  </Carousel.Caption>
		</Carousel.Item>
		<Carousel.Item>
		  <img
			className="d-block w-100"
			src={slide2}
			alt="Second slide"
		  />
  
		  <Carousel.Caption>
			<h3>Second slide label</h3>
		  </Carousel.Caption>
		</Carousel.Item>
		<Carousel.Item>
		  <img
			className="d-block w-100"
			src={slide3}
			alt="Third slide"
		  />
  
		  <Carousel.Caption>
			<h3>Third slide label</h3>
		  </Carousel.Caption>
		</Carousel.Item>
	  </Carousel>
	  </div>
	);
  }

export default ControlledCarousel;
