const sharp = require('sharp');
const path = require('path');

const size = 192;
const inputPath = path.join(__dirname, 'public', 'profile.jpeg');
const outputPath = path.join(__dirname, 'public', 'favicon.png');

// Create a circular mask
const circleMask = Buffer.from(
  `<svg width="${size}" height="${size}">
    <circle cx="${size/2}" cy="${size/2}" r="${size/2}" fill="white"/>
  </svg>`
);

sharp(inputPath)
  .resize(size, size, { fit: 'cover' })
  .composite([{ input: circleMask, blend: 'dest-in' }])
  .png()
  .toFile(outputPath)
  .then(() => console.log('Circular favicon created at public/favicon.png'))
  .catch(err => console.error('Error:', err));
