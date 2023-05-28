import React from 'react';
import solarPlateImage from './solar-plate.png';
import './pricing.css';

const PricingSection = () => {
  return (
    <section id="pricing">
      <div className="pricing-page">
        <div className="container">
          <h2 className="text-center text-black mb-5">Upcoming Launch</h2>
          <div className="row">
            <div className="col-md-6">
              <h1>Energy Calculator</h1>
              <p>
                It is a long established fact that a reader will be distracted by the
                readable content of a page when looking at its layout. The point of
                using Lorem Ipsum is that it has a more-or-less normal distribution
                of letters, as opposed to using 'Content here, content here', making
                it look like readable English. Many desktop publishing packages
                and web page editors now use Lorem Ipsum as their default model
                text, and a search for 'lorem ipsum' will uncover many web sites
                still in their infancy. Various versions have evolved over the years,
                sometimes by accident, sometimes on purpose (injected humour
                and the like).
              </p>
            </div>
            <div className="col-md-6">
              <img
                src={solarPlateImage}
                alt="pricing Image"
                width="500"
                height="400"
                className="img-fluid float-right pricing-image"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <button className="btn btn-success btn-lg btn-block mt-4">Get a Quote</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
