import Section from './Section.jsx';
import Reveal from './Reveal.jsx';
import { skillCategories } from '../data/portfolioData.js';

export default function Skills() {
  return (
    <Section id="skills" title="Skills" subtitle="Technologies and tools I work with.">
      <div className="grid grid-3">
        {skillCategories.map((cat) => (
          <Reveal key={cat.title} className="card hoverable">
            <h3>{cat.title}</h3>
            <ul className="tags">
              {cat.skills.map((s) => <li key={s} className="tag">{s}</li>)}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
