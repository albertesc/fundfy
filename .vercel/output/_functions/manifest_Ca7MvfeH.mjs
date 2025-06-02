import { h as decodeKey } from './chunks/astro/server_Eu3TDnBi.mjs';
import './chunks/astro-designed-error-pages_BZajLrGy.mjs';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/noop-middleware_CnLZ28pb.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/albert/Sites/fundfy/","cacheDir":"file:///Users/albert/Sites/fundfy/node_modules/.astro/","outDir":"file:///Users/albert/Sites/fundfy/dist/","srcDir":"file:///Users/albert/Sites/fundfy/src/","publicDir":"file:///Users/albert/Sites/fundfy/public/","buildClientDir":"file:///Users/albert/Sites/fundfy/dist/client/","buildServerDir":"file:///Users/albert/Sites/fundfy/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@5.7.13_@types+node@22.15.18_jiti@2.4.2_lightningcss@1.30.1_rollup@4.40.2_typescript@5.8.3/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_actions/[...path]","pattern":"^\\/_actions(?:\\/(.*?))?\\/?$","segments":[[{"content":"_actions","dynamic":false,"spread":false}],[{"content":"...path","dynamic":true,"spread":true}]],"params":["...path"],"component":"node_modules/.pnpm/astro@5.7.13_@types+node@22.15.18_jiti@2.4.2_lightningcss@1.30.1_rollup@4.40.2_typescript@5.8.3/node_modules/astro/dist/actions/runtime/route.js","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.D9PSe9Tg.css"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.D9PSe9Tg.css"}],"routeData":{"route":"/conditions","isIndex":false,"type":"page","pattern":"^\\/conditions\\/?$","segments":[[{"content":"conditions","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/conditions.astro","pathname":"/conditions","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.D9PSe9Tg.css"}],"routeData":{"route":"/cookies","isIndex":false,"type":"page","pattern":"^\\/cookies\\/?$","segments":[[{"content":"cookies","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/cookies.astro","pathname":"/cookies","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.D9PSe9Tg.css"}],"routeData":{"route":"/es/404","isIndex":false,"type":"page","pattern":"^\\/es\\/404\\/?$","segments":[[{"content":"es","dynamic":false,"spread":false}],[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/es/404.astro","pathname":"/es/404","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.D9PSe9Tg.css"}],"routeData":{"route":"/es/conditions","isIndex":false,"type":"page","pattern":"^\\/es\\/conditions\\/?$","segments":[[{"content":"es","dynamic":false,"spread":false}],[{"content":"conditions","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/es/conditions.astro","pathname":"/es/conditions","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.D9PSe9Tg.css"}],"routeData":{"route":"/es/cookies","isIndex":false,"type":"page","pattern":"^\\/es\\/cookies\\/?$","segments":[[{"content":"es","dynamic":false,"spread":false}],[{"content":"cookies","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/es/cookies.astro","pathname":"/es/cookies","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.D9PSe9Tg.css"}],"routeData":{"route":"/es/privacy","isIndex":false,"type":"page","pattern":"^\\/es\\/privacy\\/?$","segments":[[{"content":"es","dynamic":false,"spread":false}],[{"content":"privacy","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/es/privacy.astro","pathname":"/es/privacy","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.D9PSe9Tg.css"},{"type":"inline","content":"@media (min-width: 768px){.hero-item[data-astro-cid-rkcgevmd]{margin-left:calc((100vw - 1160px)/2 - 8px);margin-right:calc((100vw - 1160px)/2 + 8px)}}\n"}],"routeData":{"route":"/es","isIndex":true,"type":"page","pattern":"^\\/es\\/?$","segments":[[{"content":"es","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/es/index.astro","pathname":"/es","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.D9PSe9Tg.css"}],"routeData":{"route":"/privacy","isIndex":false,"type":"page","pattern":"^\\/privacy\\/?$","segments":[[{"content":"privacy","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/privacy.astro","pathname":"/privacy","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.D9PSe9Tg.css"},{"type":"inline","content":"@media (min-width: 768px){.hero-item[data-astro-cid-rkcgevmd]{margin-left:calc((100vw - 1160px)/2 - 8px);margin-right:calc((100vw - 1160px)/2 + 8px)}}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/albert/Sites/fundfy/src/pages/404.astro",{"propagation":"none","containsHead":true}],["/Users/albert/Sites/fundfy/src/pages/conditions.astro",{"propagation":"none","containsHead":true}],["/Users/albert/Sites/fundfy/src/pages/cookies.astro",{"propagation":"none","containsHead":true}],["/Users/albert/Sites/fundfy/src/pages/es/404.astro",{"propagation":"none","containsHead":true}],["/Users/albert/Sites/fundfy/src/pages/es/conditions.astro",{"propagation":"none","containsHead":true}],["/Users/albert/Sites/fundfy/src/pages/es/cookies.astro",{"propagation":"none","containsHead":true}],["/Users/albert/Sites/fundfy/src/pages/es/privacy.astro",{"propagation":"none","containsHead":true}],["/Users/albert/Sites/fundfy/src/pages/privacy.astro",{"propagation":"none","containsHead":true}],["/Users/albert/Sites/fundfy/src/pages/es/index.astro",{"propagation":"none","containsHead":true}],["/Users/albert/Sites/fundfy/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000astro-internal:actions":"_astro-internal_actions.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000astro-internal:middleware":"_astro-internal_middleware.mjs","\u0000@astro-page:node_modules/.pnpm/astro@5.7.13_@types+node@22.15.18_jiti@2.4.2_lightningcss@1.30.1_rollup@4.40.2_typescript@5.8.3/node_modules/astro/dist/actions/runtime/route@_@js":"pages/_actions/_---path_.astro.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/conditions@_@astro":"pages/conditions.astro.mjs","\u0000@astro-page:src/pages/cookies@_@astro":"pages/cookies.astro.mjs","\u0000@astro-page:src/pages/es/404@_@astro":"pages/es/404.astro.mjs","\u0000@astro-page:src/pages/es/conditions@_@astro":"pages/es/conditions.astro.mjs","\u0000@astro-page:src/pages/es/cookies@_@astro":"pages/es/cookies.astro.mjs","\u0000@astro-page:src/pages/es/privacy@_@astro":"pages/es/privacy.astro.mjs","\u0000@astro-page:src/pages/es/index@_@astro":"pages/es.astro.mjs","\u0000@astro-page:src/pages/privacy@_@astro":"pages/privacy.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:node_modules/.pnpm/astro@5.7.13_@types+node@22.15.18_jiti@2.4.2_lightningcss@1.30.1_rollup@4.40.2_typescript@5.8.3/node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","/Users/albert/Sites/fundfy/node_modules/.pnpm/astro@5.7.13_@types+node@22.15.18_jiti@2.4.2_lightningcss@1.30.1_rollup@4.40.2_typescript@5.8.3/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_DtL5-pHY.mjs","\u0000@astrojs-manifest":"manifest_Ca7MvfeH.mjs","/Users/albert/Sites/fundfy/src/components/Contact.astro?astro&type=script&index=0&lang.ts":"_astro/Contact.astro_astro_type_script_index_0_lang.BA1DJASE.js","/Users/albert/Sites/fundfy/src/components/Hero.astro?astro&type=script&index=0&lang.ts":"_astro/Hero.astro_astro_type_script_index_0_lang.B_CSIoqP.js","/Users/albert/Sites/fundfy/src/components/HeroBackground.astro?astro&type=script&index=0&lang.ts":"_astro/HeroBackground.astro_astro_type_script_index_0_lang.BtrsVMFi.js","/Users/albert/Sites/fundfy/src/components/Header.astro?astro&type=script&index=0&lang.ts":"_astro/Header.astro_astro_type_script_index_0_lang.BM0FTAby.js","/Users/albert/Sites/fundfy/src/components/atoms/Accordion.astro?astro&type=script&index=0&lang.ts":"_astro/Accordion.astro_astro_type_script_index_0_lang.D0kq99Wn.js","/Users/albert/Sites/fundfy/src/components/atoms/MenuMobile.astro?astro&type=script&index=0&lang.ts":"_astro/MenuMobile.astro_astro_type_script_index_0_lang.BG10jNCR.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/albert/Sites/fundfy/src/components/Contact.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",()=>{const e=document.querySelector(\"#join form\");if(!e)return;e.addEventListener(\"submit\",function(r){r.preventDefault();const s=e.querySelector('[name=\"name\"]'),t=e.querySelector('[name=\"email\"]');let o=!0;if(!s||!t||(e.querySelectorAll(\".error-message\").forEach(c=>c.classList.add(\"hidden\")),e.querySelectorAll(\"input, textarea\").forEach(c=>{c.classList.remove(\"bg-red-100\",\"focus:ring-red-500\",\"placeholder-red-400\")}),s.value.trim()||(a(s),o=!1),t.value.trim()&&/^\\S+@\\S+\\.\\S+$/.test(t.value)||(a(t),o=!1),!o))return;n();const d=new FormData(e);fetch(e.action,{method:e.method,body:d,headers:{\"X-Requested-With\":\"XMLHttpRequest\"}})});function a(r){r.parentNode?.querySelector(\".error-message\")?.classList.remove(\"hidden\"),r.classList.add(\"bg-red-100\",\"focus:ring-red-500\",\"placeholder-red-400\")}function n(){if(!e)return;const r=e.querySelector(\".success-message\");r?.classList.remove(\"hidden\"),r?.classList.add(\"block\"),e.reset()}});"],["/Users/albert/Sites/fundfy/src/components/HeroBackground.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",function(){document.body.addEventListener(\"touchstart\",t);function t(){const e=document.getElementById(\"videoElem\");e&&e instanceof HTMLVideoElement&&e.play()}});"],["/Users/albert/Sites/fundfy/src/components/Header.astro?astro&type=script&index=0&lang.ts","const r=document.querySelector(\".observe\"),t=document.querySelector(\".background-blur\"),e=document.querySelector(\".menu-list\"),s=document.querySelector(\"#hamburger-btn\");function o(){if(!r)return;const n=r.getBoundingClientRect();if(!t||!e||!s)return;n.top<=100?(t.classList.add(\"opacity-100\"),e.classList.add(\"md:text-dark\"),e.classList.remove(\"md:text-white\"),s.classList.add(\"text-dark\")):(t.classList.remove(\"opacity-100\"),e.classList.remove(\"md:text-dark\"),e.classList.add(\"md:text-white\"),s.classList.remove(\"text-dark\"))}window.addEventListener(\"scroll\",o);window.addEventListener(\"resize\",o);document.addEventListener(\"DOMContentLoaded\",o);"]],"assets":["/_astro/exo-2-latin-wght-normal.CQ1lLIdm.woff2","/_astro/exo-2-cyrillic-ext-wght-normal.Duf7tWJ7.woff2","/_astro/exo-2-latin-ext-wght-normal.B5pmZ151.woff2","/_astro/exo-2-cyrillic-wght-normal.DINSYtDx.woff2","/_astro/exo-2-vietnamese-wght-normal.DlPkZmYr.woff2","/_astro/faqs.BJKz-Q-R.jpg","/_astro/wallet1.Crdu0Sou.svg","/_astro/wallet2.BQleZHii.svg","/_astro/card-front.Bc0sfzZd.png","/_astro/wallet3.CmZWgIwM.svg","/_astro/wallet4.syFeCmCH.svg","/_astro/card-back.yytbniav.png","/_astro/join.Cc6vQ_lC.jpg","/_astro/shadow3.BLS3RAKC.png","/_astro/shadow2.DgpNulLo.png","/_astro/shadow.ByjBX_ab.png","/_astro/shadow4.D-Nw3Ihu.png","/_astro/experience1.QqHZuZUB.png","/_astro/experience4.C85ev_yJ.png","/_astro/fundfy_logo.DVQ0pMiW.svg","/_astro/experience2.Dbexz6IK.png","/_astro/experience5.B_O6aAMT.png","/_astro/experience3.Ck7P1O1E.png","/_astro/experience6.Bh0Og7mh.png","/_astro/video.Hl8JYc5T.mp4","/_astro/index.D9PSe9Tg.css","/android-chrome-192x192.png","/android-chrome-512x512.png","/apple-touch-icon.png","/favicon-16x16.png","/favicon-32x32.png","/favicon.ico","/favicon.svg","/site.webmanifest","/_astro/Accordion.astro_astro_type_script_index_0_lang.D0kq99Wn.js","/_astro/Hero.astro_astro_type_script_index_0_lang.B_CSIoqP.js","/_astro/MenuMobile.astro_astro_type_script_index_0_lang.BG10jNCR.js","/_astro/index.lYaGXmCU.js"],"i18n":{"fallbackType":"redirect","strategy":"pathname-prefix-other-locales","locales":["es","en"],"defaultLocale":"en","domainLookupTable":{}},"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"cECEIXFhBa02kXpk5Vq1R1pBXNRto4nYNlSZuviUjWY="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
