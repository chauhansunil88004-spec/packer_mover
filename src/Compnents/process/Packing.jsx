import React from "react";
import "./packing.css";

const Packing = () => {
  return (
    <section className="service-page packing-page">
      <div className="service-hero">
        <div className="service-hero-content">
          <span className="service-tag">Pashupati Packer & Mover</span>

          <h1>Professional Packing Services</h1>

          <p>
            We carefully pack your household, office, and commercial
            belongings using quality packing materials and professional
            techniques.
          </p>

          <button className="service-btn">Get a Free Quote</button>
        </div>

        <div className="service-hero-image">
          <img
            src="https://images.unsplash.com/photo-1600518464441-9154a4dea21b?auto=format&fit=crop&w=1200&q=80"
            alt="Professional packing service"
          />
        </div>
      </div>

      <div className="service-content">
        <div className="content-image">
          <img
            src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80"
            alt="Packing boxes"
          />
        </div>

        <div className="content-text">
          <span className="small-title">01 — Packing</span>

          <h2>Safe & Secure Packing</h2>

          <p>
            At Pashupati Packer & Mover, we understand that proper packing is
            the first step toward a safe relocation.
          </p>

          <p>
            Our trained team uses appropriate boxes, bubble wrap, stretch film,
            tape, and protective materials according to the type of item.
          </p>

          <div className="service-features">
            <div>
              <span>✓</span>
              Household Packing
            </div>

            <div>
              <span>✓</span>
              Office Packing
            </div>

            <div>
              <span>✓</span>
              Fragile Item Packing
            </div>

            <div>
              <span>✓</span>
              Furniture Protection
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packing;
