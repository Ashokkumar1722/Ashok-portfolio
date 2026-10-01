import Reveal from './Reveal.jsx';

// Reusable wrapper: gives every section the same spacing, width and title.
export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <div className="container">
        <Reveal>
          <h2 id={`${id}-title`} className="section-title">{title}</h2>
          {subtitle && <p className="section-subtitle">{subtitle}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
