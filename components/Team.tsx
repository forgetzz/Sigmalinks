"use client";

import { useRef, useState } from "react";

const teamMembers = [
  {
    name: "Dr. Chrisandi Lande, M.Si",
    role: "Founder & Lead Researcher",

    image: "./images/5656.png",
    accent: "#E8C547",
  },
  {
    name: "Capt. Joe Ronald Kurniawan Bokau, Ph.D",
    role: "Maritime & Machine Learning Specialist",
    image: "./images/56.png",
    accent: "#E8C547",
  },
  {
    name: "Dr. Hasbi Yasin, M. Si",
    role: "Spatial & Computational Statistics Expert",
    image: "./images/15.png",
    accent: "#E8C547",
  },
  {
    name: "Dr. Elok Fitriani Rafikasari, M.Si",
    role: "Structural Equation Modeling & Bayesian Analyst",
    image: "./images/13.png",
    accent: "#E8C547",
  },
  {
    name: "Muhammad Yahya Matdoan, M.Si",
    role: "Statistical Process Control Specialist",
    image: "./images/213.png",
    accent: "#E8C547",
  },
  {
    name: "Muhammad Irfan Afandy",
    role: "Software Engineer",
    image: "./images/ii.png",
    accent: "#E8C547",
  },

];

function TeamCard({
  member,
}: {
  member: (typeof teamMembers)[0];
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="team-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={
        {
          "--accent": member.accent,
        } as React.CSSProperties
      }
    >
      <div className="card-image-wrap">
        <img src={member.image} alt={member.name} className="card-img" />
  

      </div>

      <div className="card-body">
        <h3 className="card-name">{member.name}</h3>
   
        <p className="text-white mt-3 mb-3" >{member.role}</p>


        <div className="card-socials">
          <a href="#" aria-label="LinkedIn" className="social-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          <a href="#" aria-label="Twitter" className="social-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
            </svg>
          </a>
          <a href="#" aria-label="Email" className="social-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </a>
        </div>
      </div>

      <style jsx>{`
        .team-card {
          background: #0f0f0f;
          border: 1px solid #222;
          border-radius: 20px;
          overflow: hidden;
          transition: border-color 0.3s, transform 0.3s, box-shadow 0.3s;
          cursor: default;
          min-width: 280px;
          flex-shrink: 0;
        }
        .team-card:hover {
          border-color: var(--accent);
          transform: translateY(-6px);
          box-shadow: 0 20px 60px -10px color-mix(in srgb, var(--accent) 30%, transparent);
        }
        .card-image-wrap {
          position: relative;
          height: 240px;
          overflow: hidden;
        }
        .card-img {
          width:100%;
          height: 100%;
          object-fit: contain;
          transition: transform 0.5s ease;
          filter: grayscale(20%);
        }
        .team-card:hover .card-img {
          transform: scale(1.06);
          filter: grayscale(0%);
        }
        .card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            transparent 40%,
            #111 100%
          );
        }
        .card-role-badge {
          position: absolute;
          top: 14px;
          left: 14px;
          background: var(--accent);
          color: #000;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 4px 10px;
          border-radius: 999px;
          font-family: "DM Mono", monospace;
        }
        .card-body {
          padding: 20px 22px 22px;
        }
        .card-name {
          font-size: 1.25rem;
          font-weight: 700;
          color: #f0f0f0;
          margin: 0 0 6px;
          font-family: "Fraunces", Georgia, serif;
          letter-spacing: -0.02em;
        }
        .card-bio {
          font-size: 0.82rem;
          color: #666;
          line-height: 1.6;
          margin: 0 0 18px;
          font-family: "DM Mono", monospace;
        }
        .card-socials {
          display: flex;
          gap: 8px;
        }
        .social-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          border-radius: 10px;
          background: #1a1a1a;
          color: #555;
          border: 1px solid #2a2a2a;
          text-decoration: none;
          transition: background 0.2s, color 0.2s, border-color 0.2s;
        }
        .social-btn:hover {
          background: var(--accent);
          color: #000;
          border-color: var(--accent);
        }
      `}</style>
    </div>
  );
}

