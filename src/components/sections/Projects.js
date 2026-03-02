import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import SectionTitle from '../ui/SectionTitle';
import ProjectItem from '../ui/ProjectItem';

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
  }, [projects]);

  return (
    <section className="section container" id="projects" ref={sectionRef}>
      <SectionTitle>Mes projets</SectionTitle>
      <div className="project-list">
        {projects.map((project, i) => {
          const name = project.properties?.Nom?.title?.[0]?.plain_text || 'Projet';
          const description = project.properties?.Description?.rich_text?.[0]?.plain_text || '';
          const url = project.properties?.url?.url || '#';
          const cover = project.cover?.file?.url || project.cover?.external?.url || '';
          const tags = project.properties?.Tags?.multi_select?.map(t => t.name) || [];

          return (
            <ProjectItem
              key={i}
              index={i}
              name={name}
              description={description}
              url={url}
              cover={cover}
              tags={tags}
            />
          );
        })}
      </div>
    </section>
  );
}
