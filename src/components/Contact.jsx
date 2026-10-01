import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import Section from './Section.jsx';
import Reveal from './Reveal.jsx';
import ContactForm from './ContactForm.jsx';
import { profile, socials } from '../data/portfolioData.js';

const socialIcons = { github: Github, linkedin: Linkedin };

export default function Contact() {
  const items = [
    { Icon: Mail, label: 'Email', text: profile.email, href: `mailto:${profile.email}` },
    { Icon: Phone, label: 'Phone', text: profile.phone, href: `tel:${profile.phoneLink}` },
    { Icon: MapPin, label: 'Location', text: profile.location },
  ];
  return (
    <Section id="contact" title="Contact" subtitle="Open to entry-level opportunities. Send a message or reach out directly.">
      <div className="contact-grid">
        <div className="contact-info">
          {items.map(({ Icon, label, text, href }) => (
            <Reveal key={label} className="card item-card">
              <Icon size={22} className="icon" aria-hidden="true" />
              <div className="contact-text">
                <p className="project-type">{label}</p>
                {href ? <a href={href}>{text}</a> : <p>{text}</p>}
              </div>
            </Reveal>
          ))}
          <div className="btn-row">
            {socials.map((s) => {
              const Icon = socialIcons[s.icon] || Mail;
              return (
                <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                  <Icon size={18} /> {s.label}
                </a>
              );
            })}
          </div>
        </div>
        <Reveal><ContactForm /></Reveal>
      </div>
    </Section>
  );
}
