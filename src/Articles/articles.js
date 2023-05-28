import React from "react";
import "./articles.css";
import article_logo from "./article_logo.png";
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
              <img src="/" alt="1" height="20" />
              <img src="/" alt="1" height="20" />
              <img src="/" alt="1" height="20" />
              <img src="/" alt="1" height="20" />
            </div>
          </div>

          <div className="SOCIAL_LINKS_grid">
            <p className="main_info">SOCIAL LINKS</p>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Testimonial</li>
              <li>Blog</li>
              <li>Our Team</li>
              <li>Careers</li>
            </ul>
          </div>

          <div className="SOCIAL_LINKS_grid">
            <p className="main_info">SOCIAL LINKS</p>
            <ul>
              <li>Energy Calculation</li>
              <li>Energy Demand Management</li>
              <li>Energy Supply Solution</li>
              <li>Renewable Energy Solution</li>
              <li>Reduce Energy Bills</li>
              <li>Energy Saving</li>
            </ul>
          </div>

          <div className="SOCIAL_LINKS_grid">
            <p className="main_info">SOCIAL LINKS</p>

            <div className="cont">
              <img src="/" alt="i" height="20px" /> Steeplebush Ave Unit 1
              Brampton, ON L6R 3B4
            </div>
            <div className="cont">
              <img src="/" alt="i" height="20px" />
              @vedicenergie.com
            </div>
            <div className="cont">
              <img src="/" alt="i" height="20px" />
              +91 98439 37773
            </div>
            <img src="/" alt="iii" height="80px" />
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
