import React from "react";
import {
  Car,
  Bike,
  Truck,
  ShieldCheck,
  CheckCircle,
  ArrowRight,
  Phone,
  Clock3,
  Users,
  MapPin,
  Star,
  Award,
  Navigation,
  Package,
  AlertCircle
} from "lucide-react";
import { Link } from "react-router-dom";
import "./VehicleTransportation.css";

const images = {
  heroBg: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80",
  car1: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80",
  car2: "https://images.unsplash.com/photo-1550355291-bbee04a92027?w=800&q=80",
  bike1: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800&q=80",
  bike2: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&q=80",
  transport: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
  team: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=800&q=80",
  delivery: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80"
};

const VehicleTransportation = () => {
  const whatsappNumber = "9779845047385";

  const features = [
    {
      icon: Car,
      title: "Car Transportation",
      text: "Safe and secure transportation of cars between locations with professional handling.",
      color: "#ff6b35"
    },
    {
      icon: Bike,
      title: "Bike Transportation",
      text: "Professional packing and transportation for bikes with proper securing.",
      color: "#25D366"
    },
    {
      icon: ShieldCheck,
      title: "Secure Handling",
      text: "Careful loading, transportation and unloading of all vehicles.",
      color: "#ff6b35"
    },
    {
      icon: Navigation,
      title: "Doorstep Delivery",
      text: "Pickup from your location and delivery to your desired destination.",
      color: "#25D366"
    },
    {
      icon: Clock3,
      title: "Timely Service",
      text: "Reliable and on-time vehicle transportation services.",
      color: "#ff6b35"
    },
    {
      icon: Users,
      title: "Expert Drivers",
      text: "Experienced professionals for safe vehicle handling and transportation.",
      color: "#25D366"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Get Free Quote",
      text: "Share your vehicle details and get a quick estimate.",
      icon: Package
    },
    {
      step: "02",
      title: "Vehicle Inspection",
      text: "We inspect and document your vehicle condition.",
      icon: AlertCircle
    },
    {
      step: "03",
      title: "Safe Loading & Transport",
      text: "Your vehicle is loaded and transported securely.",
      icon: Truck
    },
    {
      step: "04",
      title: "Delivery & Handover",
      text: "We deliver and handover your vehicle at the destination.",
      icon: Navigation
    }
  ];

  const benefits = [
    "Professional vehicle handling",
    "Secure loading and unloading",
    "Insurance coverage",
    "Real-time tracking",
    "Doorstep pickup & delivery",
    "Experienced team"
  ];

  return (
    <main className="vehicle-page">

      <section className="vehicle-hero" style={{ backgroundImage: `url(${images.heroBg})` }}>
        <div className="hero-overlay"></div>
        <div className="hero-particles"></div>
        <div className="vehicle-container">
          <div className="vehicle-hero-content">
            <span className="vehicle-tag">
              <Car size={16} />
              Safe Vehicle Moving
            </span>
            <h1>
              Vehicle <span>Transportation</span>
            </h1>
            <p>
              Professional and secure transportation services for
              cars, bikes and other personal vehicles.
            </p>
            <div className="vehicle-actions">
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

      <section className="vehicle-stats">
        <div className="vehicle-container">
          <div className="stats-grid">
            <div className="stat-card">
              <strong>2000+</strong>
              <span>Vehicles Transported</span>
            </div>
            <div className="stat-card">
              <strong>10+</strong>
              <span>Years Experience</span>
            </div>
            <div className="stat-card">
              <strong>100%</strong>
              <span>Safe Delivery</span>
            </div>
            <div className="stat-card">
              <strong>24/7</strong>
              <span>Support Available</span>
            </div>
          </div>
        </div>
      </section>

      <section className="vehicle-about">
        <div className="vehicle-container about-grid">
          <div className="about-image">
            <img src={images.team} alt="Pashupati Packers vehicle transportation team" loading="lazy" />
            <div className="about-badge">
              <Award size={30} />
              <div>
                <strong>Trusted Service</strong>
                <span>2000+ Vehicles</span>
              </div>
            </div>
          </div>
          <div className="about-content">
            <span className="section-label">ABOUT THIS SERVICE</span>
            <h2>
              Safe Vehicle <strong>Transportation</strong>
            </h2>
            <p>
              Pashupati Packers & Movers provides reliable
              vehicle transportation solutions with careful
              loading, secure transportation and safe unloading.
            </p>
            <p>
              We handle cars, bikes and other personal vehicles
              with professional care and ensure safe delivery
              to your desired location.
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

      <section className="vehicle-features-section">
        <div className="vehicle-container">
          <div className="section-heading">
            <span>WHY CHOOSE US</span>
            <h2>
              Vehicle Transportation <strong>Features</strong>
            </h2>
            <p>
              We provide comprehensive vehicle transportation solutions with professional care and attention to detail.
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

      <section className="vehicle-gallery">
        <div className="vehicle-container">
          <div className="section-heading">
            <span>OUR WORK</span>
            <h2>
              Vehicle Transportation <strong>In Action</strong>
            </h2>
          </div>
          <div className="gallery-grid">
            <div className="gallery-item gallery-large" style={{ backgroundImage: `url(${images.car1})` }}>
              <div className="gallery-overlay">
                <div className="gallery-content">
                  <Car size={40} />
                  <h3>Car Transportation</h3>
                  <p>Safe car transport</p>
                </div>
              </div>
            </div>
            <div className="gallery-item" style={{ backgroundImage: `url(${images.bike1})` }}>
              <div className="gallery-overlay">
                <div className="gallery-content">
                  <Bike size={35} />
                  <h3>Bike Transport</h3>
                  <p>Professional handling</p>
                </div>
              </div>
            </div>
            <div className="gallery-item" style={{ backgroundImage: `url(${images.transport})` }}>
              <div className="gallery-overlay">
                <div className="gallery-content">
                  <Truck size={35} />
                  <h3>Secure Loading</h3>
                  <p>Careful loading</p>
                </div>
              </div>
            </div>
            <div className="gallery-item" style={{ backgroundImage: `url(${images.delivery})` }}>
              <div className="gallery-overlay">
                <div className="gallery-content">
                  <Navigation size={35} />
                  <h3>Doorstep Delivery</h3>
                  <p>On-time delivery</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="vehicle-process">
        <div className="vehicle-container">
          <div className="section-heading">
            <span>HOW IT WORKS</span>
            <h2>
              Simple Vehicle <strong>Transport Process</strong>
            </h2>
            <p>Our step-by-step process ensures your vehicle is transported safely and on time.</p>
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

      <section className="vehicle-cta">
        <div className="vehicle-container cta-wrapper">
          <div className="cta-content">
            <div className="cta-icon">
              <Car size={35} />
            </div>
            <div>
              <span>READY TO TRANSPORT</span>
              <h2>
                Let Us Handle Your <strong>Vehicle Transportation</strong>
              </h2>
              <p>
                Get a free quote today and let our professional team
                transport your vehicle safely to any location.
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

export default VehicleTransportation;