export default function ProjectItem({ index, name, description, url, cover, tags = [] }) {
  const number = String(index + 1).padStart(2, '0');
  const isExternal = url && url !== '#';

  return (
    <div className="project-item">
      <div className="project-number">{number}</div>
      <div className="project-content">
        {cover && (
          <div className="project-cover">
            {isExternal ? (
              <a href={url} target="_blank" rel="noreferrer">
                <img src={cover} alt={name} loading="lazy" />
              </a>
            ) : (
              <img src={cover} alt={name} loading="lazy" />
            )}
          </div>
        )}
        <h3 className="project-title">
          {isExternal ? (
            <a href={url} target="_blank" rel="noreferrer">{name}</a>
          ) : (
            name
          )}
        </h3>
        {description && (
          <p className="project-description">{description}</p>
        )}
        {tags.length > 0 && (
          <div className="project-tags">
            {tags.map(tag => (
              <span key={tag} className="project-tag">{tag}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
