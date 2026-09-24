import React from "react";
import { Link } from "react-router-dom";
import "./Blogs.css";

const blogPosts = [
  {
    id: 1,
    category: "Moving Tips",
    date: "August 18, 2026",
    title: "10 Essential Tips for a Smooth and Stress-Free Home Move",
    description:
      "Planning a house move can feel overwhelming. Learn practical tips to organize, pack, transport, and settle into your new home with less stress.",
    image:
      "https://images.unsplash.com/photo-1600518464441-9154a4dea21b?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 2,
    category: "Packing",
    date: "August 12, 2026",
    title: "How to Pack Your Household Items Safely Before Moving",
    description:
      "Discover how professional packing techniques and the right materials can help protect furniture, electronics, glassware, and valuable belongings.",
    image:
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 3,
    category: "Transportation",
    date: "August 08, 2026",
    title: "Why Choosing the Right Moving Vehicle Matters",
    description:
      "The right vehicle makes a major difference during relocation. Learn how vehicle size, loading methods, and secure transportation protect your goods.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 4,
    category: "Office Moving",
    date: "August 02, 2026",
    title: "A Complete Guide to Moving Your Office Without Disruption",
    description:
      "Moving an office requires careful planning. Learn how to organize employees, equipment, documents, furniture, and transportation efficiently.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 5,
    category: "Storage",
    date: "July 27, 2026",
    title: "Things to Know Before Storing Your Furniture and Belongings",
    description:
      "From furniture preparation to protection against dust and moisture, here are useful things to consider when storing your belongings.",
    image:
      "https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 6,
    category: "Relocation",
    date: "July 20, 2026",
    title: "House Relocation Checklist: What to Do Before Moving Day",
    description:
      "Use this simple relocation checklist to prepare your home, documents, utilities, packing, transportation, and final inspection before moving day.",
    image:
      "https://images.unsplash.com/photo-1560185008-b033106af5c3?auto=format&fit=crop&w=1200&q=85",
  },
];

const categories = [
  "All",
  "Moving Tips",
  "Packing",
  "Transportation",
  "Office Moving",
  "Storage",
  "Relocation",
];

const Blogs = () => {
  return (
    <main className="blogs-page">
      {/* Hero Section */}
      <section className="blogs-hero">
        <div className="blogs-hero-overlay"></div>

        <div className="blogs-hero-content">
          <span className="blogs-eyebrow">
            Pashupati Packer & Mover
          </span>

          <h1>
            Moving Tips, Ideas
            <br />
            & Expert Advice
          </h1>

          <p>
            Helpful guides and expert advice from Pashupati Packer & Mover
            to make your home, office, and commercial relocation easier,
            safer, and more organized.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="blogs-intro">
        <div className="blogs-intro-container">
          <div className="blogs-intro-label">
            <span>Our Blog</span>
            <div className="intro-line"></div>
          </div>

          <div className="blogs-intro-content">
            <h2>
              Everything You Need to Know
              <span> About Moving</span>
            </h2>

            <p>
              Whether you are moving your home, relocating your office, or
              transporting valuable belongings, our articles provide useful
              information to help you prepare for every step of your move.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="blog-categories">
        <div className="blog-categories-container">
          {categories.map((category, index) => (
            <button
              className={`category-button ${
                index === 0 ? "active" : ""
              }`}
              key={category}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Blog Grid */}
      <section className="blogs-list">
        <div className="blogs-container">
          <div className="blogs-section-heading">
            <div>
              <span>Latest Articles</span>
              <h2>Our Moving Resources</h2>
            </div>

            <p>
              Practical information from Pashupati Packer & Mover for
              planning a successful relocation.
            </p>
          </div>

          <div className="blogs-grid">
            {blogPosts.map((post) => (
              <article className="blog-card" key={post.id}>
                <div className="blog-card-image">
                  <img src={post.image} alt={post.title} />

                  <span className="blog-category">
                    {post.category}
                  </span>
                </div>

                <div className="blog-card-content">
                  <div className="blog-date">
                    {post.date}
                  </div>

                  <h3>{post.title}</h3>

                  <p>{post.description}</p>

                  <Link
                    to={`/blogs/${post.id}`}
                    className="read-more"
                  >
                    Read Article
                    <span>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="blogs-cta">
        <div className="blogs-cta-image">
          <img
            src="https://images.unsplash.com/photo-1603796846097-3b3e9d4d2b4d?auto=format&fit=crop&w=1600&q=85"
            alt="Pashupati Packer and Mover team"
          />
        </div>

        <div className="blogs-cta-overlay"></div>

        <div className="blogs-cta-content">
          <span>Pashupati Packer & Mover</span>

          <h2>
            Planning Your
            <br />
            Next Move?
          </h2>

          <p>
            Let our experienced team take care of your packing, loading,
            transportation, unloading, and delivery.
          </p>

          <Link to="/contact" className="blogs-cta-button">
            Get a Free Quote
            <span>→</span>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Blogs;
