import { Award } from 'lucide-react';
import Section from './Section.jsx';
import Reveal from './Reveal.jsx';
import { certifications } from '../data/portfolioData.js';

export default function Certifications() {
  return (
    <Section id="certifications" title="Certifications">
      <div className="grid grid-3">
        {certifications.map((c) => (
          <Reveal key={c.title} className="card hoverable item-card">
            <Award size={22} className="icon" aria-hidden="true" />
            <h3>{c.title}</h3>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
