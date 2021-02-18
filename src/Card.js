import React from "react";

const Card = (props) => {
  const handleClick = () => {
    props.updateGame(props.id, props.number);
  };

  return (
    <img
      className="Card"
      src={props.imgSrc}
      onClick={handleClick}
      alt="hidden animal"
    />
  );
};

export default Card;
