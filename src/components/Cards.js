import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Latest Instagram Posts</h1>
      <div className="cards__container">
        <ul className="cards__items">
          <CardItem />
        </ul>
      </div>
    </div>
  );
}

export default Cards;
