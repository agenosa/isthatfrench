import React from "react";
import "./Reservations.css";
import bar from "../Images/bar.jpg";

const Reservations = () => {
  return (
    <div className="reservations" id="reservations">
      <div className="container">
        <img src={bar} alt="bar" />
        <div className="col-2">
          <h2>reservations</h2>
          <span className="line"></span>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            
          </p>
          <button className="button">Explore More</button>
        </div>
      </div>
    </div>
  );
};

export default Reservations;
