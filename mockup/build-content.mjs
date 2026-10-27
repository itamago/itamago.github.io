// Rebuild the local mockup's content from the existing static site. No dependencies.
import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '..');
const decode = (text) => text.replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n))).replace(/&#x([a-f0-9]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16))).replace(/&(amp|lt|gt|quot|apos|rsquo|lsquo|rdquo|ldquo|hellip|ndash|mdash|nbsp);/g, (_, name) => ({amp:'&',lt:'<',gt:'>',quot:'"',apos:"'",rsquo:'’',lsquo:'‘',rdquo:'”',ldquo:'“',hellip:'…',ndash:'–',mdash:'—',nbsp:' '})[name]);
const strip = (text) => decode(text.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim());
const categories = {code:'Informatique',maths:'Mathématiques',kungfu:'Sport',covid:'Sport',jardin:'Jardinage',dessin:'Culture',manga:'Culture',bd:'Culture',jeux:'Culture',politique:'Divers',blog:'Divers'};
const posts = readdirSync(path.join(root, 'post'), {withFileTypes:true}).filter(e => e.isDirectory() && /^\d{4}-/.test(e.name)).map(entry => {
  const html = readFileSync(path.join(root, 'post', entry.name, 'index.html'), 'utf8');
  const title = decode(html.match(/<meta name="twitter:title" content="([^"]+)"/)?.[1] || entry.name);
  const tags = [...html.matchAll(/<span class="term">([^<]+)<\/span>/g)].map(m=>decode(m[1]));
  let content = html.match(/<div class="entry-content">([\s\S]*?)<footer class="entry-meta">/)?.[1].trim() || '';
  content = content.replace(/\b(src|href)="\/(?!\/)/g, '$1="../').replace(/src="\/\//g, 'src="https://');
  const plain = strip(content);
  const firstParagraph = content.match(/<p>([\s\S]*?)<\/p>/)?.[1] || plain;
  const excerpt = entry.name === '2017-03-06-maths-groupes' ? 'Un résumé de cours consacré aux groupes et à leurs propriétés.' : strip(firstParagraph).slice(0, 180);
  const image = html.match(/<div class="entry-image">\s*<img src="([^"]+)"/)?.[1];
  const category = /black-eyed/i.test(entry.name) ? 'Culture' : tags.map(tag => categories[tag]).find(Boolean) || 'Divers';
  return {id:entry.name,title,date:entry.name.slice(0,10),tags,category,excerpt,content,image:image ? `..${image}` : '../images/pexels-photo1.jpg',minutes:Math.max(1,Math.ceil(plain.split(/\s+/).length/200))};
}).sort((a,b)=>b.date.localeCompare(a.date));
const math = readFileSync(path.join(root,'mathematiques','index.html'),'utf8');
const resources = [...math.matchAll(/<a href="(\/assets\/cours_math\/[^" ]+\.pdf)">([^<]+)<\/a>/g)].map(match=>({url:`..${match[1]}`,title:decode(match[2])}));
const pages = {};
for (const slug of ['kung-fu','politique']) {
  const html = readFileSync(path.join(root,slug,'index.html'),'utf8');
  pages[slug] = {title:decode(html.match(/<meta name="twitter:title" content="([^"]+)"/)?.[1] || slug),content:(html.match(/<div class="entry-content">([\s\S]*?)<footer class="entry-meta">/)?.[1].trim() || '').replace(/\b(src|href)="\/(?!\/)/g,'$1="../').replace(/src="\/\//g,'src="https://')};
}
writeFileSync(path.join(here,'content.js'), `// Generated from the existing site by build-content.mjs.\nwindow.ITAMAGO_CONTENT = ${JSON.stringify({posts,resources,pages},null,2)};\n`);
console.log(`Content ready: ${posts.length} articles, ${resources.length} PDF resources.`);
