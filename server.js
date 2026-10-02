const http = require('http');
const fs = require('fs');
const path = require('path');
const esbuild = require('./node_modules/esbuild');

const PORT = process.env.PORT || 3000;
const ROOT = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.map': 'application/json'
};

function buildBundle() {
  try {
    esbuild.buildSync({
      entryPoints: [path.join(ROOT, 'src/index.tsx')],
      bundle: true,
      outfile: path.join(ROOT, 'dist/bundle.js'),
      format: 'esm',
      target: ['es2020'],
      loader: { '.tsx': 'tsx', '.ts': 'ts' },
      define: {
        'process.env.NODE_ENV': '"production"'
      },
      sourcemap: true,
      logLevel: 'error'
    });
    console.log('[WorkRadar] Bundle updated successfully');
  } catch (e) {
    console.error('[WorkRadar] Rebuild error:', e.message);
  }
}

// Initial build
buildBundle();

// Watch src for changes
let rebuildTimeout = null;
fs.watch(path.join(ROOT, 'src'), { recursive: true }, (eventType, filename) => {
  if (rebuildTimeout) clearTimeout(rebuildTimeout);
  rebuildTimeout = setTimeout(() => {
    console.log(`[WorkRadar] Change detected in ${filename}, rebuilding...`);
    buildBundle();
  }, 100);
});

const server = http.createServer((req, res) => {
  let reqPath = decodeURI(req.url.split('?')[0]);
  if (reqPath === '/') reqPath = '/index.html';

  let filePath = path.join(ROOT, reqPath);

  // Security check: ensure path is within ROOT
  if (!filePath.startsWith(ROOT)) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  // Check if file exists, else fallback to index.html for SPA
  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    filePath = path.join(ROOT, 'index.html');
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error: ' + err.message);
    } else {
      res.writeHead(200, {
        'Content-Type': contentType,
        'Cache-Control': 'no-cache, no-store, must-revalidate'
      });
      res.end(content);
    }
  });
});

server.listen(PORT, () => {
  console.log(`[WorkRadar] Server running at http://localhost:${PORT}`);
});
