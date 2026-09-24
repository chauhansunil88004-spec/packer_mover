import React from "react";
import "./delivery.css";

const Delivery = () => {
  return (
    <section className="delivery-page service-page">
      <div className="delivery-hero">
        <div className="delivery-content">
          <span>05 — Delivery</span>

          <h1>Reliable Delivery to Your Door</h1>

          <p>
            We complete your relocation by delivering your belongings safely
            and efficiently to your new home, office, or destination.
          </p>

          <button>Get Started</button>
        </div>

        <div className="delivery-image">
          <img
            src="https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=1200&q=80"
            alt="Packer mover delivery service"
          />
        </div>
      </div>

      <div className="delivery-section">
        <div className="delivery-main-image">
          <img
            src="https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=1000&q=80"
            alt="Delivery boxes"
          />
        </div>

        <div className="delivery-text">
          <span>Final Step</span>

          <h2>From Our Truck to Your Door</h2>

          <p>
            Pashupati Packer & Mover focuses on making the final stage of your
            relocation as smooth as possible.
          </p>

          <div className="delivery-features">
            <div>
              <strong>01</strong>
              <div>
                <h3>Safe Delivery</h3>
                <p>Your goods are delivered with care.</p>
              </div>
            </div>

            <div>
              <strong>02</strong>
              <div>
                <h3>On-Time Service</h3>
                <p>We work according to your moving schedule.</p>
              </div>
            </div>

            <div>
              <strong>03</strong>
              <div>
                <h3>Door-to-Door</h3>
                <p>Convenient delivery directly to your destination.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Delivery;
