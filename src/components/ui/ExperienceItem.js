export default function ExperienceItem({
  index,
  title,
  company,
  location,
  date,
  description,
  tags = [],
}) {
  const number = String(index + 1).padStart(2, '0');

  return (
    <div className="experience-item">
      <div className="experience-number">{number}</div>
      <div className="experience-content">
        <h3 className="experience-title">{title}</h3>
        {(company || location) && (
          <span className="experience-company">
            {company}{location ? ` — ${location}` : ''}
          </span>
        )}
        <span className="experience-date">{date}</span>
        {description && (
          <p className="experience-description">{description}</p>
        )}
        {tags.length > 0 && (
          <div className="experience-tags">
            {tags.map(tag => (
              <span key={tag} className="experience-tag">{tag}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
