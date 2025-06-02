import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_DBLxMUCJ.mjs';
import { manifest } from './manifest_BN1kdj2i.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/_actions/_---path_.astro.mjs');
const _page2 = () => import('./pages/404.astro.mjs');
const _page3 = () => import('./pages/conditions.astro.mjs');
const _page4 = () => import('./pages/cookies.astro.mjs');
const _page5 = () => import('./pages/es/404.astro.mjs');
const _page6 = () => import('./pages/es/conditions.astro.mjs');
const _page7 = () => import('./pages/es/cookies.astro.mjs');
const _page8 = () => import('./pages/es/privacy.astro.mjs');
const _page9 = () => import('./pages/es.astro.mjs');
const _page10 = () => import('./pages/privacy.astro.mjs');
const _page11 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.7.13_@types+node@22.15.18_jiti@2.4.2_lightningcss@1.30.1_rollup@4.40.2_typescript@5.8.3/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["node_modules/.pnpm/astro@5.7.13_@types+node@22.15.18_jiti@2.4.2_lightningcss@1.30.1_rollup@4.40.2_typescript@5.8.3/node_modules/astro/dist/actions/runtime/route.js", _page1],
    ["src/pages/404.astro", _page2],
    ["src/pages/conditions.astro", _page3],
    ["src/pages/cookies.astro", _page4],
    ["src/pages/es/404.astro", _page5],
    ["src/pages/es/conditions.astro", _page6],
    ["src/pages/es/cookies.astro", _page7],
    ["src/pages/es/privacy.astro", _page8],
    ["src/pages/es/index.astro", _page9],
    ["src/pages/privacy.astro", _page10],
    ["src/pages/index.astro", _page11]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_astro-internal_actions.mjs'),
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "middlewareSecret": "02931463-4792-4aa8-9d9a-5ff9487d6a69",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
