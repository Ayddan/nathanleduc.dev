import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import SectionTitle from '../ui/SectionTitle';
import SocialLinks from '../ui/SocialLinks';
import nathanImg from '../../assets/jpg/nathan.jpg';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-photo-wrapper', {
        scale: 0.9,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
      });

      gsap.from('.about-text p', {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
      });

      gsap.from('.about-links', {
        y: 20,
        opacity: 0,
        duration: 0.5,
        delay: 0.4,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="section about container" id="about" ref={sectionRef}>
      <SectionTitle>A propos</SectionTitle>
      <div className="about-layout">
        <div className="about-photo-wrapper">
          <img
            className="about-photo"
            src={nathanImg.src}
            alt="Nathan Leduc"
            width={280}
            height={340}
          />
        </div>
        <div className="about-content">
          <div className="about-text">
            <p>
              Passionné par le développement web depuis 2020, j&apos;ai
              construit mon parcours en combinant formation autodidacte,
              diplôme professionnel et expériences en entreprise.
            </p>
            <p>
              Aujourd&apos;hui développeur Fullstack chez Imdeo à Tours, je
              conçois et développe des applications métier avec Java, Spring,
              Vue.js et PostgreSQL. J&apos;aime créer des interfaces soignées
              et des architectures robustes.
            </p>
          </div>
          <div className="about-links">
            <SocialLinks />
          </div>
        </div>
      </div>
    </section>
  );
}
