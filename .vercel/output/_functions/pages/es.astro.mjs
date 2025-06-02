import { c as createComponent, d as renderComponent, f as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Eu3TDnBi.mjs';
import { $ as $$Layout, a as $$Hero, b as $$HeroCard, c as $$HeroBackground, d as $$Faqs, e as $$Contact } from '../chunks/HeroBackground_Cg46yhCk.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Card", $$HeroCard, {})} ${renderComponent($$result2, "HeroBackground", $$HeroBackground, {})} ${maybeRenderHead()}<div class="observe"> ${renderComponent($$result2, "Faqs", $$Faqs, {})} ${renderComponent($$result2, "Contact", $$Contact, {})} </div> ` })}`;
}, "/Users/albert/Sites/fundfy/src/pages/es/index.astro", void 0);

const $$file = "/Users/albert/Sites/fundfy/src/pages/es/index.astro";
const $$url = "/es";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
