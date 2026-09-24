import React, { useState } from "react";

import {
  ArrowRight,
  CheckCircle,
  ChevronRight,
  Clock3,
  Home as HomeIcon,
  MapPin,
  Package,
  Phone,
  ShieldCheck,
  Truck,
  Users,
  Warehouse
} from "lucide-react";
import "./Home.css";

const services = [
  {
    icon: HomeIcon,
    title: "Household Shifting",
    text: "Safe and reliable relocation services for your home with professional packing and transportation."
  },
  {
    icon: Truck,
    title: "Office Relocation",
    text: "Move your office smoothly with minimum downtime and complete handling of your valuable equipment."
  },
  {
    icon: Package,
    title: "Packing Services",
    text: "Professional packing using quality materials to protect your furniture, electronics and belongings."
  },
  {
    icon: ShieldCheck,
    title: "Vehicle Transportation",
    text: "Secure transportation of cars, bikes and other vehicles with proper handling and protection."
  },
  {
    icon: Warehouse,
    title: "Storage Services",
    text: "Safe and convenient storage solutions for short-term and long-term requirements."
  },
  {
    icon: MapPin,
    title: "Local & Domestic Moving",
    text: "Reliable moving solutions across cities with doorstep pickup and delivery services."
  }
];

const processSteps = [
  {
    number: "01",
    title: "Get a Quote",
    text: "Share your moving requirements and get a quick estimate."
  },
  {
    number: "02",
    title: "Professional Packing",
    text: "Our trained team carefully packs your valuable belongings."
  },
  {
    number: "03",
    title: "Safe Transportation",
    text: "Your goods are transported securely to the destination."
  },
  {
    number: "04",
    title: "Doorstep Delivery",
    text: "We safely unload and deliver everything to your new location."
  }
];

const locations = [
  "Kathmandu",
  "Pokhara",
  "Butwal",
  "Bhairahawa",
  "Chitwan",
  "Nepalgunj",
  "Biratnagar",
  "Dharan",
  "Janakpur",
  "Hetauda",
  "Dhangadhi",
  "Lalitpur"
];

