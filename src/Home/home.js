import React from "react";
import "./home.css";
import heroDesign from "./hero-design.png";

const Home = () => {
  const menuItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "product", label: "Product" },
    { id: "pricing", label: "Pricing" },
    { id: "contact", label: "Contact" },
  ];

  const renderMenuItems = () => {
    return menuItems.map((item) => (
      <li key={item.id}>
        <a href={`#${item.id}`}>{item.label}</a>
      </li>
    ));
  };

  return (
    <section id="home">
      <header>
        <a href="#">
          <img src="assets/images/logo.png" alt="" />
        </a>
        <ul id="menu" className="menu-items">
          {renderMenuItems()}
          <li>
            <button
              className="quote-button"
              onClick={() => (window.location.href = "quote.html")}
            >
              Get A Quote
            </button>
          </li>
        </ul>
      </header>
      <div className="home">
        <img src={heroDesign} className="object" alt="Hero Design" />
        <h1 className="heros-text font-weight-bold">
          Connecting the world to green energy solutions and a carbon-free future.
        </h1>
      </div>
    </section>
  );
};

export default Home;
