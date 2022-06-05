import React from "react";
import "../styles/HotItemCard.css";

const HotItemCard = ({ image, index, name, price, browseClass }) => {
  return (
    <>
      <div className={`HotItemCard ${browseClass}`}>
        <img src={image} alt={`${index} product`} />
        <p>{name}</p>
        <span>{price}</span>
      </div>
    </>
  );
};

export default HotItemCard;
