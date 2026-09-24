// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./ContactUs.css";

// const ContactUs = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     subject: "",
//     message: "",
//   });

//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (event) => {
//     const { name, value } = event.target;

//     setFormData((previous) => ({
//       ...previous,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     setSubmitted(true);

//     setFormData({
//       name: "",
//       email: "",
//       phone: "",
//       subject: "",
//       message: "",
//     });
//   };

//   return (
//     <main className="contact-page">
//       {/* Hero */}
//       <section className="contact-hero">
//         <div className="contact-hero-overlay"></div>

//         <div className="contact-hero-content">
//           <span>Pashupati Packer & Mover</span>

//           <h1>Contact Us</h1>

//           <p>
//             Have questions about your move? Our team is ready to help you
//             plan a safe, simple, and reliable relocation.
//           </p>
//         </div>
//       </section>

//       {/* Main Contact Section */}
//       <section className="contact-section">
//         <div className="contact-container">
//           {/* Information */}
//           <div className="contact-information">
//             <span className="section-label">Get In Touch</span>

//             <h2>
//               Let's Make Your
//               <span> Move Easier.</span>
//             </h2>

//             <p className="contact-intro">
//               Whether you are planning a household relocation, office move,
//               transportation service, or need more information about our
//               services, contact Pashupati Packer & Mover.
//             </p>

//             <div className="contact-details">
//               <div className="contact-detail">
//                 <div className="contact-icon">☎</div>

//                 <div>
//                   <small>Call Us</small>
//                   <a href="tel:+9779800000000">
//                     +977 9800000000
//                   </a>
//                 </div>
//               </div>

//               <div className="contact-detail">
//                 <div className="contact-icon">✉</div>

//                 <div>
//                   <small>Email Us</small>
//                   <a href="mailto:info@pashupatipacker.com">
//                     info@pashupatipacker.com
//                   </a>
//                 </div>
//               </div>

//               <div className="contact-detail">
//                 <div className="contact-icon">⌖</div>

//                 <div>
//                   <small>Our Location</small>
//                   <p>Kathmandu, Nepal</p>
//                 </div>
//               </div>

//               <div className="contact-detail">
//                 <div className="contact-icon">◷</div>

//                 <div>
//                   <small>Business Hours</small>
//                   <p>Sunday – Friday, 9:00 AM – 6:00 PM</p>
//                 </div>
//               </div>
//             </div>

//             <div className="contact-quick-links">
//               <Link to="/get-a-quote">
//                 Get a Free Quote <span>→</span>
//               </Link>

//               <Link to="/enquiry">
//                 Make an Enquiry <span>→</span>
//               </Link>
//             </div>
//           </div>

//           {/* Form */}
//           <div className="contact-form-wrapper">
//             <div className="contact-form-heading">
//               <span>Send Us A Message</span>
//               <h3>How Can We Help?</h3>
//             </div>

//             {submitted && (
//               <div className="success-message">
//                 Thank you! Your message has been submitted successfully.
//               </div>
//             )}

//             <form onSubmit={handleSubmit} className="contact-form">
//               <div className="form-row">
//                 <div className="form-group">
//                   <label htmlFor="name">Full Name *</label>

//                   <input
//                     id="name"
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     placeholder="Enter your name"
//                     required
//                   />
//                 </div>

//                 <div className="form-group">
//                   <label htmlFor="email">Email Address *</label>

//                   <input
//                     id="email"
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     placeholder="Enter your email"
//                     required
//                   />
//                 </div>
//               </div>

//               <div className="form-row">
//                 <div className="form-group">
//                   <label htmlFor="phone">Phone Number *</label>

//                   <input
//                     id="phone"
//                     type="tel"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     placeholder="Enter your phone number"
//                     required
//                   />
//                 </div>

//                 <div className="form-group">
//                   <label htmlFor="subject">Subject *</label>

//                   <input
//                     id="subject"
//                     type="text"
//                     name="subject"
//                     value={formData.subject}
//                     onChange={handleChange}
//                     placeholder="Enter subject"
//                     required
//                   />
//                 </div>
//               </div>

//               <div className="form-group">
//                 <label htmlFor="message">Message *</label>

//                 <textarea
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   placeholder="Tell us how we can help..."
//                   rows="6"
//                   required
//                 />
//               </div>

