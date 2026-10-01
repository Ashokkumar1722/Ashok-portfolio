// Loads every image in this folder, so you can switch photos by changing ONE filename
// in src/data/portfolioData.js (profile.photo). Missing files never crash the site.
const images = import.meta.glob('./*.{jpg,jpeg,png,webp,svg}', { eager: true, query: '?url', import: 'default' });
export const getImage = (fileName) => images[`./${fileName}`];

export const resumeFile = Object.values(
  import.meta.glob('./E_Ashok_Kumar_Resume.pdf', { eager: true, query: '?url', import: 'default' })
)[0];
