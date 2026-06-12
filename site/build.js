const fs = require('fs');
const path = require('path');
const { renderPage } = require('./render');

function build(outDir) {
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'index.html'), renderPage());
}

if (require.main === module) {
  const outDir = path.join(__dirname, '..', '_site');
  build(outDir);
  console.log(`Site written to ${outDir}`);
}

module.exports = { build };
