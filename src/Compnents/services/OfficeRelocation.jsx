import React from "react";
import {
  Building2,
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
  Computer,
  FileText,
  Settings,
  Briefcase
} from "lucide-react";
import { Link } from "react-router-dom";
import "./OfficeRelocation.css";

const images = {
  heroBg: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
  office1: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
  office2: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80",
  packing: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=800&q=80",
  equipment: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  team: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=800&q=80",
  delivery: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80",
  setup: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80"
};

const OfficeRelocation = () => {
  const whatsappNumber = "9779845047385";

  const features = [
    {
      icon: Package,
      title: "Office Packing",
      text: "Secure packing for furniture, electronics and office equipment with quality materials.",
      color: "#ff6b35"
    },
    {
      icon: Computer,
      title: "IT Equipment Handling",
      text: "Specialized handling and transportation of computers, servers and IT infrastructure.",
      color: "#25D366"
    },
    {
      icon: ShieldCheck,
      title: "Safe Transportation",
      text: "Reliable transportation with proper securing of all office belongings.",
      color: "#ff6b35"
    },
    {
      icon: Settings,
      title: "Setup & Installation",
      text: "Professional setup and arrangement of office furniture and equipment at new location.",
      color: "#25D366"
    },
    {
      icon: Clock3,
      title: "Minimal Downtime",
      text: "Efficient relocation planning to reduce business downtime and disruptions.",
      color: "#ff6b35"
    },
    {
      icon: Users,
      title: "Professional Team",
      text: "Experienced team trained in commercial relocation and equipment handling.",
      color: "#25D366"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Assessment & Planning",
      text: "We assess your office needs and create a detailed moving plan.",
      icon: ClipboardCheck
    },
    {
      step: "02",
      title: "Professional Packing",
      text: "All office items are packed securely with proper labeling.",
      icon: Package
    },
    {
      step: "03",
      title: "Safe Transportation",
      text: "Your office equipment is transported safely to new location.",
      icon: Truck
    },
    {
      step: "04",
      title: "Setup & Handover",
      text: "We set up your new office and handover everything ready.",
      icon: Building2
    }
  ];

  const benefits = [
    "Minimal business downtime",
    "Professional packing materials",
    "Experienced relocation team",
    "Equipment insurance coverage",
    "Timely delivery",
    "Complete setup assistance"
  ];

  return (
    <main className="office-page">

      <section className="office-hero" style={{ backgroundImage: `url(${images.heroBg})` }}>
        <div className="hero-overlay"></div>
        <div className="hero-particles"></div>
        <div className="office-container">
          <div className="office-hero-content">
            <span className="office-tag">
              <Building2 size={16} />
              Professional Relocation Service
            </span>
            <h1>
              Office <span>Relocation</span>
            </h1>
            <p>
              Reliable office shifting solutions designed to
              minimize downtime and protect your business assets.
            </p>
            <div className="office-actions">
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

      <section className="office-stats">
        <div className="office-container">
          <div className="stats-grid">
            <div className="stat-card">
              <strong>500+</strong>
              <span>Offices Relocated</span>
            </div>
            <div className="stat-card">
              <strong>10+</strong>
              <span>Years Experience</span>
            </div>
            <div className="stat-card">
              <strong>99%</strong>
              <span>On-Time Delivery</span>
            </div>
            <div className="stat-card">
              <strong>24/7</strong>
              <span>Support Available</span>
            </div>
          </div>
        </div>
      </section>

      <section className="office-about">
        <div className="office-container about-grid">
          <div className="about-image">
            <img src={images.team} alt="Pashupati Packers office relocation team" loading="lazy" />
            <div className="about-badge">
              <Award size={30} />
              <div>
                <strong>Trusted Partner</strong>
                <span>For 500+ Businesses</span>
              </div>
            </div>
          </div>
          <div className="about-content">
            <span className="section-label">ABOUT THIS SERVICE</span>
            <h2>
              Complete <strong>Office Relocation</strong>
            </h2>
            <p>
              We provide end-to-end office relocation services
              for businesses of all sizes. Our team carefully
              handles furniture, computers, documents and other
              office equipment.
            </p>
            <p>
              From planning and packing to transportation and
              setup, we make your office move simple and
              organized with minimal disruption to your business.
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

      <section className="office-features-section">
        <div className="office-container">
          <div className="section-heading">
            <span>WHY CHOOSE US</span>
            <h2>
              Office Relocation <strong>Features</strong>
            </h2>
            <p>
              We provide comprehensive office relocation solutions with professional care and attention to detail.
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

      <section className="office-gallery">
        <div className="office-container">
          <div className="section-heading">
            <span>OUR WORK</span>
            <h2>
              Office Relocation <strong>In Action</strong>
            </h2>
          </div>
          <div className="gallery-grid">
            <div className="gallery-item gallery-large" style={{ backgroundImage: `url(${images.packing})` }}>
              <div className="gallery-overlay">
                <div className="gallery-content">
                  <Package size={40} />
                  <h3>Professional Packing</h3>
                  <p>Secure office packing</p>
                </div>
              </div>
            </div>
            <div className="gallery-item" style={{ backgroundImage: `url(${images.equipment})` }}>
              <div className="gallery-overlay">
                <div className="gallery-content">
                  <Computer size={35} />
                  <h3>IT Equipment</h3>
                  <p>Safe handling</p>
                </div>
              </div>
            </div>
            <div className="gallery-item" style={{ backgroundImage: `url(${images.setup})` }}>
              <div className="gallery-overlay">
                <div className="gallery-content">
                  <Settings size={35} />
                  <h3>Office Setup</h3>
                  <p>Professional arrangement</p>
                </div>
              </div>
            </div>
            <div className="gallery-item" style={{ backgroundImage: `url(${images.delivery})` }}>
              <div className="gallery-overlay">
                <div className="gallery-content">
                  <Building2 size={35} />
                  <h3>Final Delivery</h3>
                  <p>Ready for business</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="office-process">
        <div className="office-container">
          <div className="section-heading">
            <span>HOW IT WORKS</span>
            <h2>
              Simple Office <strong>Relocation Process</strong>
            </h2>
            <p>Our step-by-step process ensures your office move is smooth and efficient.</p>
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

      <section className="office-cta">
        <div className="office-container cta-wrapper">
          <div className="cta-content">
            <div className="cta-icon">
              <Briefcase size={35} />
            </div>
            <div>
              <span>READY TO MOVE</span>
              <h2>
                Let Us Handle Your <strong>Office Relocation</strong>
              </h2>
              <p>
                Get a free quote today and let our professional team
                handle your complete office relocation with minimal downtime.
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

export default OfficeRelocation;