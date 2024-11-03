import React from "react";
import "./Card.css";

const Card = ({emoji, heading, detail, color}) => {
  return (
    <div className="card" style={{borderColor: {color}}}> 
      <img src={emoji} height={100} alt="" />
      <span>{heading}</span>
      <span>{detail}</span>
      <button className="c-button"> معرفة المزيد</button>
    </div>
  );
};

export default Card;
