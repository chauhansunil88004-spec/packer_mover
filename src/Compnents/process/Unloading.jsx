import React from "react";
import "./unloading.css";

const Unloading = () => {
  return (
    <section className="unloading-page service-page">
      <div className="unloading-hero">
        <div className="unloading-image">
          <img
            src="https://images.unsplash.com/photo-1603796846097-3b3e9d4d2b4d?auto=format&fit=crop&w=1200&q=80"
            alt="Moving team unloading goods"
          />
        </div>

        <div className="unloading-content">
          <span>04 — Unloading</span>

          <h1>Safe Unloading at Your New Location</h1>

          <p>
            Our professional moving team carefully unloads your belongings and
            places them where you need them.
          </p>

          <button>Book Our Service</button>
        </div>
      </div>

      <div className="unloading-details">
        <span>Professional Handling</span>

        <h2>We Handle Your Belongings With Care</h2>

        <p>
          Reaching your destination is only part of the move. Our unloading
          team ensures your furniture, boxes, appliances, and other belongings
          are safely removed from the vehicle.
        </p>

        <div className="unloading-cards">
          <div className="unloading-card">
            <div>01</div>
            <h3>Careful Unloading</h3>
            <p>
              Every item is removed carefully to reduce the possibility of
              damage.
            </p>
          </div>

          <div className="unloading-card">
            <div>02</div>
            <h3>Room Placement</h3>
            <p>
              We can place boxes and furniture in their appropriate rooms.
            </p>
          </div>

          <div className="unloading-card">
            <div>03</div>
            <h3>Final Inspection</h3>
            <p>
              Our team checks the unloading process before completing the move.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Unloading;
