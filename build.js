// Simple build script to ensure proper file handling
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Run the Vite build
console.log('Running Vite build...');
execSync('vite build', { stdio: 'inherit' });

// Copy necessary files to the dist directory
console.log('Copying Vercel configuration files...');
try {
  // Create dist directory if it doesn't exist
  if (!fs.existsSync('dist')) {
    fs.mkdirSync('dist');
  }
  
  // Copy _headers and _redirects
  fs.copyFileSync('public/_headers', 'dist/_headers');
  fs.copyFileSync('public/_redirects', 'dist/_redirects');
  
  // Copy vercel.json to the dist directory
  fs.copyFileSync('vercel.json', 'dist/vercel.json');
  
  console.log('Build completed successfully!');
} catch (err) {
  console.error('Error during build:', err);
  process.exit(1);
}
