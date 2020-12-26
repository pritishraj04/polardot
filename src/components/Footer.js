import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

//Icon Imports start here
import {
  FaBehance,
  FaInstagram,
  FaFacebook,
  FaPinterest,
} from "react-icons/fa";
//Icon Imports ends here

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join Polardot newsletter to recive our best design articles.
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time.
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              <img src="images/logo.svg" alt="PolarDot" />
            </Link>
          </div>
          <small className="website-rights">
            © 2019-2020 Polardot Design Co., All rights reserved | P. and
            polardot.in and its logo are trademarks or registered trademarks in
            India and elsewhere.
          </small>
          <div className="social-icons">
            <a
              className="social-icon-link behance"
              href="https://www.behance.net/19abhinav19"
              target="_blank"
              rel="noreferrer"
              aria-label="Behance"
            >
              <FaBehance />
            </a>
            <a
              className="social-icon-link instagram"
              href="https://www.instagram.com/polardot.in"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              className="social-icon-link facebook"
              href="https://www.facebook.com/polardot.in"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              className="social-icon-link pinterest"
              href="https://www.pinterest.com/polardotin"
              target="_blank"
              rel="noreferrer"
              aria-label="Pinterest"
            >
              <FaPinterest />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
