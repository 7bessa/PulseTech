import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { readFile, writeFile } from 'node:fs/promises';
import { createServer } from 'vite';

const server = await createServer({
  appType: 'custom',
  logLevel: 'error',
  server: { middlewareMode: true },
});

try {
  const { default: App } = await server.ssrLoadModule('/src/App.tsx');
  const markup = renderToStaticMarkup(createElement(App));
  const outputPath = new URL('../dist/index.html', import.meta.url);
  const html = await readFile(outputPath, 'utf8');
  const placeholder = '<div id="root"></div>';

  if (!html.includes(placeholder)) {
    throw new Error('The prerender target #root was not found in dist/index.html.');
  }

  await writeFile(outputPath, html.replace(placeholder, `<div id="root">${markup}</div>`));
} finally {
  await server.close();
}
