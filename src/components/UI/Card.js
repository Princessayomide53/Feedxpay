import React from "react";

const Card = (props) => {
  const card = " Cards " + props.className;
  return <div className={card}>{props.children}</div>;
};

export default Card;
