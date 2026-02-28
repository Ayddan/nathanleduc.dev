import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import SectionTitle from '../ui/SectionTitle';
import ProjectCard from '../ui/ProjectCard';

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    fetch('/api/project-infos')
      .then(res => res.json())
      .then(data => {
        if (data.results) setProjects(data.results);
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (projects.length === 0) return;

    const ctx = gsap.context(() => {
      gsap.from('.project-card', {
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.12,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [projects]);

  return (
    <section className="section container" id="projects" ref={sectionRef}>
      <SectionTitle>Mes projets</SectionTitle>
      <ul className="project-list">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </ul>
    </section>
  );
}
