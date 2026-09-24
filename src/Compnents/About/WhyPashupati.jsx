import React from "react";
import {
  ShieldCheck,
  Users,
  Clock3,
  Truck,
  PackageCheck,
  Headphones,
  CheckCircle,
  ArrowRight,
  MapPin,
  Phone,
  Star
} from "lucide-react";
import { Link } from "react-router-dom";
import "./WhyPashupati.css";

// Images - Save these images in src/assets/images/ folder
// You can use any images you want, just rename them accordingly
const images = {
  heroBg: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80",
  truckFleet: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
  packingService: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=800&q=80",
  secureHandling: "https://images.unsplash.com/photo-1546993513-e1ae8b11b0b3?w=800&q=80",
  expertTeam: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=800&q=80",
  aboutImage: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=800&q=80",
  testimonial1: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
  testimonial2: "https://images.unsplash.com/photo-1494790108375-be9c2b0ee6bd?w=100&q=80",
  testimonial3: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80"
};

const WhyPashupati = () => {
  const reasons = [
    {
      icon: ShieldCheck,
      title: "Safe & Secure Moving",
      text: "Your valuable belongings are handled carefully throughout the complete relocation process."
    },
    {
      icon: Users,
      title: "Professional Team",
      text: "Our trained and experienced team works with proper planning and professional care."
    },
    {
      icon: Clock3,
      title: "On-Time Service",
      text: "We focus on timely pickup, transportation and delivery according to your schedule."
    },
    {
      icon: Truck,
      title: "Reliable Transportation",
      text: "We provide dependable transportation solutions for household and commercial relocation."
    },
    {
      icon: PackageCheck,
      title: "Quality Packing",
      text: "We use proper packing methods to help protect furniture, appliances and other belongings."
    },
    {
      icon: Headphones,
      title: "Customer Support",
      text: "Our support team is available to help you before, during and after your move."
    }
  ];

  const stats = [
    { number: "10+", label: "Years Experience" },
    { number: "5000+", label: "Happy Customers" },
    { number: "100+", label: "Cities Covered" },
    { number: "99%", label: "Satisfaction Rate" }
  ];

  return (
    <main className="why-pashupati-page">

      <section className="why-hero" style={{ backgroundImage: `url(${images.heroBg})` }}>
        <div className="hero-background-overlay"></div>
        <div className="why-container">
          <div className="why-hero-content">
            <span className="why-label">
              <Star size={16} />
              WHY PASHUPATI?
            </span>
            <h1>
              Why Choose
              <strong> Pashupati?</strong>
            </h1>
            <p>
              We make your relocation simple, safe and
              stress-free with professional packing,
              transportation and moving solutions.
            </p>
            <div className="hero-buttons">
              <Link to="/quote" className="why-hero-button">
                Get Free Quote
                <ArrowRight size={18} />
              </Link>
              <a href="https://wa.me/9779845047385" target="_blank" rel="noopener noreferrer" className="why-hero-button-secondary">
                <Phone size={18} />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="why-stats">
        <div className="why-container">
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

      <section className="why-intro">
        <div className="why-container">
          <div className="why-heading">
            <span>OUR COMMITMENT</span>
            <h2>
              Moving With
              <strong> Care & Trust</strong>
            </h2>
            <p>
              At Pashupati Packers & Movers, we understand
              that relocation involves more than moving
              goods from one place to another. We take
              responsibility for handling your belongings
              with care and providing a dependable moving
              experience.
            </p>
          </div>

          <div className="why-reasons-grid">
            {reasons.map((reason) => {
              const Icon = reason.icon;
              return (
                <article className="why-reason-card" key={reason.title}>
                  <div className="why-reason-icon">
                    <Icon size={30} />
                  </div>
                  <h3>{reason.title}</h3>
                  <p>{reason.text}</p>
                  <div className="why-card-bottom">
                    <CheckCircle size={18} />
                    <span>Trusted Service</span>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="why-image-showcase">
        <div className="why-container">
          <div className="section-header">
            <span>OUR GALLERY</span>
            <h2>See Our Work In Action</h2>
          </div>
          <div className="image-showcase-grid">
            <div className="showcase-item showcase-large" style={{ backgroundImage: `url(${images.truckFleet})` }}>
              <div className="showcase-overlay"></div>
              <div className="showcase-content">
                <Truck size={50} />
                <h3>Fleet of Vehicles</h3>
                <p>Modern trucks for safe transportation</p>
              </div>
            </div>
            <div className="showcase-item" style={{ backgroundImage: `url(${images.packingService})` }}>
              <div className="showcase-overlay"></div>
              <div className="showcase-content">
                <PackageCheck size={40} />
                <h3>Quality Packing</h3>
                <p>Professional packing materials</p>
              </div>
            </div>
            <div className="showcase-item" style={{ backgroundImage: `url(${images.secureHandling})` }}>
              <div className="showcase-overlay"></div>
              <div className="showcase-content">
                <ShieldCheck size={40} />
                <h3>Secure Handling</h3>
                <p>Careful loading & unloading</p>
              </div>
            </div>
            <div className="showcase-item" style={{ backgroundImage: `url(${images.expertTeam})` }}>
              <div className="showcase-overlay"></div>
              <div className="showcase-content">
                <Users size={40} />
                <h3>Expert Team</h3>
                <p>Trained moving professionals</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="why-process">
        <div className="why-container">
          <div className="why-process-box">
            <div className="why-process-content">
              <span>OUR PROMISE</span>
              <h2>
                A Better Moving
                <strong> Experience</strong>
              </h2>
              <p>
                From the first enquiry to final delivery,
                we focus on clear communication, careful
                handling and dependable service.
              </p>
              <div className="why-promise-list">
                <div>
                  <CheckCircle size={20} />
                  <span>Professional service</span>
                </div>
                <div>
                  <CheckCircle size={20} />
                  <span>Transparent communication</span>
                </div>
                <div>
                  <CheckCircle size={20} />
                  <span>Careful handling</span>
                </div>
                <div>
                  <CheckCircle size={20} />
                  <span>Reliable delivery</span>
                </div>
              </div>
              <Link to="/about" className="why-process-button">
                Learn More About Us
                <ArrowRight size={18} />
              </Link>
            </div>
            <div className="why-process-icon" style={{ backgroundImage: `url(${images.aboutImage})` }}>
              <div className="process-icon-overlay"></div>
              <ShieldCheck size={80} />
              <div className="process-badge">
                <span>10+</span>
                <small>Years</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="why-testimonials">
        <div className="why-container">
          <div className="testimonial-header">
            <span>TESTIMONIALS</span>
            <h2>What Our Customers Say</h2>
          </div>
          <div className="testimonial-grid">
            <div className="testimonial-card">
              <div className="testimonial-stars">
                <Star size={18} fill="#ff6b35" color="#ff6b35" />
                <Star size={18} fill="#ff6b35" color="#ff6b35" />
                <Star size={18} fill="#ff6b35" color="#ff6b35" />
                <Star size={18} fill="#ff6b35" color="#ff6b35" />
                <Star size={18} fill="#ff6b35" color="#ff6b35" />
              </div>
              <p>"Excellent service! They handled our household shifting with great care. Highly recommended."</p>
              <div className="testimonial-author">
                <img src={images.testimonial1} alt="Ram Sharma" />
                <div>
                  <strong>Ram Sharma</strong>
                  <span>Kathmandu</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-stars">
                <Star size={18} fill="#ff6b35" color="#ff6b35" />
                <Star size={18} fill="#ff6b35" color="#ff6b35" />
                <Star size={18} fill="#ff6b35" color="#ff6b35" />
                <Star size={18} fill="#ff6b35" color="#ff6b35" />
                <Star size={18} fill="#ff6b35" color="#ff6b35" />
              </div>
              <p>"Professional team and on-time delivery. Made our office relocation smooth and hassle-free."</p>
              <div className="testimonial-author">
                <img src={images.testimonial2} alt="Sita Adhikari" />
                <div>
                  <strong>Sita Adhikari</strong>
                  <span>Pokhara</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-stars">
                <Star size={18} fill="#ff6b35" color="#ff6b35" />
                <Star size={18} fill="#ff6b35" color="#ff6b35" />
                <Star size={18} fill="#ff6b35" color="#ff6b35" />
                <Star size={18} fill="#ff6b35" color="#ff6b35" />
                <Star size={18} fill="#ff6b35" color="#ff6b35" />
              </div>
              <p>"Best packers and movers in Nepal. Reasonable pricing and excellent customer support."</p>
              <div className="testimonial-author">
                <img src={images.testimonial3} alt="Kumar Basnet" />
                <div>
                  <strong>Kumar Basnet</strong>
                  <span>Butwal</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="why-cta">
        <div className="why-container">
          <div className="why-cta-content">
            <h2>
              Ready To Move With
              <strong> Pashupati?</strong>
            </h2>
            <p>
              Get in touch with our team for a reliable
              moving solution.
            </p>
          </div>
          <Link to="/quote" className="cta-button">
            Get Your Free Quote
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

    </main>
  );
};

export default WhyPashupati;