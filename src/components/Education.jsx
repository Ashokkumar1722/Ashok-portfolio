import Section from './Section.jsx';
import Reveal from './Reveal.jsx';
import { education } from '../data/portfolioData.js';

export default function Education() {
  return (
    <Section id="education" title="Education">
      <ol className="timeline">
        {education.map((e) => (
          <li key={e.school}>
            <Reveal className="card">
              <p className="period">{e.period}</p>
              <h3>{e.school}</h3>
              <p>{e.degree}</p>
              <p className="score">{e.score}</p>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
