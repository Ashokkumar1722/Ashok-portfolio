import { ExternalLink, Github } from 'lucide-react';

export default function ProjectCard({ project }) {
  const { title, type, categories, technologies, features, github, demo } = project;
  return (
    <article className="card hoverable project-card">
      <p className="project-type">{type} · {categories.join(' / ')}</p>
      <h3>{title}</h3>
      <ul className="features">
        {features.map((f) => <li key={f}>{f}</li>)}
      </ul>
      <ul className="tags">
        {technologies.map((t) => <li key={t} className="tag">{t}</li>)}
      </ul>
      {(github || demo) && (
        <div className="btn-row">
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className="btn btn-small btn-outline">
              <Github size={16} /> GitHub
            </a>
          )}
          {demo && (
            <a href={demo} target="_blank" rel="noopener noreferrer" className="btn btn-small btn-primary">
              <ExternalLink size={16} /> Live Demo
            </a>
          )}
        </div>
      )}
    </article>
  );
}
