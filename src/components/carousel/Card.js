import React from "react";

export const Card = () => {
  return (
    <div className="cardContainer">
      <div className="cardDiv">
        <div className="cardImgDiv">
          <img src="https://i.pinimg.com/originals/3f/5f/e5/3f5fe5d2913c41f044d010c56a3d2fed.jpg" />
        </div>
        <div className='cardContentDiv'>
        <div className='cardTextDiv'>
        <h3>Title</h3>
        <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum</p>
        </div>
        <div className="cardButtonsDiv">
          <button>Github</button>
          <button>Live Site</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
