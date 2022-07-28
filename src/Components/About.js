import React from "react";
import "./About.css";
import bar from "../Images/bar.jpg";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="container">
      <div className="col-2">
        <img src={bar} alt="bar" />
        </div>
        <div className="col-2">
          <h2>Our Story</h2>
          <span className="line"></span>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            
          </p>
          <button className="button">Explore More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
