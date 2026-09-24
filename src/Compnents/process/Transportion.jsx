import React from "react";
import "./transportation.css";

const Transportion = () => {
  return (
    <section className="transportation-page service-page">
      <div className="transportation-hero">
        <div className="transportation-content">
          <span className="transportation-tag">
            Pashupati Packer & Mover
          </span>

          <h1>Reliable Transportation Services</h1>

          <p>
            Move your belongings safely and efficiently with our reliable
            transportation solutions for homes, offices, and businesses.
          </p>

          <button className="transportation-btn">
            Request Transportation
          </button>
        </div>

        <div className="transportation-image">
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80"
            alt="Packer and mover transportation truck"
          />
        </div>
      </div>

      <div className="transportation-info">
        <div className="transportation-info-image">
          <img
            src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=1000&q=80"
            alt="Moving transportation"
          />
        </div>

        <div className="transportation-info-text">
          <span>03 — Transportation</span>

          <h2>Move With Confidence</h2>

          <p>
            Our transportation service is designed to make your relocation
            simple, secure, and stress-free.
          </p>

          <p>
            We carefully arrange your belongings inside suitable vehicles and
            make sure your goods are handled properly throughout the journey.
          </p>

          <div className="transportation-list">
            <div>
              <strong>01</strong>
              <p>Suitable Moving Vehicles</p>
            </div>

            <div>
              <strong>02</strong>
              <p>Experienced Drivers</p>
            </div>

            <div>
              <strong>03</strong>
              <p>Secure Transportation</p>
            </div>

            <div>
              <strong>04</strong>
              <p>On-Time Service</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transportion;
