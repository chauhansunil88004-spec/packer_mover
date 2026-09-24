import React, { useState } from "react";
import "./GetAQuote.css";

const GetAQuote = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    movingFrom: "",
    movingTo: "",
    movingDate: "",
    propertyType: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setSubmitted(true);

    setFormData({
      name: "",
      phone: "",
      email: "",
      service: "",
      movingFrom: "",
      movingTo: "",
      movingDate: "",
      propertyType: "",
      message: "",
    });
  };

  return (
    <main className="quote-page">
      {/* Hero */}
      <section className="quote-hero">
        <div className="quote-hero-overlay"></div>

        <div className="quote-hero-content">
          <span>Pashupati Packer & Mover</span>

          <h1>Get a Free Quote</h1>

          <p>
            Tell us about your move and our team will help you find the
            right relocation solution for your needs.
          </p>
        </div>
      </section>

      {/* Quote Section */}
      <section className="quote-section">
        <div className="quote-container">
          {/* Left */}
          <div className="quote-info">
            <span className="quote-label">Request a Quote</span>

            <h2>
              Plan Your Move
              <span> With Confidence.</span>
            </h2>

            <p>
              Complete the form and provide a few details about your
              relocation. This helps our team understand your requirements
              and prepare the right quotation for you.
            </p>

            <div className="quote-benefits">
              <div>
                <strong>01</strong>
                <div>
                  <h3>Professional Team</h3>
                  <p>Experienced staff for your relocation.</p>
                </div>
              </div>

              <div>
                <strong>02</strong>
                <div>
                  <h3>Safe Handling</h3>
                  <p>Careful packing, loading, and transportation.</p>
                </div>
              </div>

              <div>
                <strong>03</strong>
                <div>
                  <h3>Flexible Service</h3>
                  <p>Solutions based on your moving requirements.</p>
                </div>
              </div>

              <div>
                <strong>04</strong>
                <div>
                  <h3>Reliable Support</h3>
                  <p>Our team stays connected throughout your move.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="quote-form-wrapper">
            {submitted && (
              <div className="quote-success">
                Thank you! Your quote request has been received. Our team
                will contact you soon.
              </div>
            )}

            <form className="quote-form" onSubmit={handleSubmit}>
              <div className="quote-form-title">
                <span>Your Details</span>
                <h3>Tell Us About Your Move</h3>
              </div>

              <div className="quote-form-row">
                <div className="quote-field">
                  <label htmlFor="quote-name">Full Name *</label>

                  <input
                    id="quote-name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div className="quote-field">
                  <label htmlFor="quote-phone">Phone Number *</label>

                  <input
                    id="quote-phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                    required
                  />
                </div>
              </div>

              <div className="quote-form-row">
                <div className="quote-field">
                  <label htmlFor="quote-email">Email Address</label>

                  <input
                    id="quote-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email address"
                  />
                </div>

                <div className="quote-field">
                  <label htmlFor="quote-service">Service Required *</label>

                  <select
                    id="quote-service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select service</option>
                    <option value="packing">Packing</option>
                    <option value="loading">Loading</option>
                    <option value="transportation">
                      Transportation
                    </option>
                    <option value="unloading">Unloading</option>
                    <option value="delivery">Delivery</option>
                    <option value="full-relocation">
                      Full Relocation
                    </option>
                  </select>
                </div>
              </div>

              <div className="quote-form-row">
                <div className="quote-field">
                  <label htmlFor="moving-from">Moving From *</label>

                  <input
                    id="moving-from"
                    name="movingFrom"
                    type="text"
                    value={formData.movingFrom}
                    onChange={handleChange}
                    placeholder="Current location"
                    required
                  />
                </div>

                <div className="quote-field">
                  <label htmlFor="moving-to">Moving To *</label>

                  <input
                    id="moving-to"
                    name="movingTo"
                    type="text"
                    value={formData.movingTo}
                    onChange={handleChange}
                    placeholder="Destination"
                    required
                  />
                </div>
              </div>

              <div className="quote-form-row">
                <div className="quote-field">
                  <label htmlFor="moving-date">Preferred Moving Date</label>

                  <input
                    id="moving-date"
                    name="movingDate"
                    type="date"
                    value={formData.movingDate}
                    onChange={handleChange}
                  />
                </div>

                <div className="quote-field">
                  <label htmlFor="property-type">Property Type</label>

                  <select
                    id="property-type"
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleChange}
                  >
                    <option value="">Select property</option>
                    <option value="studio">Studio / 1 Room</option>
                    <option value="apartment">Apartment</option>
                    <option value="house">House</option>
                    <option value="office">Office</option>
                    <option value="commercial">
                      Commercial Property
                    </option>
                  </select>
                </div>
              </div>

              <div className="quote-field">
                <label htmlFor="quote-message">Additional Details</label>

                <textarea
                  id="quote-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your moving requirements..."
                  rows="5"
                />
              </div>

              <button type="submit" className="quote-submit">
                Request My Quote
                <span>→</span>
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default GetAQuote;
