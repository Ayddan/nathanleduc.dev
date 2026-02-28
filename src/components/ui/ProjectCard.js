export default function ProjectCard({ project }) {
  const cover = project.cover?.file?.url || project.cover?.external?.url || '';
  const name = project.properties?.Nom?.title?.[0]?.plain_text || 'Projet';
  const description = project.properties?.Description?.rich_text?.[0]?.plain_text || '';
  const url = project.properties?.url?.url || '#';
  const isExternal = url !== '#';

  return (
    <li className="project-card">
      <a
        className="project-illustration"
        href={url}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noreferrer' : undefined}
      >
        {cover && <img src={cover} alt={name} loading="lazy" />}
      </a>
      <div className="project-info">
        <a
          className="project-name"
          href={url}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noreferrer' : undefined}
        >
          {name}
        </a>
        {description && <p className="project-description">{description}</p>}
      </div>
    </li>
  );
}
