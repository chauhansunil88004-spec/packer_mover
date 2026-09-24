import React from "react";
import {
  Warehouse,
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
  Key,
  Calendar,
  Building2
} from "lucide-react";
import { Link } from "react-router-dom";
import "./StorageServices.css";

const images = {
  heroBg: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80",
  storage1: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
  storage2: "https://images.unsplash.com/photo-1546993513-e1ae8b11b0b3?w=800&q=80",
  warehouse: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
  security: "https://images.unsplash.com/photo-1546993513-e1ae8b11b0b3?w=800&q=80",
  team: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=800&q=80",
  delivery: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
};

const StorageServices = () => {
  const whatsappNumber = "9779845047385";

  const features = [
    {
      icon: ShieldCheck,
      title: "Secure Storage",
      text: "Your belongings are kept in a secure storage environment with proper protection.",
      color: "#ff6b35"
    },
    {
      icon: Calendar,
      title: "Flexible Duration",
      text: "Storage options can be arranged according to your requirements.",
      color: "#25D366"
    },
    {
      icon: Key,
      title: "Easy Access",
      text: "Convenient storage management for your relocation needs.",
      color: "#ff6b35"
    },
    {
      icon: Warehouse,
      title: "Modern Facilities",
      text: "Well-maintained storage facilities with proper security systems.",
      color: "#25D366"
    },
    {
      icon: Box,
      title: "Safe Packing",
      text: "Your items are packed properly before being stored.",
      color: "#ff6b35"
    },
    {
      icon: Users,
      title: "Professional Care",
      text: "Our team handles your belongings with care during storage.",
      color: "#25D366"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Get Free Quote",
      text: "Share your storage requirements and get a quick estimate.",
      icon: Package
    },
    {
      step: "02",
      title: "Secure Packing",
      text: "Your items are packed properly for safe storage.",
      icon: Box
    },
    {
      step: "03",
      title: "Storage Placement",
      text: "Items are placed in secure storage facility.",
      icon: Warehouse
    },
    {
      step: "04",
      title: "Easy Retrieval",
      text: "We deliver your items whenever you need them.",
      icon: Key
    }
  ];

  const benefits = [
    "Secure storage facility",
    "24/7 security monitoring",
    "Climate controlled storage",
    "Flexible storage duration",
    "Easy access to items",
    "Professional handling"
  ];

  const storageTypes = [
    {
      title: "Household Storage",
      text: "Safe storage for household items, furniture and personal belongings."
    },
    {
      title: "Office Storage",
      text: "Secure storage for office equipment, documents and business assets."
    },
    {
      title: "Long-Term Storage",
      text: "Reliable long-term storage solutions for extended periods."
    },
    {
      title: "Short-Term Storage",
      text: "Flexible short-term storage during relocation or renovation."
    }
  ];

  return (
    <main className="storage-page">

      <section className="storage-hero" style={{ backgroundImage: `url("${images.heroBg}")` }}>
        <div className="hero-overlay"></div>
        <div className="hero-particles"></div>
        <div className="storage-container">
          <div className="storage-hero-content">
            <span className="storage-tag">
              <Warehouse size={16} />
              Secure Storage Solutions
            </span>
            <h1>
              Storage <span>Services</span>
            </h1>
            <p>
              Safe and convenient storage solutions for your
              household and business belongings.
            </p>
            <div className="storage-actions">
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

      <section className="storage-stats">
        <div className="storage-container">
          <div className="stats-grid">
            <div className="stat-card">
              <strong>10000+</strong>
              <span>Items Stored</span>
            </div>
            <div className="stat-card">
              <strong>10+</strong>
              <span>Years Experience</span>
            </div>
            <div className="stat-card">
              <strong>100%</strong>
              <span>Secure Storage</span>
            </div>
            <div className="stat-card">
              <strong>24/7</strong>
              <span>Access Available</span>
            </div>
          </div>
        </div>
      </section>

      <section className="storage-about">
        <div className="storage-container about-grid">
          <div className="about-image">
            <img src={images.team} alt="Pashupati Packers storage team" loading="lazy" />
            <div className="about-badge">
              <Award size={30} />
              <div>
                <strong>Trusted Storage</strong>
                <span>10000+ Items Stored</span>
              </div>
            </div>
          </div>
          <div className="about-content">
            <span className="section-label">ABOUT THIS SERVICE</span>
            <h2>
              Secure <strong>Storage Services</strong>
            </h2>
            <p>
              Pashupati Packers & Movers provides convenient
              storage solutions when you need temporary or
              long-term space for your belongings.
            </p>
            <p>
              Our secure storage facilities ensure your items
              are protected and accessible whenever you need them.
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

      <section className="storage-types">
        <div className="storage-container">
          <div className="section-heading">
            <span>STORAGE OPTIONS</span>
            <h2>
              Storage Solutions <strong>For Every Need</strong>
            </h2>
            <p>
              We provide flexible storage solutions for different types of items and requirements.
            </p>
          </div>
          <div className="types-grid">
            {storageTypes.map((type, index) => (
              <div className="type-card" key={index}>
                <div className="type-icon">
                  <Warehouse size={30} />
                </div>
                <h3>{type.title}</h3>
                <p>{type.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="storage-features-section">
        <div className="storage-container">
          <div className="section-heading">
            <span>WHY CHOOSE US</span>
            <h2>
              Storage Services <strong>Features</strong>
            </h2>
            <p>
              We provide comprehensive storage solutions with professional care and attention to detail.
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

      <section className="storage-gallery">
        <div className="storage-container">
          <div className="section-heading">
            <span>OUR WORK</span>
            <h2>
              Storage Services <strong>In Action</strong>
            </h2>
          </div>
          <div className="gallery-grid">
            <div className="gallery-item gallery-large" style={{ backgroundImage: `url("${images.storage1}")` }}>
              <div className="gallery-overlay">
                <div className="gallery-content">
                  <Warehouse size={40} />
                  <h3>Modern Storage</h3>
                  <p>Secure facility</p>
                </div>
              </div>
            </div>
            <div className="gallery-item" style={{ backgroundImage: `url("${images.security}")` }}>
              <div className="gallery-overlay">
                <div className="gallery-content">
                  <ShieldCheck size={35} />
                  <h3>Secure Security</h3>
                  <p>24/7 protection</p>
                </div>
              </div>
            </div>
            <div className="gallery-item" style={{ backgroundImage: `url("${images.warehouse}")` }}>
              <div className="gallery-overlay">
                <div className="gallery-content">
                  <Building2 size={35} />
                  <h3>Modern Facility</h3>
                  <p>Well-maintained</p>
                </div>
              </div>
            </div>
            <div className="gallery-item" style={{ backgroundImage: `url("${images.delivery}")` }}>
              <div className="gallery-overlay">
                <div className="gallery-content">
                  <Box size={35} />
                  <h3>Easy Retrieval</h3>
                  <p>Quick access</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="storage-process">
        <div className="storage-container">
          <div className="section-heading">
            <span>HOW IT WORKS</span>
            <h2>
              Simple Storage <strong>Process</strong>
            </h2>
            <p>Our step-by-step process ensures your items are stored safely and professionally.</p>
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

      <section className="storage-cta">
        <div className="storage-container cta-wrapper">
          <div className="cta-content">
            <div className="cta-icon">
              <Key size={35} />
            </div>
            <div>
              <span>READY TO STORE</span>
              <h2>
                Let Us Handle Your <strong>Storage Services</strong>
              </h2>
              <p>
                Get a free quote today and let our professional team
                store your belongings safely and securely.
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

export default StorageServices;