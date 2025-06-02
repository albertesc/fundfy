import { c as createComponent, a as createAstro, b as addAttribute, r as renderHead, d as renderComponent, e as renderSlot, f as renderTemplate } from './astro/server_Eu3TDnBi.mjs';
/* empty css                         */
import { $ as $$Header, a as $$Footer } from './Footer_DL3O5-PZ.mjs';

const $$Astro = createAstro();
const $$Legal = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Legal;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><!-- Favicon --><link rel="icon" type="image/png" href="/favicon.ico"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Fundfy</title>${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} <main class="flex flex-col min-h-screen bg-white"> ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} </main> </body></html>`;
}, "/Users/albert/Sites/fundfy/src/layouts/Legal.astro", void 0);

export { $$Legal as $ };
