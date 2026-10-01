import { useState } from 'react';
import { Download, FolderOpen, ImagePlus, Mail, RotateCcw } from 'lucide-react';
import { profile } from '../data/portfolioData.js';
import { getImage, resumeFile } from '../assets/index.js';

const STORAGE_KEY = 'portfolio-photo-preview';
const readSaved = () => {
  try { return localStorage.getItem(STORAGE_KEY); } catch { return null; }
};

export default function Hero() {
  // Owner-only photo tool: open the site with ?edit at the end of the URL, e.g. http://localhost:5173/?edit
  const editMode = new URLSearchParams(window.location.search).has('edit');
  const [preview, setPreview] = useState(editMode ? readSaved() : null);
  const photo = preview || getImage(profile.photo);

  const onPick = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      setPreview(reader.result);
      try { localStorage.setItem(STORAGE_KEY, reader.result); } catch { /* image too large to save */ }
    };
    reader.readAsDataURL(file);
  };

  const reset = () => {
    setPreview(null);
    try { localStorage.removeItem(STORAGE_KEY); } catch { /* ignore */ }
  };

  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div className="hero-text">
          <p className="eyebrow">Hello, I am</p>
          <h1>{profile.name}</h1>
          <p className="headline">{profile.headline}</p>
          <p className="intro">{profile.intro}</p>
          <div className="btn-row">
            <a href="#projects" className="btn btn-primary"><FolderOpen size={18} /> View Projects</a>
            {resumeFile ? (
              <a href={resumeFile} download="E_Ashok_Kumar_Resume.pdf" className="btn btn-outline">
                <Download size={18} /> Download Resume
              </a>
            ) : (
              <span className="btn btn-outline disabled" title="Add src/assets/E_Ashok_Kumar_Resume.pdf">
                <Download size={18} /> Download Resume
              </span>
            )}
            <a href="#contact" className="btn btn-outline"><Mail size={18} /> Contact Me</a>
          </div>
        </div>
        <div className="hero-photo-wrap">
          <div className="hero-photo">
            {photo ? (
              <img src={photo} alt={`Portrait of ${profile.name}`} />
            ) : (
              <div className="photo-placeholder" role="img" aria-label="Profile photo placeholder">{profile.initials}</div>
            )}
          </div>
          {editMode && (
            <div className="photo-tools">
              <label className="btn btn-small btn-outline">
                <ImagePlus size={16} /> Change photo
                <input type="file" accept="image/*" onChange={onPick} hidden />
              </label>
              {preview && (
                <button type="button" className="btn btn-small btn-outline" onClick={reset}>
                  <RotateCcw size={16} /> Reset
                </button>
              )}
              <p className="photo-note">Preview on this browser only. To make it permanent, put the file in src/assets/ and set profile.photo in portfolioData.js.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
