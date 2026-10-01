import Section from './Section.jsx';
import Reveal from './Reveal.jsx';
import { profile } from '../data/portfolioData.js';

export default function About() {
  return (
    <Section id="about" title="About Me">
      <Reveal className="card about-card">
        {profile.about.map((text) => <p key={text}>{text}</p>)}
      </Reveal>
    </Section>
  );
}
