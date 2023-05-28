import React from "react";
import solarImage from "./solar.png";
import "./product.css";

const Product = () => {
  return (
    <section id="product">
      <div className="product-page">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1 className="product-header">
                Energy Supply Solution For Residency
              </h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
            </div>
            <div className="col-md-6">
              <img
                src={solarImage}
                alt="Product Image"
                className="product-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
