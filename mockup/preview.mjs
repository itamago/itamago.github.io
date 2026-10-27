import http from 'node:http';
import {createReadStream} from 'node:fs';
import {stat} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const port=Number(process.env.PORT || 4173);
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'application/javascript; charset=utf-8','.svg':'image/svg+xml','.jpg':'image/jpeg','.jpeg':'image/jpeg','.png':'image/png','.pdf':'application/pdf','.zip':'application/zip','.xml':'application/xml; charset=utf-8','.woff2':'font/woff2'};
const server=http.createServer(async(request,response)=>{
  try {
    const pathname=decodeURIComponent(new URL(request.url,'http://localhost').pathname);
    let target=path.resolve(root,`.${pathname}`);
    if(target!==root&&!target.startsWith(root+path.sep)){response.writeHead(403).end();return;}
    if((await stat(target)).isDirectory())target=path.join(target,'index.html');
    const info=await stat(target);
    response.writeHead(200,{'Content-Type':types[path.extname(target).toLowerCase()]||'application/octet-stream','Content-Length':info.size,'Cache-Control':'no-store'});
    if(request.method==='HEAD')response.end();else createReadStream(target).pipe(response);
  }catch{response.writeHead(404,{'Content-Type':'text/plain; charset=utf-8'}).end('Page introuvable');}
});
server.listen(port,'127.0.0.1',()=>console.log(`Local: http://127.0.0.1:${port}/mockup/`));
server.on('error',error=>{console.error(error.message);process.exitCode=1;});
