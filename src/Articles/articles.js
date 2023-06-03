import React from "react";
import "./articles.css";
import article_logo from "./article_logo.png";
import address from "./address.png";
import contact from "./contact.png";
import mail from "./mail.png";

import facebook from "./facebook.png";
import linkedin from "./linkedin.png";
import insta from "./insta.png";
import twitter from "./twitter.png";
import maps from "./maps.png";

function Articles() {
  return (
    <section id="Articles" className="gradient-custom">
      <div className="main_Recent">
        <h1 className="Recent">Recent Articles</h1>
        <div className="Recent_Articles">
          <div className="article_card">
            <img src={article_logo} />

            <div className="info">
              <p className="Sustainable">Sustainable Fashion</p>
              <p className="Published">Published On December, 2022</p>

              <p className="info_card">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or- less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
              </p>
            </div>
          </div>

          <div className="article_card">
            <img src={article_logo} />

            <div className="info">
              <p className="Sustainable">Sustainable Fashion</p>
              <p className="Published">Published On December, 2022</p>

              <p className="info_card">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or- less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
              </p>
            </div>
          </div>

          <div className="article_card">
            <img src={article_logo} />

            <div className="info">
              <p className="Sustainable">Sustainable Fashion</p>
              <p className="Published">Published On December, 2022</p>

              <p className="info_card">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or- less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
              </p>
            </div>
          </div>
        </div>

        <div className="SOCIAL_LINKS">
          <div className="SOCIAL_LINKS_grid">
            <img src="./img4.png" alt="img" height="200px" />
            <p className="img_info_social">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>

            <p className="main_info">SOCIAL LINKS</p>

            <div className="icon_social">
              <img src={facebook} alt="1" height="20" />
              <img src={linkedin} alt="1" height="20" />
              <img src={insta} alt="1" height="20" />
              <img src={twitter} alt="1" height="20" />
            </div>
          </div>

          <div className="SOCIAL_LINKS_grid">
            <p className="main_info">SOCIAL LINKS</p>
            <ul>
              <a href="#"></a>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Testimonial</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Our Team</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
            </ul>
          </div>

          <div className="SOCIAL_LINKS_grid">
            <p className="main_info">SOCIAL LINKS</p>
            <ul>
              <li>
                <a href="#">Energy Calculation</a>
              </li>
              <li>
                <a href="#">Energy Demand Management</a>
              </li>
              <li>
                <a href="#">Energy Supply Solution</a>
              </li>
              <li>
                <a href="#">Renewable Energy Solution</a>
              </li>
              <li>
                <a href="#">Reduce Energy Bills</a>
              </li>
              <li>
                <a href="#">Energy Saving</a>
              </li>
            </ul>
          </div>

          <div className="SOCIAL_LINKS_grid">
            <p className="main_info">SOCIAL LINKS</p>

            <div className="cont">
              <img src={address} alt="i" height="20px" /> Steeplebush Ave Unit 1
              Brampton, ON L6R 3B4
            </div>
            <div className="cont">
              <img src={mail} alt="i" height="20px" />
              @vedicenergie.com
            </div>
            <div className="cont">
              <img src={contact} alt="i" height="20px" />
              +91 98439 37773
            </div>
            <div className="maps">
              <img src={maps} alt="Maps" height="80px" />
            </div>
          </div>
        </div>

        <p className="copy_right">
          COPYRIGHT © 2023 VEDIC ENERGIES | ALL RIGHTS RESERVED | PRIVACY |
          SITEMAP | LEGAL | COPYRIGHT | ACCESSIBILITY
        </p>
      </div>
    </section>
  );
}

export default Articles;
