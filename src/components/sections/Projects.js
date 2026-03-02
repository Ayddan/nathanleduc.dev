import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import SectionTitle from '../ui/SectionTitle';
import ProjectItem from '../ui/ProjectItem';

gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
  {
    name: 'Shirts',
    description: '',
    url: '#',
    cover: '/schertz.jpg',
    tags: [],
  },
];

export default function Projects() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray('.project-item');
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
    <section className="section container" id="projects" ref={sectionRef}>
      <SectionTitle>Mes projets</SectionTitle>
      <div className="project-list">
        {PROJECTS.map((project, i) => (
          <ProjectItem
            key={i}
            index={i}
            {...project}
          />
        ))}
      </div>
    </section>
  );
}
