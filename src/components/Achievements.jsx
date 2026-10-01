import { Trophy } from 'lucide-react';
import Section from './Section.jsx';
import Reveal from './Reveal.jsx';
import { achievements } from '../data/portfolioData.js';

export default function Achievements() {
  return (
    <Section id="achievements" title="Achievements & Hackathons">
      <div className="grid grid-2">
        {achievements.map((a) => (
          <Reveal key={a.title} className="card hoverable item-card">
            <Trophy size={22} className="icon" aria-hidden="true" />
            <div>
              <p className="project-type">{a.kind}</p>
              <h3>{a.title}</h3>
              <p>{a.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
