import React from "react";
import {
  Truck,
  Package,
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
  ClipboardCheck,
  ArrowUpDown,
  Hand
} from "lucide-react";
import { Link } from "react-router-dom";
import "./LoadingUnloading.css";

const images = {
  heroBg: "https://images.unsplash.com/photo-1546993513-e1ae8b11b0b3?w=1200&q=80",
  loading1: "https://images.unsplash.com/photo-1546993513-e1ae8b11b0b3?w=800&q=80",
  loading2: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
  unloading: "https://images.unsplash.com/photo-1546993513-e1ae8b11b0b3?w=800&q=80",
  team: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=800&q=80",
  equipment: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
  delivery: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
  warehouse: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80"
};

const LoadingUnloading = () => {
  const whatsappNumber = "9779845047385";

  const features = [
    {
      icon: Users,
      title: "Trained Team",
      text: "Experienced professionals handle your goods carefully with proper techniques.",
      color: "#ff6b35"
    },
    {
      icon: ShieldCheck,
      title: "Safe Handling",
      text: "Proper handling methods are used during loading and unloading.",
      color: "#25D366"
    },
    {
      icon: ClipboardCheck,
      title: "Organized Process",
      text: "Systematic loading and unloading for smooth relocation.",
      color: "#ff6b35"
    },
    {
      icon: Hand,
      title: "Careful Movement",
      text: "Every item is moved with care to prevent damage.",
      color: "#25D366"
    },
    {
      icon: Box,
      title: "Proper Equipment",
      text: "We use the right equipment for safe loading and unloading.",
      color: "#ff6b35"
    },
    {
      icon: Clock3,
      title: "Efficient Service",
      text: "Quick and efficient loading and unloading to save time.",
      color: "#25D366"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Assessment",
      text: "We assess the items and plan the loading process.",
      icon: ClipboardCheck
    },
    {
      step: "02",
      title: "Safe Loading",
      text: "Our team carefully loads all items onto the vehicle.",
      icon: ArrowUpDown
    },
    {
      step: "03",
      title: "Secure Transport",
      text: "Items are secured properly during transportation.",
      icon: Truck
    },
    {
      step: "04",
      title: "Careful Unloading",
      text: "We unload and place items at your desired location.",
      icon: Hand
    }
  ];

  const benefits = [
    "Professional handling",
    "Safe loading techniques",
    "Proper unloading methods",
    "Trained team members",
    "Right equipment",
    "Efficient process"
  ];

  return (
    <main className="loading-page">

      <section className="loading-hero" style={{ backgroundImage: `url("${images.heroBg}")` }}>
        <div className="hero-overlay"></div>
        <div className="hero-particles"></div>
        <div className="loading-container">
          <div className="loading-hero-content">
            <span className="loading-tag">
              <ArrowUpDown size={16} />
              Careful Handling
            </span>
            <h1>
              Loading & <span>Unloading</span>
            </h1>
            <p>
              Professional loading and unloading services with
              careful handling of your belongings.
            </p>
            <div className="loading-actions">
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

      <section className="loading-stats">
        <div className="loading-container">
          <div className="stats-grid">
            <div className="stat-card">
              <strong>5000+</strong>
              <span>Loading Jobs Done</span>
            </div>
            <div className="stat-card">
              <strong>10+</strong>
              <span>Years Experience</span>
            </div>
            <div className="stat-card">
              <strong>100%</strong>
              <span>Safe Handling</span>
            </div>
            <div className="stat-card">
              <strong>24/7</strong>
              <span>Support Available</span>
            </div>
          </div>
        </div>
      </section>

      <section className="loading-about">
        <div className="loading-container about-grid">
          <div className="about-image">
            <img src={images.team} alt="Pashupati Packers loading team" loading="lazy" />
            <div className="about-badge">
              <Award size={30} />
              <div>
                <strong>Trusted Service</strong>
                <span>5000+ Jobs Completed</span>
              </div>
            </div>
          </div>
          <div className="about-content">
            <span className="section-label">ABOUT THIS SERVICE</span>
            <h2>
              Safe Loading & <strong>Unloading Services</strong>
            </h2>
            <p>
              Our trained team carefully loads and unloads your
              belongings using proper handling methods to reduce
              the risk of damage during relocation.
            </p>
            <p>
              We ensure systematic loading and unloading with
              professional care and attention to detail.
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

      <section className="loading-features-section">
        <div className="loading-container">
          <div className="section-heading">
            <span>WHY CHOOSE US</span>
            <h2>
              Loading & Unloading <strong>Features</strong>
            </h2>
            <p>
              We provide professional loading and unloading services with careful handling and attention to detail.
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

      <section className="loading-gallery">
        <div className="loading-container">
          <div className="section-heading">
            <span>OUR WORK</span>
            <h2>
              Loading & Unloading <strong>In Action</strong>
            </h2>
          </div>
          <div className="gallery-grid">
            <div className="gallery-item gallery-large" style={{ backgroundImage: `url("${images.loading1}")` }}>
              <div className="gallery-overlay">
                <div className="gallery-content">
                  <ArrowUpDown size={40} />
                  <h3>Professional Loading</h3>
                  <p>Careful handling</p>
                </div>
              </div>
            </div>
            <div className="gallery-item" style={{ backgroundImage: `url("${images.equipment}")` }}>
              <div className="gallery-overlay">
                <div className="gallery-content">
                  <Box size={35} />
                  <h3>Proper Equipment</h3>
                  <p>Right tools</p>
                </div>
              </div>
            </div>
            <div className="gallery-item" style={{ backgroundImage: `url("${images.unloading}")` }}>
              <div className="gallery-overlay">
                <div className="gallery-content">
                  <Hand size={35} />
                  <h3>Careful Unloading</h3>
                  <p>Safe placement</p>
                </div>
              </div>
            </div>
            <div className="gallery-item" style={{ backgroundImage: `url("${images.delivery}")` }}>
              <div className="gallery-overlay">
                <div className="gallery-content">
                  <Truck size={35} />
                  <h3>Safe Transport</h3>
                  <p>Secure delivery</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="loading-process">
        <div className="loading-container">
          <div className="section-heading">
            <span>HOW IT WORKS</span>
            <h2>
              Simple Loading & <strong>Unloading Process</strong>
            </h2>
            <p>Our step-by-step process ensures your items are handled safely and professionally.</p>
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

      <section className="loading-cta">
        <div className="loading-container cta-wrapper">
          <div className="cta-content">
            <div className="cta-icon">
              <Hand size={35} />
            </div>
            <div>
              <span>READY TO MOVE</span>
              <h2>
                Let Us Handle Your <strong>Loading & Unloading</strong>
              </h2>
              <p>
                Get a free quote today and let our professional team
                handle your loading and unloading with care.
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

export default LoadingUnloading;