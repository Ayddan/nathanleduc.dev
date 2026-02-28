import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import SectionTitle from '../ui/SectionTitle';
import ExperienceItem from '../ui/ExperienceItem';

gsap.registerPlugin(ScrollTrigger);

const EXPERIENCES = [
  {
    title: 'Programmation autodidacte',
    company: null,
    location: null,
    date: '2020',
    description: 'Découverte du développement web en autodidacte. Apprentissage des bases HTML, CSS et JavaScript.',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Formation Développeur Web',
    company: 'CEFIM',
    location: 'Tours',
    date: '2020 — 2021',
    description: 'Titre professionnel Développeur web et web mobile.',
    tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
  },
  {
    title: 'Développeur Web Alternance',
    company: 'Ackwa',
    location: 'Tours',
    date: 'Juin 2021 — Juillet 2022',
    description: 'Développement et maintenance de sites web en alternance.',
    tags: ['PHP', 'Symfony', 'WordPress'],
  },
  {
    title: 'Développeur Web Freelance',
    company: 'Freelance',
    location: 'Remote',
    date: 'Juillet 2022 — Mai 2023',
    description: 'Conception et développement d\'applications web sur mesure.',
    tags: ['Next.js', 'Node.js', 'MongoDB'],
  },
  {
    title: 'Développeur Fullstack',
    company: 'Imdeo',
    location: 'Tours',
    date: 'Mai 2023 — Aujourd\'hui',
    description: 'Conception et développement d\'applications métier.',
    tags: ['Java', 'Spring', 'Vue.js', 'PostgreSQL'],
  },
];

export default function Experiences() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray('.experience-item');
      items.forEach((item) => {
        gsap.from(item, {
          x: -30,
          opacity: 0,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="section container" id="experiences" ref={sectionRef}>
      <SectionTitle>Mon parcours</SectionTitle>
      <div className="experience-list">
        {EXPERIENCES.map((exp, i) => (
          <ExperienceItem key={i} index={i} {...exp} />
        ))}
      </div>
    </section>
  );
}
