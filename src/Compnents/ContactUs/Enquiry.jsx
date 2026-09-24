// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./Enquiry.css";

// const Enquiry = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     enquiryType: "",
//     preferredContact: "",
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
//       phone: "",
//       email: "",
//       enquiryType: "",
//       preferredContact: "",
//       message: "",
//     });
//   };

//   return (
//     <main className="enquiry-page">
//       {/* Hero */}
//       <section className="enquiry-hero">
//         <div className="enquiry-hero-overlay"></div>

//         <div className="enquiry-hero-content">
//           <span>Pashupati Packer & Mover</span>

//           <h1>Make an Enquiry</h1>

//           <p>
//             Have a question about our packing, moving, transportation, or
//             relocation services? Send us your enquiry.
//           </p>
//         </div>
//       </section>

//       {/* Enquiry Content */}
//       <section className="enquiry-section">
//         <div className="enquiry-container">
//           {/* Left */}
//           <div className="enquiry-info">
//             <span className="enquiry-label">We're Here to Help</span>

//             <h2>
//               Ask Us
//               <span> Anything.</span>
//             </h2>

//             <p>
//               Our team is available to answer your questions and provide
//               information about your relocation requirements.
//             </p>

//             <div className="enquiry-image">
//               <img
//                 src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85"
//                 alt="Pashupati Packer and Mover support team"
//               />
//             </div>

//             <div className="enquiry-contact-box">
//               <div>
//                 <small>Call Us</small>
//                 <a href="tel:+9779800000000">
//                   +977 9800000000
//                 </a>
//               </div>

//               <div>
//                 <small>Email</small>
//                 <a href="mailto:info@pashupatipacker.com">
//                   info@pashupatipacker.com
//                 </a>
//               </div>
//             </div>
//           </div>

//           {/* Form */}
//           <div className="enquiry-form-wrapper">
//             <div className="enquiry-form-heading">
//               <span>Enquiry Form</span>

//               <h3>How Can We Assist You?</h3>
//             </div>

//             {submitted && (
//               <div className="enquiry-success">
//                 Your enquiry has been submitted successfully. Thank you
//                 for contacting Pashupati Packer & Mover.
//               </div>
//             )}

//             <form
//               className="enquiry-form"
//               onSubmit={handleSubmit}
//             >
//               <div className="enquiry-row">
//                 <div className="enquiry-field">
//                   <label htmlFor="enquiry-name">
//                     Full Name *
//                   </label>

//                   <input
//                     id="enquiry-name"
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     placeholder="Enter your name"
//                     required
//                   />
//                 </div>

//                 <div className="enquiry-field">
//                   <label htmlFor="enquiry-phone">
//                     Phone Number *
//                   </label>

//                   <input
//                     id="enquiry-phone"
//                     type="tel"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     placeholder="Enter your phone number"
//                     required
//                   />
//                 </div>
//               </div>

//               <div className="enquiry-row">
//                 <div className="enquiry-field">
//                   <label htmlFor="enquiry-email">
//                     Email Address
//                   </label>

//                   <input
//                     id="enquiry-email"
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     placeholder="Enter your email"
//                   />
//                 </div>

//                 <div className="enquiry-field">
//                   <label htmlFor="enquiry-type">
//                     Enquiry Type *
//                   </label>

//                   <select
//                     id="enquiry-type"
//                     name="enquiryType"
//                     value={formData.enquiryType}
//                     onChange={handleChange}
//                     required
//                   >
//                     <option value="">Select enquiry type</option>
//                     <option value="home-moving">
//                       Home Moving
//                     </option>
//                     <option value="office-moving">
//                       Office Moving
//                     </option>
//                     <option value="packing">
//                       Packing Service
//                     </option>
//                     <option value="transportation">
//                       Transportation
//                     </option>
//                     <option value="storage">
//                       Storage
//                     </option>
//                     <option value="other">
//                       Other
//                     </option>
//                   </select>
//                 </div>
//               </div>

//               <div className="enquiry-field">
//                 <label htmlFor="preferred-contact">
//                   Preferred Contact Method
//                 </label>

//                 <div className="contact-methods">
//                   <label className="contact-method">
//                     <input
//                       type="radio"
//                       name="preferredContact"
//                       value="phone"
//                       checked={
//                         formData.preferredContact === "phone"
//                       }
//                       onChange={handleChange}
//                     />

//                     <span>Phone</span>
//                   </label>

//                   <label className="contact-method">
//                     <input
//                       type="radio"
//                       name="preferredContact"
//                       value="email"
//                       checked={
//                         formData.preferredContact === "email"
//                       }
//                       onChange={handleChange}
//                     />

//                     <span>Email</span>
//                   </label>

//                   <label className="contact-method">
//                     <input
//                       type="radio"
//                       name="preferredContact"
//                       value="whatsapp"
//                       checked={
//                         formData.preferredContact === "whatsapp"
//                       }
//                       onChange={handleChange}
//                     />

//                     <span>WhatsApp</span>
//                   </label>
//                 </div>
//               </div>

//               <div className="enquiry-field">
//                 <label htmlFor="enquiry-message">
//                   Your Enquiry *
//                 </label>

