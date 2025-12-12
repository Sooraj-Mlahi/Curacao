// vercel-build.js
const { execSync } = require('child_process');

console.log('Running Vite build...');
execSync('npm run build', { stdio: 'inherit' });

console.log('Copying static files...');
execSync('cp -r client/dist .vercel_build_output/static', { stdio: 'inherit' });
