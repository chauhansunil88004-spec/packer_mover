import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaArrowRight,
  FaChevronRight
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const socialLinks = {
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    twitter: "https://twitter.com/",
    linkedin: "https://www.linkedin.com/",
    youtube: "https://www.youtube.com/"
  };

  const openSocial = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <footer className="footer">

      <div className="footer-main">

        <div className="footer-container">

          <div className="footer-column footer-brand">

            <Link to="/" className="footer-logo">
              <span className="footer-logo-main">
                Pashupati
              </span>

              <span className="footer-logo-sub">
                PACKERS & MOVERS
              </span>
            </Link>

            <p className="footer-description">
              Reliable packing and moving solutions for homes,
              offices and businesses across Nepal. We make your
              relocation safe, simple and stress-free.
            </p>

            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-location"
            >
              <span className="footer-contact-icon">
                <FaMapMarkerAlt />
              </span>

              <span>
                <strong>Our Location</strong>
                <small>Find us on Google Maps</small>
              </span>
            </a>

            <div className="footer-social">

              <h3>
                Follow Pashupati
              </h3>

              <div className="social-icons">

                <button
                  type="button"
                  aria-label="Pashupati Packers Facebook"
                  onClick={() =>
                    openSocial(socialLinks.facebook)
                  }
                >
                  <FaFacebookF />
                </button>

                <button
                  type="button"
                  aria-label="Pashupati Packers Instagram"
                  onClick={() =>
                    openSocial(socialLinks.instagram)
                  }
                >
                  <FaInstagram />
                </button>

                <button
                  type="button"
                  aria-label="Pashupati Packers Twitter"
                  onClick={() =>
                    openSocial(socialLinks.twitter)
                  }
                >
                  <FaTwitter />
                </button>

                <button
                  type="button"
                  aria-label="Pashupati Packers LinkedIn"
                  onClick={() =>
                    openSocial(socialLinks.linkedin)
                  }
                >
                  <FaLinkedinIn />
                </button>

                <button
                  type="button"
                  aria-label="Pashupati Packers YouTube"
                  onClick={() =>
                    openSocial(socialLinks.youtube)
                  }
                >
                  <FaYoutube />
                </button>

              </div>

            </div>

          </div>

          <div className="footer-column">

            <h3 className="footer-heading">
              Company
            </h3>

            <ul className="footer-links">

              <li>
                <Link to="/about">
                  <FaChevronRight />
                  About Us
                </Link>
              </li>

              <li>
                <Link to="/why-us">
                  <FaChevronRight />
                  Why Pashupati?
                </Link>
              </li>

              <li>
                <Link to="/mission">
                  <FaChevronRight />
                  Our Mission
                </Link>
              </li>

              <li>
                <Link to="/vision">
                  <FaChevronRight />
                  Our Vision
                </Link>
              </li>

              <li>
                <Link to="/achievements/milestones">
                  <FaChevronRight />
                  Our Milestones
                </Link>
              </li>

              <li>
                <Link to="/blog">
                  <FaChevronRight />
                  Blog
                </Link>
              </li>

            </ul>

          </div>

          <div className="footer-column">

            <h3 className="footer-heading">
              Our Services
            </h3>

            <ul className="footer-links">

              <li>
                <Link to="/services/household-shifting">
                  <FaChevronRight />
                  Household Shifting
                </Link>
              </li>

              <li>
                <Link to="/services/office-relocation">
                  <FaChevronRight />
                  Office Relocation
                </Link>
              </li>

              <li>
                <Link to="/services/vehicle-transportation">
                  <FaChevronRight />
                  Vehicle Transportation
                </Link>
              </li>

              <li>
                <Link to="/services/packing">
                  <FaChevronRight />
                  Packing Services
                </Link>
              </li>

              <li>
                <Link to="/services/loading-unloading">
                  <FaChevronRight />
                  Loading & Unloading
                </Link>
              </li>

              <li>
                <Link to="/services/storage">
                  <FaChevronRight />
                  Storage Services
                </Link>
              </li>

            </ul>

          </div>

          <div className="footer-column footer-contact">

            <h3 className="footer-heading">
              Get In Touch
            </h3>

            <a
              href="tel:+9779800000000"
              className="contact-item"
            >
              <span className="contact-icon">
                <FaPhoneAlt />
              </span>

              <span>
                <small>Call Us</small>
                <strong>
                  +977 9800000000
                </strong>
              </span>
            </a>

            <a
              href="mailto:info@pashupatipackers.com"
              className="contact-item"
            >
              <span className="contact-icon">
                <FaEnvelope />
              </span>

              <span>
                <small>Email Us</small>
                <strong>
                  info@pashupatipackers.com
                </strong>
              </span>
            </a>

            <div className="footer-quote-box">

              <h4>
                Planning to Move?
              </h4>

              <p>
                Get a free quotation for your
                relocation today.
              </p>

              <Link
                to="/quote"
                className="footer-quote-button"
              >
                Get a Free Quote
                <FaArrowRight />
              </Link>

            </div>

          </div>

        </div>

      </div>

      <div className="footer-bottom">

        <div className="footer-bottom-container">

          <p>
            © {new Date().getFullYear()}{" "}
            <strong>
              Pashupati Packers & Movers
            </strong>
            . All rights reserved.
          </p>

          <div className="footer-bottom-links">

            <Link to="/privacy">
              Privacy Policy
            </Link>

            <span>•</span>

            <Link to="/terms">
              Terms & Conditions
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;