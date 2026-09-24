import React from "react";
import {
  Eye,
  Award,
  Users,
  TrendingUp,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import "./OurVision.css";

const OurVision = () => {
  return (
    <main className="vision-page">

      <section className="vision-hero">
        <div className="vision-container">
          <div className="vision-hero-content">

            <span>OUR VISION</span>

            <h1>
              Building Trust
              <strong> With Every Move</strong>
            </h1>

            <p>
              Our vision is to create a reliable,
              customer-focused and trusted moving
              experience for every customer.
            </p>

            <Link to="/quote">
              Get Free Quote
              <ArrowRight size={18} />
            </Link>

          </div>
        </div>
      </section>

      <section className="vision-main">
        <div className="vision-container vision-grid">

          <div className="vision-content">

            <span>OUR FUTURE</span>

            <h2>
              A Trusted Name In
              <strong> Moving Services</strong>
            </h2>

            <p>
              Our vision is to establish Pashupati
              Packers & Movers as a trusted and dependable
              name in the relocation industry.
            </p>

            <p>
              We aim to continuously improve our services,
              adopt better practices and create a moving
              experience that customers can confidently
              recommend to others.
            </p>

            <div className="vision-points">

              <div>
                <CheckCircle size={21} />
                <span>Excellent customer experience</span>
              </div>

              <div>
                <Award size={21} />
                <span>High service standards</span>
              </div>

              <div>
                <TrendingUp size={21} />
                <span>Continuous improvement</span>
              </div>

              <div>
                <Users size={21} />
                <span>Long-term customer relationships</span>
              </div>

            </div>

          </div>

          <div className="vision-symbol">
            <Eye size={85} />
            <span>OUR VISION</span>
          </div>

        </div>
      </section>

      <section className="vision-pillars">
        <div className="vision-container">

          <div className="vision-heading">

            <span>OUR FUTURE GOALS</span>

            <h2>
              What We Want
              <strong> To Achieve</strong>
            </h2>

          </div>

          <div className="vision-pillar-grid">

            <div className="vision-card">
              <Award size={32} />
              <h3>Service Excellence</h3>
              <p>
                Delivering professional and dependable
                relocation services.
              </p>
            </div>

            <div className="vision-card">
              <Users size={32} />
              <h3>Customer Trust</h3>
              <p>
                Building lasting relationships through
                honest and reliable service.
              </p>
            </div>

            <div className="vision-card">
              <TrendingUp size={32} />
              <h3>Continuous Growth</h3>
              <p>
                Improving our processes and services
                with changing customer needs.
              </p>
            </div>

          </div>

        </div>
      </section>

      <section className="vision-future">
        <div className="vision-container">

          <div className="vision-future-box">

            <div>
              <span>LOOKING AHEAD</span>

              <h2>
                Moving Forward
                <strong> Together</strong>
              </h2>

              <p>
                We believe the future of moving is built
                on trust, professionalism and customer
                satisfaction.
              </p>
            </div>

            <Link to="/contact">
              Contact Us
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
};

export default OurVision;