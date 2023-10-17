import React from "react";

export default function WorkItems({ item }) {
  return (
    <div className="word__card" key={item.id}>
      <img src={item.image} alt="" className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      <a href={item.link} target="_blank" className="work__button">
        Live
        <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a>
    </div>
  );
}
