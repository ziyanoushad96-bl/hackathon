const esbuild = require('./node_modules/esbuild');
const path = require('path');

console.log('[WorkRadar] Compiling TypeScript & React bundle...');

try {
  const result = esbuild.buildSync({
    entryPoints: [path.join(__dirname, 'src/index.tsx')],
    bundle: true,
    outfile: path.join(__dirname, 'dist/bundle.js'),
    format: 'esm',
    target: ['es2020'],
    loader: { '.tsx': 'tsx', '.ts': 'ts' },
    define: {
      'process.env.NODE_ENV': '"production"'
    },
    sourcemap: true,
    minify: false, // Keep readable for demo/inspection
    logLevel: 'info'
  });

  console.log('[WorkRadar] Bundle build succeeded!');
} catch (err) {
  console.error('[WorkRadar] Build failed:', err);
  process.exit(1);
}
