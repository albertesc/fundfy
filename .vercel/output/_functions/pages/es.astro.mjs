import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DXpXXyzT.mjs';
import { $ as $$Hero, a as $$HeroCard, b as $$HeroBackground, c as $$Faqs, d as $$Contact } from '../chunks/HeroBackground_Df4IHBDE.mjs';
import { $ as $$Layout } from '../chunks/Layout_BGT7fimj.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Card", $$HeroCard, {})} ${renderComponent($$result2, "HeroBackground", $$HeroBackground, {})} <div class="observe"> ${renderComponent($$result2, "Faqs", $$Faqs, {})} ${renderComponent($$result2, "Contact", $$Contact, {})} </div> </main> ` })}`;
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
