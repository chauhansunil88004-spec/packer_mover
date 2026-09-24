import React from "react";
import {
  ArrowRight,
  Award,
  CheckCircle,
  Clock3,
  Eye,
  MapPin,
  ShieldCheck,
  Target,
  Truck,
  Users,
  Phone,
  Star
} from "lucide-react";
import { Link } from "react-router-dom";
import "./About.css";

// All images with proper Pashupati Packers & Movers theme
const images = {
  heroBg: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80",
  company: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
  mission: "https://images.unsplash.com/photo-1546993513-e1ae8b11b0b3?w=800&q=80",
  vision: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=800&q=80",
  household: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=600&q=80",
  office: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
  vehicle: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
  packing: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=600&q=80",
  loading: "https://images.unsplash.com/photo-1546993513-e1ae8b11b0b3?w=600&q=80",
  storage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80"
};

const reasons = [
  {
    icon: ShieldCheck,
    title: "Safe & Secure Moving",
    text: "We carefully handle your valuable belongings from packing to final delivery with utmost care.",
  },
  {
    icon: Users,
    title: "Professional Team",
    text: "Our trained and experienced professionals provide reliable and organized moving services.",
  },
  {
    icon: Clock3,
    title: "On-Time Service",
    text: "We strictly adhere to schedules and focus on timely pickup, transportation and delivery.",
  },
  {
    icon: Truck,
    title: "Reliable Transport",
    text: "Safe and dependable transportation solutions for both residential and commercial moves.",
  },
];

const services = [
  {
    title: "Household Shifting",
    image: images.household,
    description: "Safe relocation for your home"
  },
  {
    title: "Office Relocation",
    image: images.office,
    description: "Minimal downtime office moves"
  },
  {
    title: "Vehicle Transportation",
    image: images.vehicle,
    description: "Secure car & bike transport"
  },
  {
    title: "Packing Services",
    image: images.packing,
    description: "Professional packing solutions"
  },
  {
    title: "Loading & Unloading",
    image: images.loading,
    description: "Careful handling of goods"
  },
  {
    title: "Storage Services",
    image: images.storage,
    description: "Safe short & long term storage"
  },
];

const companyPoints = [
  "Professional packing and moving",
  "Safe handling of belongings",
  "Reliable transportation",
  "Customer-focused service",
];

const missionPoints = [
  {
    icon: CheckCircle,
    text: "Customer-focused moving solutions",
  },
  {
    icon: ShieldCheck,
    text: "Safe handling of valuable belongings",
  },
  {
    icon: Users,
    text: "Professional and trained team",
  },
];

const visionPoints = [
  {
    icon: Award,
    text: "Service Excellence",
  },
  {
    icon: Users,
    text: "Customer Trust",
  },
  {
    icon: Eye,
    text: "Better Moving Experience",
  },
];

const testimonials = [
  {
    name: "Ram Sharma",
    location: "Kathmandu",
    text: "Excellent service! They handled our household shifting with great care. Highly recommended.",
    rating: 5
  },
  {
    name: "Sita Adhikari",
    location: "Pokhara",
    text: "Professional team and on-time delivery. Made our office relocation smooth and hassle-free.",
    rating: 5
  },
  {
    name: "Kumar Basnet",
    location: "Butwal",
    text: "Best packers and movers in Nepal. Reasonable pricing and excellent customer support.",
    rating: 5
  }
];

