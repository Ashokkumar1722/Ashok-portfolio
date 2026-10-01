import { useState } from 'react';
import Section from './Section.jsx';
import ProjectCard from './ProjectCard.jsx';
import { projects, projectFilters } from '../data/portfolioData.js';

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const visible = filter === 'All' ? projects : projects.filter((p) => p.categories.includes(filter));

  return (
    <Section id="projects" title="Projects" subtitle="Selected academic, IoT and hackathon work.">
      <div className="filters" role="group" aria-label="Filter projects">
        {projectFilters.map((f) => (
          <button key={f} className={`chip ${filter === f ? 'active' : ''}`} aria-pressed={filter === f} onClick={() => setFilter(f)}>
            {f}
          </button>
        ))}
      </div>
      <div className="grid grid-2">
        {visible.map((p) => <ProjectCard key={p.title} project={p} />)}
      </div>
    </Section>
  );
}
