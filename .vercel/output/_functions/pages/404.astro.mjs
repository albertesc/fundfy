import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DXpXXyzT.mjs';
import { $ as $$Layout } from '../chunks/Layout_BcChRASL.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex flex-col min-h-screen bg-white"> <div class="observe"> <div class="bg-white py-32"> <div class="mx-auto px-4"> <h1 class="text-3xl font-bold mb-4 text-dark text-center">
Error 404: Page Not Found
</h1> <p class="text-dark text-xl text-center max-w-4xl">
We couldn’t find the page you’re looking for.
</p> </div> </div> </div> </main> ` })}`;
}, "/Users/albert/Sites/fundfy/src/pages/404.astro", void 0);

const $$file = "/Users/albert/Sites/fundfy/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
