const { renderPage } = require('../site/render');

describe('renderPage', () => {
  it('renders a complete HTML page introducing the MigraCode coursework', () => {
    const html = renderPage();

    expect(html).toContain('<!doctype html>');
    expect(html).toContain('MigraCode');
  });

  it('carries no personal name, per the presentation decision', () => {
    const html = renderPage();

    expect(html).not.toMatch(/james/i);
    expect(html).not.toMatch(/postadan/i);
  });
});
