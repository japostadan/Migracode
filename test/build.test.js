const fs = require('fs');
const os = require('os');
const path = require('path');
const { build } = require('../site/build');

describe('build', () => {
  let outDir;

  beforeEach(() => {
    outDir = fs.mkdtempSync(path.join(os.tmpdir(), 'mcb-site-'));
  });

  afterEach(() => {
    fs.rmSync(outDir, { recursive: true, force: true });
  });

  it('writes the rendered page to index.html in the output directory', () => {
    build(outDir);

    const html = fs.readFileSync(path.join(outDir, 'index.html'), 'utf8');
    expect(html).toContain('<!doctype html>');
    expect(html).toContain('MigraCode');
  });

  it('creates the output directory when it does not exist', () => {
    const nested = path.join(outDir, 'does', 'not', 'exist');

    build(nested);

    expect(fs.existsSync(path.join(nested, 'index.html'))).toBe(true);
  });
});
