import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollIndicator from '../ui/ScrollIndicator';

export default function Hero() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.to('.hero-name-line', {
        y: 0,
        duration: 0.9,
        delay: 0.4,
        stagger: 0.12,
      })
        .to('.hero-accent-line', {
          scaleX: 1,
          duration: 0.7,
          ease: 'power2.inOut',
        }, '-=0.4')
        .to('.hero-subtitle-text', {
          y: 0,
          opacity: 1,
          duration: 0.6,
        }, '-=0.3')
        .to('.hero-tagline-text', {
          y: 0,
          opacity: 1,
          duration: 0.6,
        }, '-=0.3')
        .to('.scroll-indicator', {
          opacity: 1,
          duration: 0.5,
        }, '-=0.2');
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" ref={sectionRef}>
      <div className="hero-inner container">
        <div className="hero-name-wrapper">
          <div className="hero-name-line-wrapper">
            <span className="hero-name-line">Nathan</span>
          </div>
          <div className="hero-name-line-wrapper">
            <span className="hero-name-line">Leduc</span>
          </div>
        </div>

        <div className="hero-accent-line" />

        <div className="hero-meta">
          <div className="hero-subtitle-wrapper">
            <span className="hero-subtitle-text">
              Développeur web Fullstack
            </span>
          </div>
          <div className="hero-tagline-wrapper">
            <span className="hero-tagline-text">
              Java &bull; Spring &bull; React &bull; Vue.js &bull; PostgreSQL
            </span>
          </div>
        </div>
      </div>

      <ScrollIndicator />
    </section>
  );
}
