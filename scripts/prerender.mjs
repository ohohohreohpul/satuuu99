import { chromium } from '@playwright/test';
import { spawn } from 'node:child_process';
import { mkdir, writeFile } from 'node:fs/promises';
const port=4179;
const server=spawn(process.execPath,['node_modules/vite/bin/vite.js','preview','--host','127.0.0.1','--port',String(port),'--strictPort'],{stdio:'pipe'});
let browser;
try {
 await new Promise((resolve,reject)=>{server.stdout.on('data',d=>{if(d.toString().includes('127.0.0.1'))resolve()});server.on('exit',code=>reject(new Error('Preview server exited: '+code)));setTimeout(()=>reject(new Error('Preview startup timed out')),15000).unref()});
 const serverless = process.platform === 'linux' && process.env.VERCEL;
 const packagedChromium = serverless ? (await import('@sparticuz/chromium')).default : null;
 browser=await chromium.launch(packagedChromium ? {
  args: packagedChromium.args,
  executablePath: await packagedChromium.executablePath(),
  headless: true,
 } : {channel:'chrome',headless:true});
 const context=await browser.newContext({reducedMotion:'reduce'});
 // Keep third-party widgets out of the snapshots: their script tags stay in the
 // HTML and run for real visitors, but a frozen copy of the widget must not.
 await context.route('https://book.zennohq.com/**',route=>route.abort());
 // Snapshot as a visitor who has already decided, so the consent banner is
 // not baked into static HTML; the app shows it to visitors who still need to.
 await context.addInitScript(()=>localStorage.setItem('satuuu99-consent',JSON.stringify({version:1,chat:false,decidedAt:'prerender'})));
 const page=await context.newPage();
 const routes=new Set(['/']);
 const indexable=[];
 for(const route of routes){
  await page.goto(`http://127.0.0.1:${port}${route}`,{waitUntil:'networkidle'});
  await page.locator('h1').waitFor();
  // noindex pages are still prerendered, but kept out of the sitemap.
  const robots=await page.locator('meta[name="robots"]').getAttribute('content');
  if(!robots?.includes('noindex')) indexable.push(route);
  const links=await page.locator('a[href^="/"]').evaluateAll(els=>els.map(el=>new URL(el.href).pathname));
  links.forEach(link=>{if(!link.includes('.')&&!link.startsWith('/assets/')) routes.add(link)});
  const markup=await page.content();
  const dir=route==='/'?'dist':`dist${route}`;
  await mkdir(dir,{recursive:true});await writeFile(`${dir}/index.html`,markup);
  console.log('Prerendered',route);
 }
 const sitemap=`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${indexable.map(r=>`<url><loc>https://www.satuuu99.de${r}</loc></url>`).join('')}</urlset>`;
 await writeFile('dist/sitemap.xml',sitemap);
 await writeFile('public/sitemap.xml',sitemap);
 await writeFile('dist/404.html',await (async()=>{await page.goto(`http://127.0.0.1:${port}/404`,{waitUntil:'networkidle'});return page.content()})());
}finally{await browser?.close();server.kill()}