export default function Team() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollTo = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[index] as HTMLElement;
    if (!card) return;
    track.scrollTo({ left: card.offsetLeft - 24, behavior: "smooth" });
    setActiveIndex(index);
  };

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const scrollLeft = track.scrollLeft;
    const cardWidth = (track.children[0] as HTMLElement)?.offsetWidth + 16 || 296;
    const index = Math.round(scrollLeft / cardWidth);
    setActiveIndex(Math.min(index, teamMembers.length - 1));
  };

  return (
    <section className="section">
      {/* Header */}
      <div className="header">
        <span className="eyebrow">Our People</span>
        <h2 className="heading">
          Tim yang <em>Membangun</em>
          <br />
          Masa Depan Bersama Di Bidang Kemaritiman
        </h2>
        <p className="subheading">
          Kami adalah kolektif pemikir, pembuat, dan pemecah masalah
          yang percaya bahwa teknologi terbaik lahir dari kolaborasi nyata.
        </p>
      </div>

      {/* Mobile Carousel */}
      <div className="carousel-wrap">
        <div
          className="carousel-track"
          ref={trackRef}
          onScroll={handleScroll}
        >
          {teamMembers.map((m) => (
            <TeamCard key={m.name} member={m} />
          ))}
        </div>

        {/* Dots */}
        <div className="dots">
          {teamMembers.map((_, i) => (
            <button
              key={i}
              className={`dot ${i === activeIndex ? "dot-active" : ""}`}
              onClick={() => scrollTo(i)}
              aria-label={`Go to member ${i + 1}`}
            />
          ))}
        </div>

        {/* Arrow Buttons */}
        <div className="arrows">
          <button
            className="arrow-btn"
            onClick={() => scrollTo(Math.max(activeIndex - 1, 0))}
            disabled={activeIndex === 0}
            aria-label="Previous"
          >
            ←
          </button>
          <button
            className="arrow-btn"
            onClick={() =>
              scrollTo(Math.min(activeIndex + 1, teamMembers.length - 1))
            }
            disabled={activeIndex === teamMembers.length - 1}
            aria-label="Next"
          >
            →
          </button>
        </div>
      </div>

      {/* Desktop Grid */}
      <div className="desktop-grid">
        {teamMembers.map((m) => (
          <TeamCard key={m.name} member={m} />
        ))}
      </div>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,400;0,700;1,400&family=DM+Mono:wght@400;500&display=swap");
 
        .section {

          padding: 80px 24px;
          min-height: 100vh;
        }
 
        /* ── Header ── */
        .header {
          max-width: 640px;
          margin: 0 auto 48px;
          text-align: center;
        }
        .eyebrow {
          display: inline-block;
          font-family: "DM Mono", monospace;
          font-size: 11px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #2563EB;
          background: rgba(59, 130, 246, 0.08);
          border: 1px solid rgba(59, 130, 246, 0.25);
          padding: 5px 14px;
          border-radius: 999px;
          margin-bottom: 20px;
        }
        .heading {
          font-family: "Fraunces", Georgia, serif;
          font-size: clamp(2rem, 5vw, 3.2rem);
          font-weight: 700;
          color: #1e3a5f;
          letter-spacing: -0.03em;
          line-height: 1.15;
          margin: 0 0 16px;
        }
        .heading em {
          font-style: italic;
          color: #2563EB;
        }
        .subheading {
          font-family: "DM Mono", monospace;
          font-size: 0.85rem;
          color: #94a3b8;
          line-height: 1.7;
          margin: 0;
        }
 
        /* ── Mobile Carousel ── */
        .carousel-wrap {
          display: block;
          position: relative;
        }
        .carousel-track {
          display: flex;
          gap: 16px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          padding: 8px 24px 16px;
          scrollbar-width: none;
          margin: 0 -24px;
        }
        .carousel-track::-webkit-scrollbar {
          display: none;
        }
        .carousel-track > :global(.team-card) {
          scroll-snap-align: start;
          width: 280px;
        }
 
        .dots {
          display: flex;
          justify-content: center;
          gap: 6px;
          margin-top: 20px;
        }
        .dot {
          width: 6px;
          height: 6px;
          border-radius: 999px;
          background: #bfdbfe;
          border: none;
          cursor: pointer;
          transition: background 0.2s, width 0.2s;
          padding: 0;
        }
        .dot-active {
          background: #2563EB;
          width: 22px;
        }
 
        .arrows {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-top: 20px;
        }
        .arrow-btn {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          border: 1px solid #dbeafe;
          background: #ffffff;
          color: #93c5fd;
          font-size: 1.1rem;
          cursor: pointer;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .arrow-btn:hover:not(:disabled) {
          background: #2563EB;
          color: #ffffff;
          border-color: #2563EB;
        }
        .arrow-btn:disabled {
          opacity: 0.3;
          cursor: default;
        }
 
        /* ── Desktop Grid ── */
        .desktop-grid {
          display: none;
        }
 
        @media (min-width: 768px) {
          .carousel-wrap {
            display: none;
          }
          .desktop-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
            max-width: 1100px;
            margin: 0 auto;
          }
          .desktop-grid > :global(.team-card) {
            min-width: unset;
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}