const Home = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    from: "",
    to: ""
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const whatsappNumber = "9779845047385";
    const message = `Name: ${formData.name}%0APhone: ${formData.phone}%0AMoving From: ${formData.from}%0AMoving To: ${formData.to}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <main className="home">
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-container">
          <div className="hero-content">
            <span className="hero-tag">TRUSTED PACKERS & MOVERS</span>
            <h1>
              Move With
              <span> Confidence</span>
            </h1>
            <p>
              Professional packing and moving services for safe,
              secure and hassle-free relocation across Nepal.
            </p>
            <div className="hero-actions">
              <a href="/quote" className="primary-button">
                Get Free Quote
                <ArrowRight size={18} />
              </a>
              <a href="https://wa.me/9779845047385" target="_blank" rel="noopener noreferrer" className="secondary-button">
                <Phone size={18} />
                WhatsApp Us
              </a>
            </div>
            <div className="hero-features">
              <div>
                <CheckCircle size={18} />
                <span>Safe Moving</span>
              </div>
              <div>
                <CheckCircle size={18} />
                <span>Professional Team</span>
              </div>
              <div>
                <CheckCircle size={18} />
                <span>On-Time Delivery</span>
              </div>
            </div>
          </div>
          <div className="quote-card">
            <div className="quote-header">
              <span>QUICK QUOTE</span>
              <h2>Get Your <strong>FREE</strong> Quote</h2>
              <p>Tell us about your move</p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <MapPin size={17} />
                  <input
                    type="text"
                    name="from"
                    placeholder="Moving From"
                    value={formData.from}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <MapPin size={17} />
                  <input
                    type="text"
                    name="to"
                    placeholder="Moving To"
                    value={formData.to}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <button type="submit" className="quote-submit">
                Get Free Quote
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-item">
            <Users size={30} />
            <div>
              <strong>10+</strong>
              <span>Years Experience</span>
            </div>
          </div>
          <div className="stat-item">
            <Truck size={30} />
            <div>
              <strong>50K+</strong>
              <span>Successful Moves</span>
            </div>
          </div>
          <div className="stat-item">
            <MapPin size={30} />
            <div>
              <strong>100+</strong>
              <span>Locations</span>
            </div>
          </div>
          <div className="stat-item">
            <ShieldCheck size={30} />
            <div>
              <strong>99%</strong>
              <span>Customer Satisfaction</span>
            </div>
          </div>
        </div>
      </section>

      <section className="services-section">
        <div className="section-heading">
          <span>OUR SERVICES</span>
          <h2>Complete Moving Solutions</h2>
          <p>
            Reliable relocation services designed to make your move
            simple, safe and stress-free.
          </p>
        </div>
        <div className="services-grid">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article className="service-card" key={service.title}>
                <div className="service-icon">
                  <Icon size={30} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <a href="/services">
                  Learn More
                  <ChevronRight size={17} />
                </a>
              </article>
            );
          })}
        </div>
      </section>

      <section className="about-section">
        <div className="about-container">
          <div className="about-visual">
            <div className="about-box-main">
              <Truck size={75} />
              <strong>Moving With Care</strong>
              <span>Every Box Matters</span>
            </div>
            <div className="about-experience">
              <strong>10+</strong>
              <span>Years of<br />Experience</span>
            </div>
          </div>
          <div className="about-content">
            <span className="section-label">ABOUT US</span>
            <h2>
              Your Trusted Partner
              <span> For Every Move</span>
            </h2>
            <p>
              We provide professional packing and moving solutions
              for individuals, families and businesses. Our experienced
              team takes care of your belongings from packing to delivery.
            </p>
            <p>
              From local shifting to domestic relocation, we focus on
              safe handling, reliable transportation and timely delivery.
            </p>
            <div className="about-list">
              <div>
                <CheckCircle size={20} />
                <span>Experienced Moving Professionals</span>
              </div>
              <div>
                <CheckCircle size={20} />
                <span>Quality Packing Materials</span>
              </div>
              <div>
                <CheckCircle size={20} />
                <span>Safe & Secure Transportation</span>
              </div>
              <div>
                <CheckCircle size={20} />
                <span>Transparent Pricing</span>
              </div>
            </div>
            <a href="/about" className="about-button">
              Know More
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="section-heading">
          <span>HOW IT WORKS</span>
          <h2>Simple Moving Process</h2>
          <p>
            We make your relocation easy with a simple and transparent process.
          </p>
        </div>
        <div className="process-grid">
          {processSteps.map((step) => (
            <div className="process-card" key={step.number}>
              <span className="process-number">{step.number}</span>
              <div className="process-icon">
                {step.number === "01" && <Phone size={25} />}
                {step.number === "02" && <Package size={25} />}
                {step.number === "03" && <Truck size={25} />}
                {step.number === "04" && <HomeIcon size={25} />}
              </div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="locations-section">
        <div className="section-heading">
          <span>OUR LOCATIONS</span>
          <h2>Moving Across Nepal</h2>
          <p>
            Professional packing and moving services available in major
            cities and locations across Nepal.
          </p>
        </div>
        <div className="locations-grid">
          {locations.map((location) => (
            <a href={`/locations/${location.toLowerCase()}`} key={location}>
              <MapPin size={18} />
              <span>{location}</span>
              <ChevronRight size={16} />
            </a>
          ))}
        </div>
        <a href="/locations" className="locations-button">
          View All Locations
          <ArrowRight size={18} />
        </a>
      </section>

      <section className="map-section">
        <div className="section-heading">
          <span>FIND US</span>
          <h2>Our Location</h2>
          <p>Visit our office or find us on Google Maps for directions.</p>
        </div>
        <div className="map-container">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.928572573593!2d85.32351731505662!3d27.717026582789052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190b7d053d0d%3A0x8b1d8d0b4e2c6e0a!2sKathmandu%2C%20Nepal!5e0!3m2!1sen!2sus!4v1617182432456!5m2!1sen!2sus"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-container">
          <div>
            <span>READY TO MOVE?</span>
            <h2>Let Us Make Your Move Easy</h2>
            <p>
              Get a free quote today and let our professional team
              handle your relocation.
            </p>
          </div>
          <div className="cta-actions">
            <a href="/quote" className="cta-primary">
              Get Free Quote
              <ArrowRight size={18} />
            </a>
            <a href="https://wa.me/9779845047385" target="_blank" rel="noopener noreferrer" className="cta-phone">
              <Phone size={20} />
              WhatsApp Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;

