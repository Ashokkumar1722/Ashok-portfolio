import { useState } from 'react';
import { Send } from 'lucide-react';
import { contactForm, profile } from '../data/portfolioData.js';

const empty = { name: '', email: '', message: '' };

export default function ContactForm() {
  const [values, setValues] = useState(empty);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const onChange = (e) => setValues((v) => ({ ...v, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (e.target.elements.website.value) return; // honeypot: bots fill this hidden field

    if (!contactForm.endpoint) {
      const subject = encodeURIComponent(`Portfolio message from ${values.name}`);
      const body = encodeURIComponent(`${values.message}\n\nFrom: ${values.name} (${values.email})`);
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch(contactForm.endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error('Request failed');
      setValues(empty);
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return (
    <form className="card contact-form" onSubmit={onSubmit}>
      <h3>Send me a message</h3>
      <label htmlFor="cf-name">Your name</label>
      <input id="cf-name" name="name" type="text" required autoComplete="name" value={values.name} onChange={onChange} />
      <label htmlFor="cf-email">Your email</label>
      <input id="cf-email" name="email" type="email" required autoComplete="email" value={values.email} onChange={onChange} />
      <label htmlFor="cf-message">Message</label>
      <textarea id="cf-message" name="message" rows="5" required value={values.message} onChange={onChange} />
      <input name="website" type="text" tabIndex="-1" autoComplete="off" className="hp" aria-hidden="true" />
      <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
        <Send size={18} /> {status === 'sending' ? 'Sending...' : 'Send Message'}
      </button>
      <p className={`form-status ${status}`} role="status" aria-live="polite">
        {status === 'success' && 'Thank you! Your message has been sent.'}
        {status === 'error' && `Something went wrong. Please email me at ${profile.email}.`}
      </p>
    </form>
  );
}
