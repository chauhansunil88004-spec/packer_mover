import React from "react";
import {
  Package,
  Box,
  ShieldCheck,
  CheckCircle,
  ArrowRight,
  Phone,
  Clock3,
  Users,
  MapPin,
  Star,
  Award,
  Truck,
  ClipboardCheck,
  FileText
} from "lucide-react";
import { Link } from "react-router-dom";
import "./PackingServices.css";

const images = {
  heroBg: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=1200&q=80",
  packing1: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=800&q=80",
  packing2: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=800&q=80",
  materials: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=800&q=80",
  fragile: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=800&q=80",
  team: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=800&q=80",
  delivery: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
};

const PackingServices = () => {
  const whatsappNumber = "9779845047385";

  const features = [
    {
      icon: Package,
      title: "Quality Materials",
      text: "Strong and suitable packing materials for different types of belongings.",
      color: "#ff6b35"
    },
    {
      icon: Box,
      title: "Expert Packing",
      text: "Experienced professionals handle every item carefully.",
      color: "#25D366"
    },
    {
      icon: ShieldCheck,
      title: "Safe Protection",
      text: "Extra care for fragile and valuable items.",
      color: "#ff6b35"
    },
    {
      icon: ClipboardCheck,
      title: "Proper Labeling",
      text: "Clear labeling for easy identification and handling.",
      color: "#25D366"
    },
    {
      icon: FileText,
      title: "Inventory Management",
      text: "Detailed inventory of all packed items.",
      color: "#ff6b35"
    },
    {
      icon: Users,
      title: "Professional Team",
      text: "Trained professionals for quality packing service.",
      color: "#25D366"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Assessment",
      text: "We assess your items and packing requirements.",
      icon: FileText
    },
    {
      step: "02",
      title: "Material Selection",
      text: "We choose the right packing materials for your items.",
      icon: Package
    },
    {
      step: "03",
      title: "Professional Packing",
      text: "Our team carefully packs all your belongings.",
      icon: Box
    },
    {
      step: "04",
      title: "Loading & Transport",
      text: "Safe loading and transportation of packed items.",
      icon: Truck
    }
  ];

  const benefits = [
    "Quality packing materials",
    "Professional handling",
    "Safe protection",
    "Proper labeling",
    "Inventory management",
    "Experienced team"
  ];

  const packingTypes = [
    {
      title: "Household Packing",
      text: "Complete packing of household items including furniture, electronics and kitchenware."
    },
    {
      title: "Office Packing",
      text: "Professional packing of office equipment, computers and documents."
    },
    {
      title: "Fragile Items",
      text: "Specialized packing for glass, ceramics and other fragile items."
    },
    {
      title: "Vehicle Packing",
      text: "Safe packing and preparation of vehicles for transportation."
    }
  ];

  return (
    <main className="packing-page">

      <section className="packing-hero" style={{ backgroundImage: `url(${images.heroBg})` }}>
        <div className="hero-overlay"></div>
        <div className="hero-particles"></div>
        <div className="packing-container">
          <div className="packing-hero-content">
            <span className="packing-tag">
              <Package size={16} />
              Professional Packing
            </span>
            <h1>
              Packing <span>Services</span>
            </h1>
            <p>
              Quality packing solutions to keep your belongings
              protected throughout the relocation process.
            </p>
            <div className="packing-actions">
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

      <section className="packing-stats">
        <div className="packing-container">
          <div className="stats-grid">
            <div className="stat-card">
              <strong>10000+</strong>
              <span>Items Packed</span>
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

      <section className="packing-about">
        <div className="packing-container about-grid">
          <div className="about-image">
            <img src={images.team} alt="Pashupati Packers packing team" loading="lazy" />
            <div className="about-badge">
              <Award size={30} />
              <div>
                <strong>Trusted Service</strong>
                <span>10000+ Items Packed</span>
              </div>
            </div>
          </div>
          <div className="about-content">
            <span className="section-label">ABOUT THIS SERVICE</span>
            <h2>
              Professional <strong>Packing Services</strong>
            </h2>
            <p>
              Our professional team uses suitable packing
              materials and techniques to protect household,
              office and valuable items during transportation.
            </p>
            <p>
              We provide complete packing solutions with quality
              materials and expert handling for safe relocation.
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

      <section className="packing-types">
        <div className="packing-container">
          <div className="section-heading">
            <span>PACKING OPTIONS</span>
            <h2>
              Packing Solutions <strong>For Every Need</strong>
            </h2>
            <p>
              We provide specialized packing services for different types of items and requirements.
            </p>
          </div>
          <div className="types-grid">
            {packingTypes.map((type, index) => (
              <div className="type-card" key={index}>
                <div className="type-icon">
                  <Package size={30} />
                </div>
                <h3>{type.title}</h3>
                <p>{type.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="packing-features-section">
        <div className="packing-container">
          <div className="section-heading">
            <span>WHY CHOOSE US</span>
            <h2>
              Packing Services <strong>Features</strong>
            </h2>
            <p>
              We provide comprehensive packing solutions with professional care and attention to detail.
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

      <section className="packing-gallery">
        <div className="packing-container">
          <div className="section-heading">
            <span>OUR WORK</span>
            <h2>
              Packing Services <strong>In Action</strong>
            </h2>
          </div>
          <div className="gallery-grid">
            <div className="gallery-item gallery-large" style={{ backgroundImage: `url(${images.packing1})` }}>
              <div className="gallery-overlay">
                <div className="gallery-content">
                  <Package size={40} />
                  <h3>Professional Packing</h3>
                  <p>Quality materials</p>
                </div>
              </div>
            </div>
            <div className="gallery-item" style={{ backgroundImage: `url(${images.materials})` }}>
              <div className="gallery-overlay">
                <div className="gallery-content">
                  <Box size={35} />
                  <h3>Quality Materials</h3>
                  <p>Strong & durable</p>
                </div>
              </div>
            </div>
            <div className="gallery-item" style={{ backgroundImage: `url(${images.fragile})` }}>
              <div className="gallery-overlay">
                <div className="gallery-content">
                  <ShieldCheck size={35} />
                  <h3>Fragile Care</h3>
                  <p>Extra protection</p>
                </div>
              </div>
            </div>
            <div className="gallery-item" style={{ backgroundImage: `url(${images.delivery})` }}>
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

      <section className="packing-process">
        <div className="packing-container">
          <div className="section-heading">
            <span>HOW IT WORKS</span>
            <h2>
              Simple Packing <strong>Process</strong>
            </h2>
            <p>Our step-by-step process ensures your items are packed safely and professionally.</p>
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

      <section className="packing-cta">
        <div className="packing-container cta-wrapper">
          <div className="cta-content">
            <div className="cta-icon">
              <Box size={35} />
            </div>
            <div>
              <span>READY TO PACK</span>
              <h2>
                Let Us Handle Your <strong>Packing Services</strong>
              </h2>
              <p>
                Get a free quote today and let our professional team
                pack your belongings with quality materials and care.
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

export default PackingServices;