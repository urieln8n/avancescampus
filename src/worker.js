// Sirve la web estática y, si un agente pide Markdown (Accept: text/markdown), le da la versión en texto.
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const accept = request.headers.get('Accept') || '';
    if ((url.pathname === '/' || url.pathname === '/index.html') && accept.includes('text/markdown')) {
      const md = await env.ASSETS.fetch(new Request(new URL('/index.md', url), request));
      return new Response(md.body, {
        status: md.status,
        headers: { 'Content-Type': 'text/markdown; charset=utf-8', 'Vary': 'Accept', 'Cache-Control': 'public, max-age=3600' },
      });
    }
    const res = await env.ASSETS.fetch(request);
    if (url.pathname === '/' || url.pathname === '/index.html') {
      const r = new Response(res.body, res);
      r.headers.set('Vary', 'Accept');
      return r;
    }
    return res;
  },
};
