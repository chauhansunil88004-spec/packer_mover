import React from "react";
import {
  Package,
  Truck,
  Home,
  ShieldCheck,
  CheckCircle,
  ArrowRight,
  Phone,
  Clock3,
  Users,
  MapPin,
  Star,
  Award,
  Box,
  ClipboardCheck
} from "lucide-react";
import { Link } from "react-router-dom";
import "./HouseholdShifting.css";

const images = {
  heroBg: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80",
  packing: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=800&q=80",
  transportation: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
  unloading: "https://images.unsplash.com/photo-1546993513-e1ae8b11b0b3?w=800&q=80",
  delivery: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
  team: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=800&q=80",
  furniture: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=800&q=80"
};

const HouseholdShifting = () => {
  const whatsappNumber = "9779845047385";

  const features = [
    {
      icon: Package,
      title: "Professional Packing",
      text: "Your household items are packed carefully using quality packing materials and techniques.",
      color: "#ff6b35"
    },
    {
      icon: ShieldCheck,
      title: "Safe Handling",
      text: "We handle your belongings with utmost care to prevent any damage during transit.",
      color: "#25D366"
    },
    {
      icon: Truck,
      title: "Safe Transportation",
      text: "We provide secure and reliable transportation for your household belongings.",
      color: "#ff6b35"
    },
    {
      icon: Box,
      title: "Complete Relocation",
      text: "From packing to final delivery, we manage the complete shifting process professionally.",
      color: "#25D366"
    },
    {
      icon: Clock3,
      title: "Timely Delivery",
      text: "We ensure your belongings reach your new destination on schedule.",
      color: "#ff6b35"
    },
    {
      icon: Users,
      title: "Expert Team",
      text: "Our trained professionals handle every aspect of your household shifting.",
      color: "#25D366"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Get Free Quote",
      text: "Share your moving requirements and get a quick estimate.",
      icon: ClipboardCheck
    },
    {
      step: "02",
      title: "Professional Packing",
      text: "Our team carefully packs your household belongings.",
      icon: Package
    },
    {
      step: "03",
      title: "Safe Loading & Transport",
      text: "We load and transport your items with utmost care.",
      icon: Truck
    },
    {
      step: "04",
      title: "Unloading & Delivery",
      text: "We unload and deliver everything to your new location.",
      icon: Home
    }
  ];

  const benefits = [
    "Professional packing materials",
    "Experienced moving team",
    "Insurance coverage",
    "Timely delivery",
    "Competitive pricing",
    "Customer satisfaction"
  ];

  return (
    <main className="service-page">

      <section className="service-hero" style={{ backgroundImage: `url(${images.heroBg})` }}>
        <div className="hero-overlay"></div>
        <div className="hero-particles"></div>
        <div className="service-container">
          <div className="service-hero-content">
            <span className="service-tag">
              <Home size={16} />
              Pashupati Packers & Movers
            </span>
            <h1>
              Household <span>Shifting</span>
            </h1>
            <p>
              Safe, reliable and professional household shifting
              services for a smooth relocation experience.
            </p>
            <div className="service-actions">
              <Link to="/quote" className="btn btn-primary">
                Get Free Quote
                <ArrowRight size={18} />
              </Link>
              <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
                <Phone size={18} />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="service-stats">
        <div className="service-container">
          <div className="stats-grid">
            <div className="stat-card">
              <strong>5000+</strong>
              <span>Happy Families</span>
            </div>
            <div className="stat-card">
              <strong>10+</strong>
              <span>Years Experience</span>
            </div>
            <div className="stat-card">
              <strong>100%</strong>
              <span>Customer Satisfaction</span>
            </div>
            <div className="stat-card">
              <strong>24/7</strong>
              <span>Support Available</span>
            </div>
          </div>
        </div>
      </section>

      <section className="service-about">
        <div className="service-container about-grid">
          <div className="about-image">
            <img src={images.team} alt="Pashupati Packers team" loading="lazy" />
            <div className="about-badge">
              <Award size={30} />
              <div>
                <strong>10+ Years</strong>
                <span>Trusted Service</span>
              </div>
            </div>
          </div>
          <div className="about-content">
            <span className="section-label">ABOUT THIS SERVICE</span>
            <h2>
              Professional Household <strong>Shifting Services</strong>
            </h2>
            <p>
              Pashupati Packers & Movers provides complete
              household relocation services with professional
              packing, loading, transportation, unloading and
              delivery.
            </p>
            <p>
              Our experienced team handles your household
              belongings carefully and ensures safe delivery to
              your new destination.
            </p>
            <div className="benefits-list">
              {benefits.map((benefit, index) => (
                <div key={index}>
                  <CheckCircle size={18} />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
            <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="btn-whatsapp-small">
              <Phone size={16} />
              Get Free Quote
            </a>
          </div>
        </div>
      </section>

      <section className="service-features-section">
        <div className="service-container">
          <div className="section-heading">
            <span>WHY CHOOSE US</span>
            <h2>
              Our Household <strong>Shifting Features</strong>
            </h2>
            <p>
              We provide complete household relocation solutions with professional care and attention to detail.
            </p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div className="feature-card" key={index}>
                  <div className="feature-icon" style={{ background: `${feature.color}15` }}>
                    <Icon size={30} style={{ color: feature.color }} />
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                  <div className="feature-check">
                    <CheckCircle size={16} />
                    <span>Included</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="service-gallery">
        <div className="service-container">
          <div className="section-heading">
            <span>OUR WORK</span>
            <h2>
              Household Shifting <strong>In Action</strong>
            </h2>
          </div>
          <div className="gallery-grid">
            <div className="gallery-item gallery-large" style={{ backgroundImage: `url(${images.packing})` }}>
              <div className="gallery-overlay">
                <div className="gallery-content">
                  <Package size={40} />
                  <h3>Professional Packing</h3>
                  <p>Quality packing materials</p>
                </div>
              </div>
            </div>
            <div className="gallery-item" style={{ backgroundImage: `url(${images.transportation})` }}>
              <div className="gallery-overlay">
                <div className="gallery-content">
                  <Truck size={35} />
                  <h3>Safe Transport</h3>
                  <p>Reliable vehicles</p>
                </div>
              </div>
            </div>
            <div className="gallery-item" style={{ backgroundImage: `url(${images.unloading})` }}>
              <div className="gallery-overlay">
                <div className="gallery-content">
                  <Box size={35} />
                  <h3>Careful Unloading</h3>
                  <p>Professional handling</p>
                </div>
              </div>
            </div>
            <div className="gallery-item" style={{ backgroundImage: `url(${images.delivery})` }}>
              <div className="gallery-overlay">
                <div className="gallery-content">
                  <Home size={35} />
                  <h3>Final Delivery</h3>
                  <p>On-time delivery</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-process">
        <div className="service-container">
          <div className="section-heading">
            <span>HOW IT WORKS</span>
            <h2>
              Simple <strong>Moving Process</strong>
            </h2>
            <p>Our step-by-step process makes your household shifting easy and stress-free.</p>
          </div>
          <div className="process-grid">
            {process.map((item) => {
              const Icon = item.icon;
              return (
                <div className="process-card" key={item.step}>
                  <span className="process-number">{item.step}</span>
                  <div className="process-icon">
                    <Icon size={28} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <div className="process-arrow">
                    <ArrowRight size={20} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="service-cta">
        <div className="service-container cta-wrapper">
          <div className="cta-content">
            <div className="cta-icon">
              <MapPin size={35} />
            </div>
            <div>
              <span>READY TO MOVE</span>
              <h2>
                Let Us Handle Your <strong>Household Shifting</strong>
              </h2>
              <p>
                Get a free quote today and let our professional team
                handle your complete household relocation.
              </p>
            </div>
          </div>
          <div className="cta-actions">
            <Link to="/quote" className="btn btn-primary">
              Get Free Quote
              <ArrowRight size={18} />
            </Link>
            <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
              <Phone size={18} />
              WhatsApp Now
            </a>
          </div>
        </div>
      </section>

    </main>
  );
};

export default HouseholdShifting;