//                 <textarea
//                   id="enquiry-message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   placeholder="Write your question or enquiry..."
//                   rows="7"
//                   required
//                 />
//               </div>

//               <button
//                 type="submit"
//                 className="enquiry-submit"
//               >
//                 Submit Enquiry
//                 <span>→</span>
//               </button>
//             </form>
//           </div>
//         </div>
//       </section>

//       {/* Bottom CTA */}
//       <section className="enquiry-bottom">
//         <div>
//           <span>Need a Detailed Estimate?</span>

//           <h2>Get a Free Moving Quote</h2>
//         </div>

//         <Link to="/get-a-quote">
//           Get a Quote
//           <span>→</span>
//         </Link>
//       </section>
//     </main>
//   );
// };

// export default Enquiry;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Enquiry.css";

const Enquiry = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    enquiryType: "",
    preferredContact: "",
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

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/api/enquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.message || "Failed to submit enquiry");
      }

      setSubmitted(true);

      setFormData({
        name: "",
        phone: "",
        email: "",
        enquiryType: "",
        preferredContact: "",
        message: "",
      });
    } catch (error) {
      console.error("Enquiry error:", error);

      alert(error.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <main className="enquiry-page">
      {/* Hero */}
      <section className="enquiry-hero">
        <div className="enquiry-hero-overlay"></div>

        <div className="enquiry-hero-content">
          <span>Pashupati Packer & Mover</span>

          <h1>Make an Enquiry</h1>

          <p>
            Have a question about our packing, moving, transportation, or
            relocation services? Send us your enquiry.
          </p>
        </div>
      </section>

      {/* Enquiry Content */}
      <section className="enquiry-section">
        <div className="enquiry-container">
          {/* Left */}
          <div className="enquiry-info">
            <span className="enquiry-label">We're Here to Help</span>

            <h2>
              Ask Us
              <span> Anything.</span>
            </h2>

            <p>
              Our team is available to answer your questions and provide
              information about your relocation requirements.
            </p>

            <div className="enquiry-image">
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85"
                alt="Pashupati Packer and Mover support team"
              />
            </div>

            <div className="enquiry-contact-box">
              <div>
                <small>Call Us</small>

                <a href="tel:+9779800000000">+977 9800000000</a>
              </div>

              <div>
                <small>Email</small>

                <a href="mailto:info@pashupatipacker.com">
                  info@pashupatipacker.com
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="enquiry-form-wrapper">
            <div className="enquiry-form-heading">
              <span>Enquiry Form</span>

              <h3>How Can We Assist You?</h3>
            </div>

            {submitted && (
              <div className="enquiry-success">
                Your enquiry has been submitted successfully. Thank you for
                contacting Pashupati Packer & Mover.
              </div>
            )}

            <form className="enquiry-form" onSubmit={handleSubmit}>
              <div className="enquiry-row">
                <div className="enquiry-field">
                  <label htmlFor="enquiry-name">Full Name *</label>

                  <input
                    id="enquiry-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="enquiry-field">
                  <label htmlFor="enquiry-phone">Phone Number *</label>

                  <input
                    id="enquiry-phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
              </div>

              <div className="enquiry-row">
                <div className="enquiry-field">
                  <label htmlFor="enquiry-email">Email Address</label>

                  <input
                    id="enquiry-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                  />
                </div>

                <div className="enquiry-field">
                  <label htmlFor="enquiry-type">Enquiry Type *</label>

                  <select
                    id="enquiry-type"
                    name="enquiryType"
                    value={formData.enquiryType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select enquiry type</option>

                    <option value="home-moving">Home Moving</option>

                    <option value="office-moving">Office Moving</option>

                    <option value="packing">Packing Service</option>

                    <option value="transportation">Transportation</option>

                    <option value="storage">Storage</option>

                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="enquiry-field">
                <label htmlFor="preferred-contact">
                  Preferred Contact Method
                </label>

                <div className="contact-methods">
                  <label className="contact-method">
                    <input
                      type="radio"
                      name="preferredContact"
                      value="phone"
                      checked={formData.preferredContact === "phone"}
                      onChange={handleChange}
                    />

                    <span>Phone</span>
                  </label>

                  <label className="contact-method">
                    <input
                      type="radio"
                      name="preferredContact"
                      value="email"
                      checked={formData.preferredContact === "email"}
                      onChange={handleChange}
                    />

                    <span>Email</span>
                  </label>

                  <label className="contact-method">
                    <input
                      type="radio"
                      name="preferredContact"
                      value="whatsapp"
                      checked={formData.preferredContact === "whatsapp"}
                      onChange={handleChange}
                    />

                    <span>WhatsApp</span>
                  </label>
                </div>
              </div>

              <div className="enquiry-field">
                <label htmlFor="enquiry-message">Your Enquiry *</label>

                <textarea
                  id="enquiry-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your question or enquiry..."
                  rows="7"
                  required
                />
              </div>

              <button type="submit" className="enquiry-submit">
                Submit Enquiry
                <span>→</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="enquiry-bottom">
        <div>
          <span>Need a Detailed Estimate?</span>

          <h2>Get a Free Moving Quote</h2>
        </div>

        <Link to="/get-a-quote">
          Get a Quote
          <span>→</span>
        </Link>
      </section>
    </main>
  );
};

export default Enquiry;