const About = () => {
  const whatsappNumber = "9779845047385";

  return (
    <main className="about-page">

      <section className="about-hero" style={{ backgroundImage: `url(${images.heroBg})` }}>
        <div className="hero-overlay"></div>
        <div className="hero-particles"></div>
        <div className="about-container">
          <div className="about-hero-content">
            <span className="about-tag">
              <Star size={16} />
              ABOUT PASHUPATI
            </span>
            <h1>
              About{" "}
              <strong>Pashupati Packers & Movers</strong>
            </h1>
            <p>
              Professional packing and moving solutions designed
              to make your relocation safe, simple and stress-free.
            </p>
            <div className="about-actions">
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

      <section className="about-stats">
        <div className="about-container">
          <div className="stats-grid">
            <div className="stat-card">
              <strong>10+</strong>
              <span>Years Experience</span>
            </div>
            <div className="stat-card">
              <strong>5000+</strong>
              <span>Happy Customers</span>
            </div>
            <div className="stat-card">
              <strong>100+</strong>
              <span>Cities Covered</span>
            </div>
            <div className="stat-card">
              <strong>99%</strong>
              <span>Satisfaction Rate</span>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="about-container company-grid">
          <div className="image-card">
            <img src={images.company} alt="Pashupati Packers and Movers professional team" loading="lazy" />
            <div className="image-badge">
              <div className="badge-icon">
                <Truck size={22} />
              </div>
              <div>
                <strong>Trusted Moving</strong>
                <span>Professional Service</span>
              </div>
            </div>
          </div>
          <div className="content-block">
            <span className="section-label">WHO WE ARE</span>
            <h2 className="section-title">
              Your Trusted Partner
              <strong> For Every Move</strong>
            </h2>
            <p>
              Pashupati Packers & Movers is a professional
              relocation service provider focused on making
              moving easier and more convenient for individuals,
              families and businesses across Nepal.
            </p>
            <p>
              From careful packing to safe transportation and
              final delivery, our team works to provide a smooth
              and dependable relocation experience.
            </p>
            <div className="check-list">
              {companyPoints.map((item) => (
                <div key={item}>
                  <CheckCircle size={19} />
                  <span>{item}</span>
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

      <section id="why-pashupati" className="about-section section-light">
        <div className="about-container">
          <div className="section-heading">
            <span className="section-label">WHY PASHUPATI?</span>
            <h2 className="section-title">
              Why Choose
              <strong> Pashupati?</strong>
            </h2>
            <p>
              We understand that moving is more than transporting goods. It is about moving your valuable belongings with care and trust.
            </p>
          </div>
          <div className="reason-grid">
            {reasons.map(({ icon: Icon, title, text }) => (
              <article className="reason-card" key={title}>
                <div className="reason-icon">
                  <Icon size={28} />
                </div>
                <CheckCircle className="reason-check" size={18} />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="about-container">
          <div className="section-heading">
            <span className="section-label">OUR SERVICES</span>
            <h2 className="section-title">
              Complete Moving
              <strong> Solutions</strong>
            </h2>
            <p>
              Reliable relocation services for homes, offices and different transportation requirements.
            </p>
          </div>
          <div className="services-grid">
            {services.map((service) => (
              <div className="service-card" key={service.title}>
                <div className="service-image">
                  <img src={service.image} alt={service.title} loading="lazy" />
                  <div className="service-overlay">
                    <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="service-whatsapp">
                      <Phone size={20} />
                    </a>
                  </div>
                </div>
                <div className="service-content">
                  <div className="service-title">
                    <CheckCircle size={20} />
                    <span>{service.title}</span>
                  </div>
                  <p className="service-desc">{service.description}</p>
                  <ArrowRight size={17} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section section-light">
        <div className="about-container split-grid">
          <div className="image-card">
            <img src={images.mission} alt="Pashupati Packers and Movers mission" loading="lazy" />
            <div className="image-badge">
              <div className="badge-icon">
                <Target size={42} />
              </div>
              <div>
                <strong>Our Mission</strong>
                <span>Safe & Simple Moving</span>
              </div>
            </div>
          </div>
          <div className="content-block">
            <span className="section-label">OUR MISSION</span>
            <h2 className="section-title">
              Making Every Move
              <strong> Safe & Simple</strong>
            </h2>
            <p>
              Our mission is to make relocation a smooth and
              stress-free experience by providing professional
              packing, careful handling, reliable transportation
              and timely delivery.
            </p>
            <div className="icon-list">
              {missionPoints.map(({ icon: Icon, text }) => (
                <div key={text}>
                  <Icon size={20} />
                  <span>{text}</span>
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

      <section className="about-section">
        <div className="about-container split-grid">
          <div className="content-block">
            <span className="section-label">OUR VISION</span>
            <h2 className="section-title">
              Building Trust
              <strong> With Every Move</strong>
            </h2>
            <p>
              Our vision is to become a trusted name in the
              packing and moving industry through quality,
              reliability, technology and customer satisfaction.
            </p>
            <div className="icon-list">
              {visionPoints.map(({ icon: Icon, text }) => (
                <div key={text}>
                  <Icon size={20} />
                  <span>{text}</span>
                </div>
              ))}
            </div>
            <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="btn-whatsapp-small">
              <Phone size={16} />
              Contact Us
            </a>
          </div>
          <div className="image-card">
            <img src={images.vision} alt="Pashupati Packers and Movers vision" loading="lazy" />
            <div className="image-badge">
              <div className="badge-icon">
                <Eye size={42} />
              </div>
              <div>
                <strong>Our Vision</strong>
                <span>Building Customer Trust</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="about-container">
          <div className="section-heading">
            <span className="section-label">TESTIMONIALS</span>
            <h2 className="section-title">
              What Our <strong>Customers Say</strong>
            </h2>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div className="testimonial-card" key={index}>
                <div className="testimonial-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="#ff6b35" color="#ff6b35" />
                  ))}
                </div>
                <p>"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <div className="author-avatar">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <strong>{testimonial.name}</strong>
                    <span>{testimonial.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="about-container cta-inner">
          <div className="cta-content">
            <div className="cta-icon">
              <MapPin size={32} />
            </div>
            <div>
              <span>RELOCATION MADE EASY</span>
              <h2>
                Ready To Move{" "}
                <strong>With Pashupati?</strong>
              </h2>
              <p>
                Tell us about your moving requirements and
                our team will help you with the right
                relocation solution.
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

export default About;