//               <button type="submit" className="contact-submit">
//                 Send Message
//                 <span>→</span>
//               </button>
//             </form>
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="contact-bottom">
//         <div>
//           <span>Pashupati Packer & Mover</span>

//           <h2>Ready to Move?</h2>

//           <p>
//             Get in touch with our team and start planning your relocation
//             today.
//           </p>
//         </div>

//         <Link to="/get-a-quote">
//           Get a Free Quote <span>→</span>
//         </Link>
//       </section>
//     </main>
//   );
// };

// export default ContactUs;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ContactUs.css";

const API_URL = "http://localhost:8000/api";

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

const ContactUs = () => {
  const [formData, setFormData] = useState(initialFormData);

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setSubmitted(false);
    setError("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
    setSubmitted(false);
    setError("");

    try {
      const response = await fetch(`${API_URL}/contact`, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(formData),
      });

      let data = {};

      try {
        data = await response.json();
      } catch {
        data = {};
      }

      if (!response.ok) {
        throw new Error(data.message || "Failed to send message");
      }

      // Success
      setSubmitted(true);

      // Clear form
      setFormData(initialFormData);
    } catch (error) {
      console.error("Contact form error:", error);

      if (error instanceof TypeError) {
        setError(
          "Unable to connect to server. Please make sure the backend is running on http://localhost:5000.",
        );
      } else {
        setError(error.message || "Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="contact-page">
      {/* Hero */}
      <section className="contact-hero">
        <div className="contact-hero-overlay"></div>

        <div className="contact-hero-content">
          <span>Pashupati Packer & Mover</span>

          <h1>Contact Us</h1>

          <p>
            Have questions about your move? Our team is ready to help you plan a
            safe, simple, and reliable relocation.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="contact-section">
        <div className="contact-container">
          {/* Information */}
          <div className="contact-information">
            <span className="section-label">Get In Touch</span>

            <h2>
              Let's Make Your
              <span> Move Easier.</span>
            </h2>

            <p className="contact-intro">
              Whether you are planning a household relocation, office move,
              transportation service, or need more information about our
              services, contact Pashupati Packer & Mover.
            </p>

            <div className="contact-details">
              <div className="contact-detail">
                <div className="contact-icon">☎</div>

                <div>
                  <small>Call Us</small>

                  <a href="tel:+9779800000000">+977 9800000000</a>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-icon">✉</div>

                <div>
                  <small>Email Us</small>

                  <a href="mailto:info@pashupatipacker.com">
                    info@pashupatipacker.com
                  </a>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-icon">⌖</div>

                <div>
                  <small>Our Location</small>

                  <p>Kathmandu, Nepal</p>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-icon">◷</div>

                <div>
                  <small>Business Hours</small>

                  <p>Sunday – Friday, 9:00 AM – 6:00 PM</p>
                </div>
              </div>
            </div>

            <div className="contact-quick-links">
              <Link to="/get-a-quote">
                Get a Free Quote <span>→</span>
              </Link>

              <Link to="/enquiry">
                Make an Enquiry <span>→</span>
              </Link>
            </div>
          </div>

          {/* Form */}
          <div className="contact-form-wrapper">
            <div className="contact-form-heading">
              <span>Send Us A Message</span>

              <h3>How Can We Help?</h3>
            </div>

            {/* Success */}
            {submitted && (
              <div className="success-message">
                Thank you! Your message has been submitted successfully.
              </div>
            )}

            {/* Error */}
            {error && <div className="error-message">{error}</div>}

            <form onSubmit={handleSubmit} className="contact-form">
              {/* Name + Email */}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>

                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              {/* Phone + Subject */}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>

                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>

                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Enter subject"
                    required
                  />
                </div>
              </div>

              {/* Message */}
              <div className="form-group">
                <label htmlFor="message">Message *</label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help..."
                  rows="6"
                  required
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="contact-submit"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}

                <span>{loading ? "..." : "→"}</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="contact-bottom">
        <div>
          <span>Pashupati Packer & Mover</span>

          <h2>Ready to Move?</h2>

          <p>
            Get in touch with our team and start planning your relocation today.
          </p>
        </div>

        <Link to="/get-a-quote">
          Get a Free Quote <span>→</span>
        </Link>
      </section>
    </main>
  );
};

export default ContactUs;
