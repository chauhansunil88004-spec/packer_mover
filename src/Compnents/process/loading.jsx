import React from "react";
import "./loading.css";

const Loading = () => {
  return (
    <section className="loading-page service-page">
      <div className="service-hero">
        <div className="service-hero-content">
          <span className="service-tag">
            Pashupati Packer & Mover
          </span>

          <h1>Professional Loading Services</h1>

          <p>
            Our experienced moving team safely loads your packed belongings
            into the vehicle while protecting your furniture and valuables.
          </p>

          <button className="service-btn">Book Loading Service</button>
        </div>

        <div className="service-hero-image">
          <img
            src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80"
            alt="Professional loading service"
          />
        </div>
      </div>

      <div className="service-content">
        <div className="content-image">
          <img
            src="https://images.unsplash.com/photo-1600518464441-9154a4dea21b?auto=format&fit=crop&w=1000&q=80"
            alt="Moving boxes ready for loading"
          />
        </div>

        <div className="content-text">
          <span className="small-title">02 — Loading</span>

          <h2>Careful Loading & Handling</h2>

          <p>
            Loading requires experience and proper planning. Our team handles
            every box and piece of furniture carefully.
          </p>

          <p>
            Heavy and fragile items are positioned correctly to minimize
            movement and prevent damage during transportation.
          </p>

          <div className="service-features">
            <div><span>✓</span>Trained Staff</div>
            <div><span>✓</span>Safe Handling</div>
            <div><span>✓</span>Furniture Protection</div>
            <div><span>✓</span>Proper Vehicle Loading</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Loading;
