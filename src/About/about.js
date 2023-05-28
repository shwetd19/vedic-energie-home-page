import React from "react";
import "./about.css";
// Import the necessary images
import aboutImage1 from "./about-01.png";
import aboutImage2 from "./about-02.png";
import aboutImage3 from "./about-03.png";
import aboutImage4 from "./about-04.png";

const About = () => {
  // Define an array of card data
  const cardData = [
    {
      image: aboutImage1,
      alt: "User 1",
      title: "Loreum Ipsum",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      image: aboutImage2,
      alt: "User 2",
      title: "Loreum Ipsum",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      image: aboutImage3,
      alt: "User 3",
      title: "Loreum Ipsum",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      image: aboutImage4,
      alt: "User 4",
      title: "Loreum Ipsum",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  ];

  return (
    <section id="about">
      <div className="my-5 container">
        <h2 className="about-text">
          <b>Efficient Energy</b> — The Way It Should Be
        </h2>
        <div className="row mt-5">
          {cardData.map((card, index) => (
            <div className="col-md-6" key={index}>
              <div className="card">
                <img src={card.image} className="card-img-top" alt={card.alt} />
                <div className="card-body">
                  <h4 className="card-title font-weight-bold">{card.title}</h4>
                  <p className="card-text">{card.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
