import React from "react";
import {
  Target,
  ShieldCheck,
  Users,
  Clock3,
  CheckCircle,
  ArrowRight,
  Phone,
  Star,
  Truck,
  Package,
  MapPin
} from "lucide-react";
import { Link } from "react-router-dom";
import "./OurMission.css";

const images = {
  heroBg: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80",
  mission: "https://images.unsplash.com/photo-1546993513-e1ae8b11b0b3?w=800&q=80",
  values: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80"
};

const OurMission = () => {
  const whatsappNumber = "9779845047385";

  const missionPoints = [
    {
      icon: CheckCircle,
      text: "Customer-first service"
    },
    {
      icon: ShieldCheck,
      text: "Safe handling of belongings"
    },
    {
      icon: Users,
      text: "Professional team"
    },
    {
      icon: Clock3,
      text: "Timely delivery"
    }
  ];

  const values = [
    {
      icon: ShieldCheck,
      title: "Safety First",
      text: "We prioritize the safety and protection of your belongings throughout the moving process."
    },
    {
      icon: Users,
      title: "Trust & Integrity",
      text: "We build long-term relationships through dependable service and transparent communication."
    },
    {
      icon: Clock3,
      title: "Reliability",
      text: "We work to deliver consistent and timely relocation solutions for every customer."
    },
    {
      icon: Truck,
      title: "Professional Service",
      text: "Our trained team provides professional moving services with attention to detail."
    }
  ];

  const stats = [
    { number: "10+", label: "Years Experience" },
    { number: "5000+", label: "Happy Customers" },
    { number: "100+", label: "Cities Covered" },
    { number: "99%", label: "Satisfaction Rate" }
  ];

  return (
    <main className="mission-page">

      <section className="mission-hero" style={{ backgroundImage: `url(${images.heroBg})` }}>
        <div className="hero-overlay"></div>
        <div className="hero-particles"></div>
        <div className="mission-container">
          <div className="mission-hero-content">
            <span className="mission-tag">
              <Star size={16} />
              OUR MISSION
            </span>
            <h1>
              Moving With
              <strong> Purpose & Care</strong>
            </h1>
            <p>
              Our mission is to provide safe, reliable
              and professional relocation services while
              putting our customers first.
            </p>
            <div className="mission-actions">
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

      <section className="mission-stats">
        <div className="mission-container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div className="stat-card" key={index}>
                <strong>{stat.number}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mission-main">
        <div className="mission-container mission-grid">
          <div className="mission-symbol">
            <div className="symbol-icon">
              <Target size={80} />
            </div>
            <span>OUR MISSION</span>
            <div className="symbol-badge">
              <Package size={24} />
              <span>Pashupati</span>
            </div>
          </div>
          <div className="mission-content">
            <span className="mission-label">WHAT DRIVES US</span>
            <h2>
              Making Every Move
              <strong> Simple & Secure</strong>
            </h2>
            <p>
              At Pashupati Packers & Movers, our mission
              is to make relocation a smooth and stress-free
              experience for every customer.
            </p>
            <p>
              We focus on professional packing, careful
              handling, reliable transportation and timely
              delivery to ensure that every move is completed
              with care and responsibility.
            </p>
            <div className="mission-points">
              {missionPoints.map(({ icon: Icon, text }) => (
                <div key={text}>
                  <Icon size={21} />
                  <span>{text}</span>
                </div>
              ))}
            </div>
            <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="btn-whatsapp-small">
              <Phone size={16} />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="mission-values">
        <div className="mission-container">
          <div className="mission-heading">
            <span>OUR VALUES</span>
            <h2>
              What We Stand
              <strong> For</strong>
            </h2>
            <p>
              Our core values guide us in providing the best moving experience for our customers.
            </p>
          </div>
          <div className="mission-value-grid">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div className="mission-value-card" key={index}>
                  <div className="value-icon">
                    <Icon size={30} />
                  </div>
                  <h3>{value.title}</h3>
                  <p>{value.text}</p>
                  <div className="value-check">
                    <CheckCircle size={18} />
                    <span>Guiding Principle</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mission-image-showcase">
        <div className="mission-container">
          <div className="showcase-grid">
            <div className="showcase-item showcase-large" style={{ backgroundImage: `url(${images.mission})` }}>
              <div className="showcase-overlay"></div>
              <div className="showcase-content">
                <ShieldCheck size={50} />
                <h3>Safe & Secure Moving</h3>
                <p>Your belongings are in safe hands</p>
              </div>
            </div>
            <div className="showcase-item" style={{ backgroundImage: `url(${images.values})` }}>
              <div className="showcase-overlay"></div>
              <div className="showcase-content">
                <Users size={40} />
                <h3>Professional Team</h3>
                <p>Trained moving experts</p>
              </div>
            </div>
            <div className="showcase-item" style={{ backgroundImage: `url(${images.heroBg})` }}>
              <div className="showcase-overlay"></div>
              <div className="showcase-content">
                <Truck size={40} />
                <h3>Reliable Transport</h3>
                <p>Safe & timely delivery</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mission-cta">
        <div className="mission-container">
          <div className="cta-content-wrapper">
            <div className="cta-icon-wrapper">
              <MapPin size={40} />
            </div>
            <div>
              <span>READY TO MOVE</span>
              <h2>
                Your Move,
                <strong> Our Responsibility.</strong>
              </h2>
              <p>
                Experience a professional moving service
                built around care and trust.
              </p>
            </div>
          </div>
          <div className="cta-actions-wrapper">
            <Link to="/contact" className="btn btn-primary">
              Contact Us
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

export default OurMission;