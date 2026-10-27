// Generate the public homepage from the reviewed mockup, preserving root-relative asset paths.
import {readFileSync, writeFileSync} from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const here=path.dirname(fileURLToPath(import.meta.url));
const root=path.resolve(here,'..');
let html=readFileSync(path.join(here,'index.html'),'utf8');

for(const asset of ['logo.svg','styles.css','content.js','app.js']) {
  html=html.replaceAll(`="${asset}"`,`="mockup/${asset}"`);
}
html=html.replaceAll('="../images/','="images/')
  .replaceAll('="../assets/','="assets/')
  .replaceAll('href="../index.xml"','href="index.xml"');
html=html.replace('  <title>itamago — Pacôme Danhiez</title>', '  <title>itamago — Pacôme Danhiez</title>\n  <link rel="canonical" href="https://www.itamago.com/">\n  <link rel="alternate" type="application/rss+xml" title="Articles — itamago" href="index.xml">');

writeFileSync(path.join(root,'index.html'),html);
console.log('Public homepage ready: index.html');
