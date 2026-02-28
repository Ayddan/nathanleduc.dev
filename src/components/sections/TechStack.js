import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import SectionTitle from '../ui/SectionTitle';

gsap.registerPlugin(ScrollTrigger);

const TECHS = [
  { name: 'Java', abbr: 'JA' },
  { name: 'Spring', abbr: 'SP' },
  { name: 'JavaScript', abbr: 'JS' },
  { name: 'TypeScript', abbr: 'TS' },
  { name: 'React', abbr: 'RE' },
  { name: 'Vue.js', abbr: 'VU' },
  { name: 'Node.js', abbr: 'NO' },
  { name: 'Next.js', abbr: 'NX' },
  { name: 'PostgreSQL', abbr: 'PG' },
  { name: 'Git', abbr: 'GI' },
];

export default function TechStack() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const elements = gsap.utils.toArray('.tech-element');
      gsap.from(elements, {
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        onComplete: () => {
          gsap.set(elements, { clearProps: 'transform,opacity' });
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="section container" id="stack" ref={sectionRef}>
      <SectionTitle>Ma stack</SectionTitle>
      <ul className="tech-list">
        {TECHS.map(tech => (
          <li key={tech.name} className="tech-element">
            <div className="tech-icon">
              {tech.abbr}
            </div>
            <h3>{tech.name}</h3>
          </li>
        ))}
      </ul>
    </section>
  );
}
