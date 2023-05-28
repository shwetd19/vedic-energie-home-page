import React, { useEffect } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.min.css";
import "./review.css";

const Reviews = () => {
  useEffect(() => {
    const swiper = new Swiper(".swiper", {
      loop: true,
      pagination: {
        el: ".swiper-pagination",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }, []);

  return (
    <div className="container">
      <div className="board">
        <h2 className="text-light">Word from our customers</h2>
        <p className="text-light">Some of the fulfilled customers' reviews</p>

        <div className="swiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="flex">
                <div className="comments">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non,
                  placeat quisquam? Animi sunt, dignissimos est sit reiciendis
                  iste ipsa error?
                </div>
                <div className="profile">
                  <img
                    src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                    alt=""
                  />
                  <a href="#">John V. Bellanmy</a>
                  <span>Founder &amp; CEO</span>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="flex">
                <div className="comments">
                  Non, placeat quisquam? Animi sunt, dignissimos est sit
                  reiciendis iste ipsa error? Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.
                </div>
                <div className="profile">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                    alt=""
                  />
                  <a href="#">John V. Bellanmy</a>
                  <span>Founder &amp; CEO</span>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="flex">
                <div className="comments">
                  Animi sunt, ipsa error? Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Non, placeat quisquam?
                  dignissimos est sit reiciendis iste
                </div>
                <div className="profile">
                  <img
                    src="https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                    alt=""
                  />
                  <a href="#">John V. Bellanmy</a>
                  <span>Founder &amp; CEO</span>
                </div>
              </div>
            </div>
          </div>

          <div className="swiper-pagination"></div>

          <div className="swiper-button-prev custom-prev"></div>
          <div className="swiper-button-next custom-next"></div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
