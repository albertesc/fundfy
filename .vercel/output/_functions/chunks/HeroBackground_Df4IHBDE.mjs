import { c as createComponent, j as createAstro, m as maybeRenderHead, l as addAttribute, a as renderTemplate, u as unescapeHTML, r as renderComponent, n as renderScript, k as renderSlot } from './astro/server_DXpXXyzT.mjs';
import { g as getI18N, a as $$Button, c as createSvgComponent, M as MENU_SCROLL_POSITIONS } from './Layout_BGT7fimj.mjs';
import { a as actions } from './_astro_actions_DqCZQxmr.mjs';
/* empty css                         */

const image$1 = new Proxy({"src":"/_astro/join.Cc6vQ_lC.jpg","width":1419,"height":946,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/albert/Sites/fundfy/src/assets/join.jpg";
							}
							
							return target[name];
						}
					});

const $$Astro$6 = createAstro();
const $$Input = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Input;
  const { name, required = false, label, error } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div> <label class="sr-only"${addAttribute(name, "for")}> ${label}: ${required && renderTemplate`<span>*</span>`} </label> <input type="text"${addAttribute(name, "id")}${addAttribute(name, "name")}${addAttribute(required, "required")}${addAttribute(required, "aria-required")} aria-describedby="name-desc"${addAttribute(label, "placeholder")} class="transition-all w-full bg-black/10 px-5 py-3 rounded outline-none focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"> <p id="name-desc" class="error-message text-red-600 text-sm mt-1 hidden" aria-live="polite"> ${error} </p> </div>`;
}, "/Users/albert/Sites/fundfy/src/components/atoms/Input.astro", void 0);

const $$Astro$5 = createAstro();
const $$Textarea = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Textarea;
  const { name, required = false, label } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div> <label class="sr-only"${addAttribute(name, "for")}> ${label}: ${required && renderTemplate`<span>*</span>`} </label> <textarea${addAttribute(name, "id")}${addAttribute(name, "name")}${addAttribute(required, "required")}${addAttribute(required, "aria-required")} aria-describedby="name-desc"${addAttribute(label, "placeholder")} class="transition-all w-full bg-black/10 px-5 py-3 rounded resize-none outline-none focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50" rows="5"></textarea> <div id="name-desc" class="error-message" aria-live="polite"></div> </div>`;
}, "/Users/albert/Sites/fundfy/src/components/atoms/Textarea.astro", void 0);

const $$Astro$4 = createAstro();
const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Contact;
  const { currentLocale } = Astro2;
  const t = getI18N({ currentLocale });
  return renderTemplate`${maybeRenderHead()}<section class="pb-12 md:py-24 bg-white text-dark z-20 relative" id="join"> <div class="relative"> <div class="md:absolute inset-y-0 right-0 w-full md:w-[40%] h-full"> <img${addAttribute(image$1.src, "src")} alt="" class="object-cover object-center w-full h-full md:rounded-bl-3xl md:rounded-tl-3xl mb-12 md:mb-0"> </div> <div class="max-w-[1160px] mx-auto px-4"> <div class="flex flex-wrap -mx-4"> <div class="w-full md:w-1/2 px-4"> <h2 class="mb-12 md:mb-24 text-xl">${unescapeHTML(t.contact.TITLE)}</h2> <h3 class="text-[40px] md:text-[56px] text-balance font-light leading-none mb-7"> ${t.contact.SUBTITLE} </h3> <form${addAttribute(actions.contact, "action")} method="POST" aria-labelledby="form-title" novalidate> <fieldset> <div class="flex flex-col gap-2.5"> ${renderComponent($$result, "Input", $$Input, { "name": "name", "label": t.contact.FORM.NAME, "error": t.contact.FORM.ERROR_NAME, "required": true })} ${renderComponent($$result, "Input", $$Input, { "name": "email", "label": t.contact.FORM.EMAIL, "error": t.contact.FORM.ERROR_EMAIL, "required": true })} ${renderComponent($$result, "Input", $$Input, { "name": "subject", "label": t.contact.FORM.SUBJECT })} ${renderComponent($$result, "Textarea", $$Textarea, { "name": "message", "label": t.contact.FORM.MESSAGE })} </div> <p class="text-sm mt-4 mb-6">${t.contact.FORM.MANDATORY_FIELDS}</p> <span class="success-message text-primary mt-4 hidden"> ${t.contact.FORM.SUCCESS_MESSAGE} </span> ${renderComponent($$result, "Button", $$Button, { "tag": "button" }, { "default": ($$result2) => renderTemplate`${t.contact.FORM.SUBMIT}` })} </fieldset> <small class="text-gray-400 mt-14 block text-[12px]">${unescapeHTML(t.contact.FORM.PRIVACY_POLICY)}</small> </form> </div> </div> </div> </div> </section> ${renderScript($$result, "/Users/albert/Sites/fundfy/src/components/Contact.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/albert/Sites/fundfy/src/components/Contact.astro", void 0);

const image = new Proxy({"src":"/_astro/faqs.BJKz-Q-R.jpg","width":1040,"height":693,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/albert/Sites/fundfy/src/assets/faqs.jpg";
							}
							
							return target[name];
						}
					});

const $$Accordion = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="accordion border-b border-dark w-full"> ${renderSlot($$result, $$slots["default"])} </div> ${renderScript($$result, "/Users/albert/Sites/fundfy/src/components/atoms/Accordion.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/albert/Sites/fundfy/src/components/atoms/Accordion.astro", void 0);

const $$Astro$3 = createAstro();
const $$AccordionItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$AccordionItem;
  const { id, title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button aria-expanded="false"${addAttribute(id, "aria-controls")} class="cursor-pointer font-semibold mb-5 pt-5 border-t border-dark w-full flex justify-between items-center text-left"> ${title} <span class="inline-block rotate-90">➔</span> </button> <div${addAttribute(id, "id")} class="panel" role="region" aria-hidden="true"> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/Users/albert/Sites/fundfy/src/components/atoms/AccordionItem.astro", void 0);

const $$Astro$2 = createAstro();
const $$Faqs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Faqs;
  const { currentLocale } = Astro2;
  const t = getI18N({ currentLocale });
  return renderTemplate`${maybeRenderHead()}<section class="pb-12 md:py-24 bg-[#F2F3F3] text-dark z-30 relative"> <div class="max-w-[1160px] mx-auto px-4 hidden md:block"> <div class="flex flex-wrap justify-end -mx-4"> <div class="w-full md:w-1/2 px-4"> <h2 class="mb-12 md:mb-24 text-xl">${unescapeHTML(t.faqs.TITLE)}</h2> </div> </div> </div> <div class="relative"> <div class="md:absolute inset-y-0 left-0 w-full md:w-[40%] h-full"> <img${addAttribute(image.src, "src")} alt="" class="object-cover object-center w-full h-full md:rounded-br-3xl md:rounded-tr-3xl mb-12 md:mb-0"> </div> <div class="max-w-[1160px] mx-auto px-4"> <div class="flex flex-wrap justify-end -mx-4"> <div class="w-full md:w-1/2 px-4"> <h2 class="mb-12 md:mb-24 text-xl md:hidden">${unescapeHTML(t.faqs.TITLE)}</h2> <h3 class="text-[40px] md:text-[56px] text-balance font-light leading-none mb-16"> ${t.faqs.SUBTITLE} </h3> ${renderComponent($$result, "Accordion", $$Accordion, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "AccordionItem", $$AccordionItem, { "id": "faq1", "title": t.faqs.QUESTION1.TITLE }, { "default": ($$result3) => renderTemplate` <p class="pb-5">${t.faqs.QUESTION1.TEXT}</p> ` })} ${renderComponent($$result2, "AccordionItem", $$AccordionItem, { "id": "faq2", "title": t.faqs.QUESTION2.TITLE }, { "default": ($$result3) => renderTemplate` <p class="pb-5">${t.faqs.QUESTION2.TEXT}</p> ` })} ${renderComponent($$result2, "AccordionItem", $$AccordionItem, { "id": "faq3", "title": t.faqs.QUESTION3.TITLE }, { "default": ($$result3) => renderTemplate` <p class="pb-5">${t.faqs.QUESTION3.TEXT}</p> ` })} ${renderComponent($$result2, "AccordionItem", $$AccordionItem, { "id": "faq4", "title": t.faqs.QUESTION4.TITLE }, { "default": ($$result3) => renderTemplate` <p class="pb-5">${unescapeHTML(t.faqs.QUESTION4.TEXT)}</p> ` })} ` })} </div> </div> </div> </div> </section>`;
}, "/Users/albert/Sites/fundfy/src/components/Faqs.astro", void 0);

const $$Astro$1 = createAstro();
const $$HeroItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$HeroItem;
  const { position = "left" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["hero-item flex items-center h-full absolute top-0 left-0 right-0 bottom-0", [
    { "justify-end": position === "right" },
    { "justify-center": position === "center" }
  ]], "class:list")} data-astro-cid-rkcgevmd> <div${addAttribute(["w-full my-auto flex flex-col justify-start relative", [
    {
      "md:w-1/2 h-[75dvh] md:h-4/5 md:justify-center": position === "right" || position === "left",
      "h-[75dvh] md:h-full md:pt-32 md:justify-between items-center max-h-[920px]": position === "center"
    }
  ]], "class:list")} data-astro-cid-rkcgevmd> ${renderSlot($$result, $$slots["default"])} </div> </div> `;
}, "/Users/albert/Sites/fundfy/src/components/atoms/HeroItem.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$TraidingWidget = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", '<div class="tradingview-widget-container absolute bottom-4 left-0 w-full z-20"> <div class="tradingview-widget-container__widget"></div> <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js" async>\n    {\n      "symbols": [\n        {\n          "proName": "FOREXCOM:SPXUSD",\n          "title": "S&P 500 Index"\n        },\n        {\n          "proName": "FOREXCOM:NSXUSD",\n          "title": "US 100 Cash CFD"\n        },\n        {\n          "proName": "FX_IDC:EURUSD",\n          "title": "EUR to USD"\n        },\n        {\n          "proName": "BITSTAMP:BTCUSD",\n          "title": "Bitcoin"\n        },\n        {\n          "proName": "BITSTAMP:ETHUSD",\n          "title": "Ethereum"\n        }\n      ],\n      "showSymbolLogo": true,\n      "isTransparent": true,\n      "displayMode": "regular",\n      "colorTheme": "dark",\n      "locale": "es"\n    }\n    <\/script> </div>'])), maybeRenderHead());
}, "/Users/albert/Sites/fundfy/src/components/atoms/TraidingWidget.astro", void 0);

const Wallet1 = createSvgComponent({"meta":{"src":"/_astro/wallet1.Crdu0Sou.svg","width":85,"height":85,"format":"svg"},"attributes":{"width":"85","height":"85","viewBox":"0 0 85 85","fill":"none"},"children":"\n            <g clip-path=\"url(#paint0_angular_0_148_clip_path)\" data-figma-skip-parse=\"true\"><g transform=\"matrix(-0.017 0.017 -0.017 -0.017 34.0004 34)\"><foreignObject x=\"-1015.25\" y=\"-1015.25\" width=\"2030.51\" height=\"2030.51\"><div style=\"background:conic-gradient(from 90deg,rgba(145, 189, 180, 1) 0deg,rgba(145, 189, 180, 0) 0.105641deg,rgba(145, 189, 180, 1) 360deg);height:100%;width:100%;opacity:1\">\n                  </div></foreignObject></g></g><path d=\"M51.0004 51C54.2781 47.7223 56.5384 43.5669 57.509 39.0342C58.4797 34.5016 58.1193 29.785 56.4712 25.4524C54.8232 21.1198 51.9578 17.3561 48.2201 14.6144C44.4824 11.8728 40.0318 10.2701 35.4043 9.9994C30.7768 9.72872 26.1697 10.8016 22.1378 13.0888C18.106 15.376 14.8213 18.78 12.6793 22.8908C10.5374 27.0017 9.62954 31.6441 10.0651 36.259C10.5006 40.8739 12.261 45.2645 15.1343 48.9021L34.0004 34L51.0004 51Z\" data-figma-gradient-fill=\"{\"type\":\"GRADIENT_ANGULAR\",\"stops\":[{\"color\":{\"r\":0.56862747669219971,\"g\":0.74117648601531982,\"b\":0.70588237047195435,\"a\":0.0},\"position\":0.00029344836366362870},{\"color\":{\"r\":0.56862747669219971,\"g\":0.74117648601531982,\"b\":0.70588237047195435,\"a\":1.0},\"position\":1.0}],\"stopsVar\":[{\"color\":{\"r\":0.56862747669219971,\"g\":0.74117648601531982,\"b\":0.70588237047195435,\"a\":0.0},\"position\":0.00029344836366362870},{\"color\":{\"r\":0.56862747669219971,\"g\":0.74117648601531982,\"b\":0.70588237047195435,\"a\":1.0},\"position\":1.0}],\"transform\":{\"m00\":-34.000019073486328,\"m01\":-34.000015258789062,\"m02\":68.000389099121094,\"m10\":34.000015258789062,\"m11\":-34.000019073486328,\"m12\":34.000022888183594},\"opacity\":1.0,\"blendMode\":\"NORMAL\",\"visible\":true}\"></path>\n            <g clip-path=\"url(#paint1_angular_0_148_clip_path)\" data-figma-skip-parse=\"true\"><g transform=\"matrix(0.017 -0.017 0.017 0.017 50.9996 51)\"><foreignObject x=\"-1015.25\" y=\"-1015.25\" width=\"2030.51\" height=\"2030.51\"><div style=\"background:conic-gradient(from 90deg,rgba(145, 189, 180, 1) 0deg,rgba(145, 189, 180, 0) 0.105641deg,rgba(145, 189, 180, 1) 360deg);height:100%;width:100%;opacity:1\">\n                  </div></foreignObject></g></g><path d=\"M33.9996 34C30.7408 37.2588 28.4874 41.3855 27.5076 45.8888C26.5278 50.3921 26.863 55.0821 28.4733 59.4002C30.0835 63.7184 32.901 67.4827 36.5901 70.2449C40.2793 73.0071 44.6846 74.6508 49.2814 74.9801C53.8783 75.3095 58.4729 74.3107 62.5182 72.1027C66.5634 69.8947 69.8888 66.5705 72.0982 62.526C74.3077 58.4815 75.3081 53.8873 74.9804 49.2903C74.6527 44.6933 73.0106 40.2874 70.2497 36.5973L50.9996 51L33.9996 34Z\" data-figma-gradient-fill=\"{\"type\":\"GRADIENT_ANGULAR\",\"stops\":[{\"color\":{\"r\":0.56862747669219971,\"g\":0.74117648601531982,\"b\":0.70588237047195435,\"a\":0.0},\"position\":0.00029344836366362870},{\"color\":{\"r\":0.56862747669219971,\"g\":0.74117648601531982,\"b\":0.70588237047195435,\"a\":1.0},\"position\":1.0}],\"stopsVar\":[{\"color\":{\"r\":0.56862747669219971,\"g\":0.74117648601531982,\"b\":0.70588237047195435,\"a\":0.0},\"position\":0.00029344836366362870},{\"color\":{\"r\":0.56862747669219971,\"g\":0.74117648601531982,\"b\":0.70588237047195435,\"a\":1.0},\"position\":1.0}],\"transform\":{\"m00\":34.000019073486328,\"m01\":34.000022888183594,\"m02\":16.999612808227539,\"m10\":-34.000022888183594,\"m11\":34.000019073486328,\"m12\":50.999984741210938},\"opacity\":1.0,\"blendMode\":\"NORMAL\",\"visible\":true}\"></path>\n            <g clip-path=\"url(#paint2_angular_0_148_clip_path)\" data-figma-skip-parse=\"true\"><g transform=\"matrix(-0.017 -0.017 0.017 -0.017 51 33.9998)\"><foreignObject x=\"-1015.25\" y=\"-1015.25\" width=\"2030.51\" height=\"2030.51\"><div style=\"background:conic-gradient(from 90deg,rgba(145, 189, 180, 1) 0deg,rgba(145, 189, 180, 0) 0.105641deg,rgba(145, 189, 180, 1) 360deg);height:100%;width:100%;opacity:1\">\n                  </div></foreignObject></g></g><path d=\"M34 50.9998C37.2777 54.2775 41.4331 56.5378 45.9658 57.5084C50.4984 58.4791 55.215 58.1186 59.5476 56.4706C63.8802 54.8225 67.6439 51.9571 70.3856 48.2194C73.1272 44.4818 74.7299 40.0312 75.0006 35.4037C75.2713 30.7761 74.1984 26.1691 71.9112 22.1372C69.624 18.1053 66.22 14.8207 62.1092 12.6787C57.9983 10.5368 53.3559 9.62892 48.741 10.0645C44.1261 10.5 39.7355 12.2604 36.0979 15.1337L51 33.9998L34 50.9998Z\" data-figma-gradient-fill=\"{\"type\":\"GRADIENT_ANGULAR\",\"stops\":[{\"color\":{\"r\":0.56862747669219971,\"g\":0.74117648601531982,\"b\":0.70588237047195435,\"a\":0.0},\"position\":0.00029344836366362870},{\"color\":{\"r\":0.56862747669219971,\"g\":0.74117648601531982,\"b\":0.70588237047195435,\"a\":1.0},\"position\":1.0}],\"stopsVar\":[{\"color\":{\"r\":0.56862747669219971,\"g\":0.74117648601531982,\"b\":0.70588237047195435,\"a\":0.0},\"position\":0.00029344836366362870},{\"color\":{\"r\":0.56862747669219971,\"g\":0.74117648601531982,\"b\":0.70588237047195435,\"a\":1.0},\"position\":1.0}],\"transform\":{\"m00\":-34.000011444091797,\"m01\":34.000022888183594,\"m02\":50.999977111816406,\"m10\":-34.000022888183594,\"m11\":-34.000011444091797,\"m12\":67.999771118164062},\"opacity\":1.0,\"blendMode\":\"NORMAL\",\"visible\":true}\"></path>\n            <g clip-path=\"url(#paint3_angular_0_148_clip_path)\" data-figma-skip-parse=\"true\"><g transform=\"matrix(0.017 0.017 -0.017 0.017 34 50.9995)\"><foreignObject x=\"-1015.25\" y=\"-1015.25\" width=\"2030.51\" height=\"2030.51\"><div style=\"background:conic-gradient(from 90deg,rgba(145, 189, 180, 1) 0deg,rgba(145, 189, 180, 0) 0.105641deg,rgba(145, 189, 180, 1) 360deg);height:100%;width:100%;opacity:1\">\n                  </div></foreignObject></g></g><path d=\"M51 33.9995C47.7412 30.7407 43.6145 28.4872 39.1112 27.5075C34.6079 26.5277 29.9179 26.8629 25.5998 28.4732C21.2816 30.0834 17.5173 32.9009 14.7551 36.59C11.9929 40.2792 10.3492 44.6845 10.0199 49.2813C9.69048 53.8781 10.6893 58.4728 12.8973 62.518C15.1053 66.5633 18.4295 69.8887 22.474 72.0981C26.5185 74.3076 31.1127 75.308 35.7097 74.9803C40.3067 74.6526 44.7126 73.0105 48.4027 70.2496L34 50.9995L51 33.9995Z\" data-figma-gradient-fill=\"{\"type\":\"GRADIENT_ANGULAR\",\"stops\":[{\"color\":{\"r\":0.56862747669219971,\"g\":0.74117648601531982,\"b\":0.70588237047195435,\"a\":0.0},\"position\":0.00029344836366362870},{\"color\":{\"r\":0.56862747669219971,\"g\":0.74117648601531982,\"b\":0.70588237047195435,\"a\":1.0},\"position\":1.0}],\"stopsVar\":[{\"color\":{\"r\":0.56862747669219971,\"g\":0.74117648601531982,\"b\":0.70588237047195435,\"a\":0.0},\"position\":0.00029344836366362870},{\"color\":{\"r\":0.56862747669219971,\"g\":0.74117648601531982,\"b\":0.70588237047195435,\"a\":1.0},\"position\":1.0}],\"transform\":{\"m00\":34.000019073486328,\"m01\":-34.000019073486328,\"m02\":34.000019073486328,\"m10\":34.000019073486328,\"m11\":34.000019073486328,\"m12\":16.999492645263672},\"opacity\":1.0,\"blendMode\":\"NORMAL\",\"visible\":true}\"></path>\n            <defs>\n              <clipPath id=\"paint0_angular_0_148_clip_path\"><path d=\"M51.0004 51C54.2781 47.7223 56.5384 43.5669 57.509 39.0342C58.4797 34.5016 58.1193 29.785 56.4712 25.4524C54.8232 21.1198 51.9578 17.3561 48.2201 14.6144C44.4824 11.8728 40.0318 10.2701 35.4043 9.9994C30.7768 9.72872 26.1697 10.8016 22.1378 13.0888C18.106 15.376 14.8213 18.78 12.6793 22.8908C10.5374 27.0017 9.62954 31.6441 10.0651 36.259C10.5006 40.8739 12.261 45.2645 15.1343 48.9021L34.0004 34L51.0004 51Z\"></path></clipPath><clipPath id=\"paint1_angular_0_148_clip_path\"><path d=\"M33.9996 34C30.7408 37.2588 28.4874 41.3855 27.5076 45.8888C26.5278 50.3921 26.863 55.0821 28.4733 59.4002C30.0835 63.7184 32.901 67.4827 36.5901 70.2449C40.2793 73.0071 44.6846 74.6508 49.2814 74.9801C53.8783 75.3095 58.4729 74.3107 62.5182 72.1027C66.5634 69.8947 69.8888 66.5705 72.0982 62.526C74.3077 58.4815 75.3081 53.8873 74.9804 49.2903C74.6527 44.6933 73.0106 40.2874 70.2497 36.5973L50.9996 51L33.9996 34Z\"></path></clipPath><clipPath id=\"paint2_angular_0_148_clip_path\"><path d=\"M34 50.9998C37.2777 54.2775 41.4331 56.5378 45.9658 57.5084C50.4984 58.4791 55.215 58.1186 59.5476 56.4706C63.8802 54.8225 67.6439 51.9571 70.3856 48.2194C73.1272 44.4818 74.7299 40.0312 75.0006 35.4037C75.2713 30.7761 74.1984 26.1691 71.9112 22.1372C69.624 18.1053 66.22 14.8207 62.1092 12.6787C57.9983 10.5368 53.3559 9.62892 48.741 10.0645C44.1261 10.5 39.7355 12.2604 36.0979 15.1337L51 33.9998L34 50.9998Z\"></path></clipPath><clipPath id=\"paint3_angular_0_148_clip_path\"><path d=\"M51 33.9995C47.7412 30.7407 43.6145 28.4872 39.1112 27.5075C34.6079 26.5277 29.9179 26.8629 25.5998 28.4732C21.2816 30.0834 17.5173 32.9009 14.7551 36.59C11.9929 40.2792 10.3492 44.6845 10.0199 49.2813C9.69048 53.8781 10.6893 58.4728 12.8973 62.518C15.1053 66.5633 18.4295 69.8887 22.474 72.0981C26.5185 74.3076 31.1127 75.308 35.7097 74.9803C40.3067 74.6526 44.7126 73.0105 48.4027 70.2496L34 50.9995L51 33.9995Z\"></path></clipPath></defs>\n          "});

const Wallet2 = createSvgComponent({"meta":{"src":"/_astro/wallet2.BQleZHii.svg","width":79,"height":79,"format":"svg"},"attributes":{"width":"79","height":"79","viewBox":"0 0 79 79","fill":"none"},"children":"\n            <g clip-path=\"url(#paint0_angular_0_166_clip_path)\" data-figma-skip-parse=\"true\"><g transform=\"matrix(0.0130189 0.0130189 -0.0130189 0.0130189 26.9243 26.9246)\"><foreignObject x=\"-1019.83\" y=\"-1019.83\" width=\"2039.65\" height=\"2039.65\"><div style=\"background:conic-gradient(from 90deg,rgba(174, 145, 189, 1) 0deg,rgba(174, 145, 189, 0) 0.105641deg,rgba(174, 145, 189, 1) 360deg);height:100%;width:100%;opacity:1\">\n                  </div></foreignObject></g></g><path d=\"M26.9243 52.9624C12.6695 38.7076 12.6695 15.1415 26.9243 0.886758L52.9621 26.9246L26.9243 52.9624Z\" data-figma-gradient-fill=\"{\"type\":\"GRADIENT_ANGULAR\",\"stops\":[{\"color\":{\"r\":0.68235296010971069,\"g\":0.56862747669219971,\"b\":0.74117648601531982,\"a\":0.0},\"position\":0.00029344836366362870},{\"color\":{\"r\":0.68235296010971069,\"g\":0.56862747669219971,\"b\":0.74117648601531982,\"a\":1.0},\"position\":1.0}],\"stopsVar\":[{\"color\":{\"r\":0.68235296010971069,\"g\":0.56862747669219971,\"b\":0.74117648601531982,\"a\":0.0},\"position\":0.00029344836366362870},{\"color\":{\"r\":0.68235296010971069,\"g\":0.56862747669219971,\"b\":0.74117648601531982,\"a\":1.0},\"position\":1.0}],\"transform\":{\"m00\":26.037832260131836,\"m01\":-26.037834167480469,\"m02\":26.924312591552734,\"m10\":26.037803649902344,\"m11\":26.037801742553711,\"m12\":0.88675516843795776},\"opacity\":1.0,\"blendMode\":\"NORMAL\",\"visible\":true}\"></path>\n            <g clip-path=\"url(#paint1_angular_0_166_clip_path)\" data-figma-skip-parse=\"true\"><g transform=\"matrix(0.0130189 -0.0130189 0.0130189 0.0130189 26.9245 52.9624)\"><foreignObject x=\"-1019.83\" y=\"-1019.83\" width=\"2039.65\" height=\"2039.65\"><div style=\"background:conic-gradient(from 90deg,rgba(174, 145, 189, 1) 0deg,rgba(174, 145, 189, 0) 0.105641deg,rgba(174, 145, 189, 1) 360deg);height:100%;width:100%;opacity:1\">\n                  </div></foreignObject></g></g><path d=\"M52.9623 52.9624C38.7075 67.2172 15.1414 67.2172 0.886666 52.9624L26.9245 26.9246L52.9623 52.9624Z\" data-figma-gradient-fill=\"{\"type\":\"GRADIENT_ANGULAR\",\"stops\":[{\"color\":{\"r\":0.68235296010971069,\"g\":0.56862747669219971,\"b\":0.74117648601531982,\"a\":0.0},\"position\":0.00029344836366362870},{\"color\":{\"r\":0.68235296010971069,\"g\":0.56862747669219971,\"b\":0.74117648601531982,\"a\":1.0},\"position\":1.0}],\"stopsVar\":[{\"color\":{\"r\":0.68235296010971069,\"g\":0.56862747669219971,\"b\":0.74117648601531982,\"a\":0.0},\"position\":0.00029344836366362870},{\"color\":{\"r\":0.68235296010971069,\"g\":0.56862747669219971,\"b\":0.74117648601531982,\"a\":1.0},\"position\":1.0}],\"transform\":{\"m00\":26.037834167480469,\"m01\":26.037832260131836,\"m02\":0.88666337728500366,\"m10\":-26.037801742553711,\"m11\":26.037803649902344,\"m12\":52.962436676025391},\"opacity\":1.0,\"blendMode\":\"NORMAL\",\"visible\":true}\"></path>\n            <g clip-path=\"url(#paint2_angular_0_166_clip_path)\" data-figma-skip-parse=\"true\"><g transform=\"matrix(-0.0130189 0.0130189 -0.0130189 -0.0130189 52.962 26.9248)\"><foreignObject x=\"-1019.83\" y=\"-1019.83\" width=\"2039.65\" height=\"2039.65\"><div style=\"background:conic-gradient(from 90deg,rgba(174, 145, 189, 1) 0deg,rgba(174, 145, 189, 0) 0.105641deg,rgba(174, 145, 189, 1) 360deg);height:100%;width:100%;opacity:1\">\n                  </div></foreignObject></g></g><path d=\"M26.9242 26.9248C41.179 12.67 64.7451 12.67 78.9999 26.9248L52.962 52.9626L26.9242 26.9248Z\" data-figma-gradient-fill=\"{\"type\":\"GRADIENT_ANGULAR\",\"stops\":[{\"color\":{\"r\":0.68235296010971069,\"g\":0.56862747669219971,\"b\":0.74117648601531982,\"a\":0.0},\"position\":0.00029344836366362870},{\"color\":{\"r\":0.68235296010971069,\"g\":0.56862747669219971,\"b\":0.74117648601531982,\"a\":1.0},\"position\":1.0}],\"stopsVar\":[{\"color\":{\"r\":0.68235296010971069,\"g\":0.56862747669219971,\"b\":0.74117648601531982,\"a\":0.0},\"position\":0.00029344836366362870},{\"color\":{\"r\":0.68235296010971069,\"g\":0.56862747669219971,\"b\":0.74117648601531982,\"a\":1.0},\"position\":1.0}],\"transform\":{\"m00\":-26.037834167480469,\"m01\":-26.037832260131836,\"m02\":78.999870300292969,\"m10\":26.037801742553711,\"m11\":-26.037803649902344,\"m12\":26.924768447875977},\"opacity\":1.0,\"blendMode\":\"NORMAL\",\"visible\":true}\"></path>\n            <g clip-path=\"url(#paint3_angular_0_166_clip_path)\" data-figma-skip-parse=\"true\"><g transform=\"matrix(-0.0130189 -0.0130189 0.0130189 -0.0130189 52.9622 52.9626)\"><foreignObject x=\"-1019.83\" y=\"-1019.83\" width=\"2039.65\" height=\"2039.65\"><div style=\"background:conic-gradient(from 90deg,rgba(174, 145, 189, 1) 0deg,rgba(174, 145, 189, 0) 0.105641deg,rgba(174, 145, 189, 1) 360deg);height:100%;width:100%;opacity:1\">\n                  </div></foreignObject></g></g><path d=\"M52.9622 26.9248C67.217 41.1796 67.217 64.7457 52.9622 79.0004L26.9244 52.9626L52.9622 26.9248Z\" data-figma-gradient-fill=\"{\"type\":\"GRADIENT_ANGULAR\",\"stops\":[{\"color\":{\"r\":0.68235296010971069,\"g\":0.56862747669219971,\"b\":0.74117648601531982,\"a\":0.0},\"position\":0.00029344836366362870},{\"color\":{\"r\":0.68235296010971069,\"g\":0.56862747669219971,\"b\":0.74117648601531982,\"a\":1.0},\"position\":1.0}],\"stopsVar\":[{\"color\":{\"r\":0.68235296010971069,\"g\":0.56862747669219971,\"b\":0.74117648601531982,\"a\":0.0},\"position\":0.00029344836366362870},{\"color\":{\"r\":0.68235296010971069,\"g\":0.56862747669219971,\"b\":0.74117648601531982,\"a\":1.0},\"position\":1.0}],\"transform\":{\"m00\":-26.037832260131836,\"m01\":26.037834167480469,\"m02\":52.962223052978516,\"m10\":-26.037803649902344,\"m11\":-26.037801742553711,\"m12\":79.000450134277344},\"opacity\":1.0,\"blendMode\":\"NORMAL\",\"visible\":true}\"></path>\n            <defs>\n              <clipPath id=\"paint0_angular_0_166_clip_path\"><path d=\"M26.9243 52.9624C12.6695 38.7076 12.6695 15.1415 26.9243 0.886758L52.9621 26.9246L26.9243 52.9624Z\"></path></clipPath><clipPath id=\"paint1_angular_0_166_clip_path\"><path d=\"M52.9623 52.9624C38.7075 67.2172 15.1414 67.2172 0.886666 52.9624L26.9245 26.9246L52.9623 52.9624Z\"></path></clipPath><clipPath id=\"paint2_angular_0_166_clip_path\"><path d=\"M26.9242 26.9248C41.179 12.67 64.7451 12.67 78.9999 26.9248L52.962 52.9626L26.9242 26.9248Z\"></path></clipPath><clipPath id=\"paint3_angular_0_166_clip_path\"><path d=\"M52.9622 26.9248C67.217 41.1796 67.217 64.7457 52.9622 79.0004L26.9244 52.9626L52.9622 26.9248Z\"></path></clipPath></defs>\n          "});

const Wallet3 = createSvgComponent({"meta":{"src":"/_astro/wallet3.CmZWgIwM.svg","width":80,"height":80,"format":"svg"},"attributes":{"width":"80","height":"80","viewBox":"0 0 80 80","fill":"none"},"children":"\n            <g clip-path=\"url(#paint0_angular_45_7_clip_path)\" data-figma-skip-parse=\"true\"><g transform=\"matrix(2.98551e-08 0.0190167 -0.0190167 -3.10585e-08 39.9999 26.0336)\"><foreignObject x=\"-1019\" y=\"-1019\" width=\"2037.99\" height=\"2037.99\"><div style=\"background:conic-gradient(from 90deg,rgba(145, 167, 189, 1) 0deg,rgba(145, 167, 189, 0) 0.105641deg,rgba(145, 167, 189, 1) 360deg);height:100%;width:100%;opacity:1\">\n                  </div></foreignObject></g></g><path d=\"M20.9832 7.01685L50.3471 7.01689C55.1351 7.0169 59.0166 10.8984 59.0166 15.6864L59.0166 36.3808C59.0166 41.1689 55.1352 45.0503 50.3472 45.0503L20.9832 45.0503L20.9832 7.01685Z\" data-figma-gradient-fill=\"{\"type\":\"GRADIENT_ANGULAR\",\"stops\":[{\"color\":{\"r\":0.56862747669219971,\"g\":0.65490198135375977,\"b\":0.74117648601531982,\"a\":0.0},\"position\":0.00029344836366362870},{\"color\":{\"r\":0.56862747669219971,\"g\":0.65490198135375977,\"b\":0.74117648601531982,\"a\":1.0},\"position\":1.0}],\"stopsVar\":[{\"color\":{\"r\":0.56862747669219971,\"g\":0.65490198135375977,\"b\":0.74117648601531982,\"a\":0.0},\"position\":0.00029344836366362870},{\"color\":{\"r\":0.56862747669219971,\"g\":0.65490198135375977,\"b\":0.74117648601531982,\"a\":1.0},\"position\":1.0}],\"transform\":{\"m00\":5.9710146160796285e-05,\"m01\":-38.033412933349609,\"m02\":59.016574859619141,\"m10\":38.033412933349609,\"m11\":-6.2117083871271461e-05,\"m12\":7.0169072151184082},\"opacity\":1.0,\"blendMode\":\"NORMAL\",\"visible\":true}\"></path>\n            <g clip-path=\"url(#paint1_angular_45_7_clip_path)\" data-figma-skip-parse=\"true\"><g transform=\"matrix(-0.0190167 -3.10585e-08 -2.9855e-08 -0.0190167 54.2925 40.326)\"><foreignObject x=\"-1019\" y=\"-1019\" width=\"2037.99\" height=\"2037.99\"><div style=\"background:conic-gradient(from 90deg,rgba(145, 167, 189, 1) 0deg,rgba(145, 167, 189, 0) 0.105641deg,rgba(145, 167, 189, 1) 360deg);height:100%;width:100%;opacity:1\">\n                  </div></foreignObject></g></g><path d=\"M73.3092 21.3093L73.3093 50.6733C73.3093 55.4613 69.4278 59.3427 64.6398 59.3427L43.9453 59.3427C39.1573 59.3427 35.2758 55.4612 35.2758 50.6732L35.2758 21.3093L73.3092 21.3093Z\" data-figma-gradient-fill=\"{\"type\":\"GRADIENT_ANGULAR\",\"stops\":[{\"color\":{\"r\":0.56862747669219971,\"g\":0.65490198135375977,\"b\":0.74117648601531982,\"a\":0.0},\"position\":0.00029344836366362870},{\"color\":{\"r\":0.56862747669219971,\"g\":0.65490198135375977,\"b\":0.74117648601531982,\"a\":1.0},\"position\":1.0}],\"stopsVar\":[{\"color\":{\"r\":0.56862747669219971,\"g\":0.65490198135375977,\"b\":0.74117648601531982,\"a\":0.0},\"position\":0.00029344836366362870},{\"color\":{\"r\":0.56862747669219971,\"g\":0.65490198135375977,\"b\":0.74117648601531982,\"a\":1.0},\"position\":1.0}],\"transform\":{\"m00\":-38.033412933349609,\"m01\":-5.9710051573347300e-05,\"m02\":73.309265136718750,\"m10\":-6.2116989283822477e-05,\"m11\":-38.033412933349609,\"m12\":59.342746734619141},\"opacity\":1.0,\"blendMode\":\"NORMAL\",\"visible\":true}\"></path>\n            <g clip-path=\"url(#paint2_angular_45_7_clip_path)\" data-figma-skip-parse=\"true\"><g transform=\"matrix(0.0190167 3.10585e-08 2.9855e-08 0.0190167 25.7075 40.3258)\"><foreignObject x=\"-1019\" y=\"-1019\" width=\"2037.99\" height=\"2037.99\"><div style=\"background:conic-gradient(from 90deg,rgba(145, 167, 189, 1) 0deg,rgba(145, 167, 189, 0) 0.105641deg,rgba(145, 167, 189, 1) 360deg);height:100%;width:100%;opacity:1\">\n                  </div></foreignObject></g></g><path d=\"M6.6908 59.3425L6.69075 29.9786C6.69074 25.1906 10.5722 21.3091 15.3602 21.3091L36.0547 21.3092C40.8427 21.3092 44.7242 25.1906 44.7242 29.9787L44.7242 59.3426L6.6908 59.3425Z\" data-figma-gradient-fill=\"{\"type\":\"GRADIENT_ANGULAR\",\"stops\":[{\"color\":{\"r\":0.56862747669219971,\"g\":0.65490198135375977,\"b\":0.74117648601531982,\"a\":0.0},\"position\":0.00029344836366362870},{\"color\":{\"r\":0.56862747669219971,\"g\":0.65490198135375977,\"b\":0.74117648601531982,\"a\":1.0},\"position\":1.0}],\"stopsVar\":[{\"color\":{\"r\":0.56862747669219971,\"g\":0.65490198135375977,\"b\":0.74117648601531982,\"a\":0.0},\"position\":0.00029344836366362870},{\"color\":{\"r\":0.56862747669219971,\"g\":0.65490198135375977,\"b\":0.74117648601531982,\"a\":1.0},\"position\":1.0}],\"transform\":{\"m00\":38.033412933349609,\"m01\":5.9710051573347300e-05,\"m02\":6.6907358169555664,\"m10\":6.2116989283822477e-05,\"m11\":38.033412933349609,\"m12\":21.309110641479492},\"opacity\":1.0,\"blendMode\":\"NORMAL\",\"visible\":true}\"></path>\n            <g clip-path=\"url(#paint3_angular_45_7_clip_path)\" data-figma-skip-parse=\"true\"><g transform=\"matrix(-2.82521e-08 -0.0190167 0.0190167 3.26615e-08 39.9999 54.618)\"><foreignObject x=\"-1019\" y=\"-1019\" width=\"2037.99\" height=\"2037.99\"><div style=\"background:conic-gradient(from 90deg,rgba(145, 167, 189, 1) 0deg,rgba(145, 167, 189, 0) 0.105641deg,rgba(145, 167, 189, 1) 360deg);height:100%;width:100%;opacity:1\">\n                  </div></foreignObject></g></g><path d=\"M59.0167 73.6348L29.6527 73.6347C24.8647 73.6347 20.9832 69.7532 20.9832 64.9652L20.9832 44.2708C20.9832 39.4827 24.8646 35.6013 29.6527 35.6013L59.0166 35.6014L59.0167 73.6348Z\" data-figma-gradient-fill=\"{\"type\":\"GRADIENT_ANGULAR\",\"stops\":[{\"color\":{\"r\":0.56862747669219971,\"g\":0.65490198135375977,\"b\":0.74117648601531982,\"a\":0.0},\"position\":0.00029344836366362870},{\"color\":{\"r\":0.56862747669219971,\"g\":0.65490198135375977,\"b\":0.74117648601531982,\"a\":1.0},\"position\":1.0}],\"stopsVar\":[{\"color\":{\"r\":0.56862747669219971,\"g\":0.65490198135375977,\"b\":0.74117648601531982,\"a\":0.0},\"position\":0.00029344836366362870},{\"color\":{\"r\":0.56862747669219971,\"g\":0.65490198135375977,\"b\":0.74117648601531982,\"a\":1.0},\"position\":1.0}],\"transform\":{\"m00\":-5.6504166423110291e-05,\"m01\":38.033412933349609,\"m02\":20.983243942260742,\"m10\":-38.033412933349609,\"m11\":6.5323059970978647e-05,\"m12\":73.634704589843750},\"opacity\":1.0,\"blendMode\":\"NORMAL\",\"visible\":true}\"></path>\n            <defs>\n              <clipPath id=\"paint0_angular_45_7_clip_path\"><path d=\"M20.9832 7.01685L50.3471 7.01689C55.1351 7.0169 59.0166 10.8984 59.0166 15.6864L59.0166 36.3808C59.0166 41.1689 55.1352 45.0503 50.3472 45.0503L20.9832 45.0503L20.9832 7.01685Z\"></path></clipPath><clipPath id=\"paint1_angular_45_7_clip_path\"><path d=\"M73.3092 21.3093L73.3093 50.6733C73.3093 55.4613 69.4278 59.3427 64.6398 59.3427L43.9453 59.3427C39.1573 59.3427 35.2758 55.4612 35.2758 50.6732L35.2758 21.3093L73.3092 21.3093Z\"></path></clipPath><clipPath id=\"paint2_angular_45_7_clip_path\"><path d=\"M6.6908 59.3425L6.69075 29.9786C6.69074 25.1906 10.5722 21.3091 15.3602 21.3091L36.0547 21.3092C40.8427 21.3092 44.7242 25.1906 44.7242 29.9787L44.7242 59.3426L6.6908 59.3425Z\"></path></clipPath><clipPath id=\"paint3_angular_45_7_clip_path\"><path d=\"M59.0167 73.6348L29.6527 73.6347C24.8647 73.6347 20.9832 69.7532 20.9832 64.9652L20.9832 44.2708C20.9832 39.4827 24.8646 35.6013 29.6527 35.6013L59.0166 35.6014L59.0167 73.6348Z\"></path></clipPath></defs>\n          "});

const Wallet4 = createSvgComponent({"meta":{"src":"/_astro/wallet4.syFeCmCH.svg","width":72,"height":73,"format":"svg"},"attributes":{"width":"72","height":"73","viewBox":"0 0 72 73","fill":"none"},"children":"\n            <g clip-path=\"url(#paint0_angular_0_202_clip_path)\" data-figma-skip-parse=\"true\"><g transform=\"matrix(-0.0239604 0.0240002 -0.0239604 -0.0240002 47.9207 24.7786)\"><foreignObject x=\"-1384.16\" y=\"-1384.16\" width=\"2768.32\" height=\"2768.32\"><div style=\"background:conic-gradient(from 90deg,rgba(189, 145, 160, 1) 0deg,rgba(189, 145, 160, 0) 0.105641deg,rgba(189, 145, 160, 1) 360deg);height:100%;width:100%;opacity:1\">\n                  </div></foreignObject></g></g><path d=\"M54.4212 5.46443C62.1811 3.38172 69.2856 10.4803 67.2093 18.242L56.6906 57.5635L15.19 15.9939L54.4212 5.46443Z\" data-figma-gradient-fill=\"{\"type\":\"GRADIENT_ANGULAR\",\"stops\":[{\"color\":{\"r\":0.74117648601531982,\"g\":0.56862747669219971,\"b\":0.62745100259780884,\"a\":0.0},\"position\":0.00029344836366362870},{\"color\":{\"r\":0.74117648601531982,\"g\":0.56862747669219971,\"b\":0.62745100259780884,\"a\":1.0},\"position\":1.0}],\"stopsVar\":[{\"color\":{\"r\":0.74117648601531982,\"g\":0.56862747669219971,\"b\":0.62745100259780884,\"a\":0.0},\"position\":0.00029344836366362870},{\"color\":{\"r\":0.74117648601531982,\"g\":0.56862747669219971,\"b\":0.62745100259780884,\"a\":1.0},\"position\":1.0}],\"transform\":{\"m00\":-47.920814514160156,\"m01\":-47.920814514160156,\"m02\":95.841468811035156,\"m10\":48.000461578369141,\"m11\":-48.000461578369141,\"m12\":24.778585433959961},\"opacity\":1.0,\"blendMode\":\"NORMAL\",\"visible\":true}\"></path>\n            <g clip-path=\"url(#paint1_angular_0_202_clip_path)\" data-figma-skip-parse=\"true\"><g transform=\"matrix(-0.0239604 -0.0240002 0.0239604 -0.0240002 48.0399 48.6174)\"><foreignObject x=\"-1384.16\" y=\"-1384.16\" width=\"2768.33\" height=\"2768.33\"><div style=\"background:conic-gradient(from 90deg,rgba(189, 145, 160, 1) 0deg,rgba(189, 145, 160, 0) 0.105641deg,rgba(189, 145, 160, 1) 360deg);height:100%;width:100%;opacity:1\">\n                  </div></foreignObject></g></g><path d=\"M67.3285 55.154C69.4047 62.9156 62.3002 70.0143 54.5403 67.9316L15.3091 57.4021L56.8098 15.8325L67.3285 55.154Z\" data-figma-gradient-fill=\"{\"type\":\"GRADIENT_ANGULAR\",\"stops\":[{\"color\":{\"r\":0.74117648601531982,\"g\":0.56862747669219971,\"b\":0.62745100259780884,\"a\":0.0},\"position\":0.00029344836366362870},{\"color\":{\"r\":0.74117648601531982,\"g\":0.56862747669219971,\"b\":0.62745100259780884,\"a\":1.0},\"position\":1.0}],\"stopsVar\":[{\"color\":{\"r\":0.74117648601531982,\"g\":0.56862747669219971,\"b\":0.62745100259780884,\"a\":0.0},\"position\":0.00029344836366362870},{\"color\":{\"r\":0.74117648601531982,\"g\":0.56862747669219971,\"b\":0.62745100259780884,\"a\":1.0},\"position\":1.0}],\"transform\":{\"m00\":-47.920814514160156,\"m01\":47.920825958251953,\"m02\":48.039867401123047,\"m10\":-48.000465393066406,\"m11\":-48.000457763671875,\"m12\":96.617881774902344},\"opacity\":1.0,\"blendMode\":\"NORMAL\",\"visible\":true}\"></path>\n            <g clip-path=\"url(#paint2_angular_0_202_clip_path)\" data-figma-skip-parse=\"true\"><g transform=\"matrix(0.0239604 -0.0240002 0.0239604 0.0240002 23.9605 48.7781)\"><foreignObject x=\"-1384.16\" y=\"-1384.16\" width=\"2768.32\" height=\"2768.32\"><div style=\"background:conic-gradient(from 90deg,rgba(189, 145, 160, 1) 0deg,rgba(189, 145, 160, 0) 0.105641deg,rgba(189, 145, 160, 1) 360deg);height:100%;width:100%;opacity:1\">\n                  </div></foreignObject></g></g><path d=\"M17.4598 68.0922C9.69988 70.1749 2.59534 63.0763 4.67161 55.3147L15.1903 15.9932L56.6909 57.5628L17.4598 68.0922Z\" data-figma-gradient-fill=\"{\"type\":\"GRADIENT_ANGULAR\",\"stops\":[{\"color\":{\"r\":0.74117648601531982,\"g\":0.56862747669219971,\"b\":0.62745100259780884,\"a\":0.0},\"position\":0.00029344836366362870},{\"color\":{\"r\":0.74117648601531982,\"g\":0.56862747669219971,\"b\":0.62745100259780884,\"a\":1.0},\"position\":1.0}],\"stopsVar\":[{\"color\":{\"r\":0.74117648601531982,\"g\":0.56862747669219971,\"b\":0.62745100259780884,\"a\":0.0},\"position\":0.00029344836366362870},{\"color\":{\"r\":0.74117648601531982,\"g\":0.56862747669219971,\"b\":0.62745100259780884,\"a\":1.0},\"position\":1.0}],\"transform\":{\"m00\":47.920818328857422,\"m01\":47.920810699462891,\"m02\":-23.960363388061523,\"m10\":-48.000461578369141,\"m11\":48.000469207763672,\"m12\":48.778141021728516},\"opacity\":1.0,\"blendMode\":\"NORMAL\",\"visible\":true}\"></path>\n            <g clip-path=\"url(#paint3_angular_0_202_clip_path)\" data-figma-skip-parse=\"true\"><g transform=\"matrix(0.0239604 0.0240002 -0.0239604 0.0240002 24.0805 24.9002)\"><foreignObject x=\"-1384.16\" y=\"-1384.16\" width=\"2768.32\" height=\"2768.32\"><div style=\"background:conic-gradient(from 90deg,rgba(189, 145, 160, 1) 0deg,rgba(189, 145, 160, 0) 0.105641deg,rgba(189, 145, 160, 1) 360deg);height:100%;width:100%;opacity:1\">\n                  </div></foreignObject></g></g><path d=\"M4.79173 18.3636C2.71546 10.6019 9.81999 3.50329 17.5799 5.58601L56.8111 16.1154L15.3104 57.6851L4.79173 18.3636Z\" data-figma-gradient-fill=\"{\"type\":\"GRADIENT_ANGULAR\",\"stops\":[{\"color\":{\"r\":0.74117648601531982,\"g\":0.56862747669219971,\"b\":0.62745100259780884,\"a\":0.0},\"position\":0.00029344836366362870},{\"color\":{\"r\":0.74117648601531982,\"g\":0.56862747669219971,\"b\":0.62745100259780884,\"a\":1.0},\"position\":1.0}],\"stopsVar\":[{\"color\":{\"r\":0.74117648601531982,\"g\":0.56862747669219971,\"b\":0.62745100259780884,\"a\":0.0},\"position\":0.00029344836366362870},{\"color\":{\"r\":0.74117648601531982,\"g\":0.56862747669219971,\"b\":0.62745100259780884,\"a\":1.0},\"position\":1.0}],\"transform\":{\"m00\":47.920814514160156,\"m01\":-47.920814514160156,\"m02\":24.080488204956055,\"m10\":48.000461578369141,\"m11\":48.000461578369141,\"m12\":-23.100290298461914},\"opacity\":1.0,\"blendMode\":\"NORMAL\",\"visible\":true}\"></path>\n            <defs>\n              <clipPath id=\"paint0_angular_0_202_clip_path\"><path d=\"M54.4212 5.46443C62.1811 3.38172 69.2856 10.4803 67.2093 18.242L56.6906 57.5635L15.19 15.9939L54.4212 5.46443Z\"></path></clipPath><clipPath id=\"paint1_angular_0_202_clip_path\"><path d=\"M67.3285 55.154C69.4047 62.9156 62.3002 70.0143 54.5403 67.9316L15.3091 57.4021L56.8098 15.8325L67.3285 55.154Z\"></path></clipPath><clipPath id=\"paint2_angular_0_202_clip_path\"><path d=\"M17.4598 68.0922C9.69988 70.1749 2.59534 63.0763 4.67161 55.3147L15.1903 15.9932L56.6909 57.5628L17.4598 68.0922Z\"></path></clipPath><clipPath id=\"paint3_angular_0_202_clip_path\"><path d=\"M4.79173 18.3636C2.71546 10.6019 9.81999 3.50329 17.5799 5.58601L56.8111 16.1154L15.3104 57.6851L4.79173 18.3636Z\"></path></clipPath></defs>\n          "});

const $$Astro = createAstro();
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Hero;
  const { currentLocale } = Astro2;
  const t = getI18N({ currentLocale });
  return renderTemplate`${maybeRenderHead()}<section class="text-wrapper w-screen h-screen absolute top-0 left-0 pt-24 md:pr-4 md:pt-0 z-30"> ${renderComponent($$result, "HeroItem", $$HeroItem, {}, { "default": ($$result2) => renderTemplate` <div class="relative h-32 md:h-72 mt-6 md:mt-0"> <div class="hero-text-1 absolute left-0 w-full px-4"> <h2 class="text-[32px] lg:text-[56px] font-light leading-none mb-3.5 text-balance"> ${t.hero.SLIDE1.TITLE} </h2> <p class="text-sm md:text-xl font-semibold text-primary text-balance"> ${t.hero.SLIDE1.SUBTITLE} </p> <p class="text-sm md:text-lg text-primary text-balance opacity-50"> ${t.hero.SLIDE1.TEXT} </p> </div> <div class="hero-text-2 absolute left-0 w-full px-4"> <h2 class="text-[32px] lg:text-[56px] font-light leading-none mb-3.5 text-balance"> ${t.hero.SLIDE2.TITLE} </h2> <p class="text-sm md:text-xl font-semibold text-primary text-balance"> ${t.hero.SLIDE2.SUBTITLE} </p> </div> <div class="hero-text-3 absolute left-0 w-full px-4"> <h2 class="text-[32px] lg:text-[56px] font-light leading-none mb-3.5 text-balance"> ${t.hero.SLIDE3.TITLE} </h2> <p class="text-sm md:text-xl font-semibold text-primary text-balance"> ${t.hero.SLIDE3.SUBTITLE} </p> </div> </div> <div class="cta-buttons flex gap-5 mt-16 px-4"> ${renderComponent($$result2, "Button", $$Button, { "tag": "a", "variant": "ghost", "className": "animated-link", "dataTime": MENU_SCROLL_POSITIONS.INVESTMENT }, { "default": ($$result3) => renderTemplate`${t.buttons.KNOWMORE}` })} ${renderComponent($$result2, "Button", $$Button, { "tag": "a", "variant": "secondary", "className": "animated-link", "dataTime": MENU_SCROLL_POSITIONS.CONTACT }, { "default": ($$result3) => renderTemplate`${t.buttons.JOINCLUB}` })} </div> ` })} ${renderComponent($$result, "HeroItem", $$HeroItem, { "position": "right" }, { "default": ($$result2) => renderTemplate` <div class="relative h-48 md:h-80"> <div class="hero-text-4 absolute left-0 w-full px-4"> <h2 class="text-[32px] lg:text-[56px] font-light leading-none mb-3.5 text-balance"> ${t.hero.SLIDE4.TITLE} </h2> <p class="text-sm md:text-xl font-semibold text-primary text-balance"> ${t.hero.SLIDE4.SUBTITLE} </p> <div class="color-card flex gap-2 items-center mt-5 border border-primary rounded-2xl px-4 pt-1 pb-2 max-w-[347px] w-full"> ${renderComponent($$result2, "Wallet1", Wallet1, {})} <div> <p class="text-sm md:text-xl font-semibold text-primary text-balance"> ${t.hero.SLIDE4.WALLET_TITLE} </p> <p class="text-balance leading-5 text-[15px]"> ${t.hero.SLIDE4.WALLET_TEXT} </p> </div> </div> </div> <div class="hero-text-5 absolute left-0 w-full px-4"> <h2 class="text-[32px] lg:text-[56px] font-light leading-none mb-3.5 text-balance"> ${t.hero.SLIDE5.TITLE} </h2> <p class="text-sm md:text-xl font-semibold text-[#AE91BD] text-balance"> ${t.hero.SLIDE5.SUBTITLE} </p> <div class="color-card flex gap-2 items-center mt-5 border border-[#AE91BD] rounded-2xl px-4 pt-1 pb-2 max-w-[347px] w-full"> ${renderComponent($$result2, "Wallet2", Wallet2, {})} <div> <p class="text-sm md:text-xl font-semibold text-[#AE91BD] text-balance"> ${t.hero.SLIDE5.WALLET_TITLE} </p> <p class="text-balance leading-5 text-[15px]"> ${t.hero.SLIDE5.WALLET_TEXT} </p> </div> </div> </div> <div class="hero-text-6 absolute left-0 w-full px-4"> <h2 class="text-[32px] lg:text-[56px] font-light leading-none mb-3.5 text-balance"> ${t.hero.SLIDE6.TITLE} </h2> <p class="text-sm md:text-xl font-semibold text-[#91A7BD] text-balance"> ${t.hero.SLIDE6.SUBTITLE} </p> <div class="color-card flex gap-2 items-center mt-5 border border-[#91A7BD] rounded-2xl px-4 pt-1 pb-2 max-w-[347px] w-full"> ${renderComponent($$result2, "Wallet3", Wallet3, {})} <div> <p class="text-xl font-semibold text-[#91A7BD] text-balance"> ${t.hero.SLIDE6.WALLET_TITLE} </p> <p class="text-balance leading-5 text-[15px]"> ${t.hero.SLIDE6.WALLET_TEXT} </p> </div> </div> </div> <div class="hero-text-7 absolute left-0 w-full px-4"> <h2 class="text-[32px] lg:text-[56px] font-light leading-none mb-3.5 text-balance"> ${t.hero.SLIDE7.TITLE} </h2> <p class="text-sm md:text-xl font-semibold text-[#BD91A0] text-balance"> ${t.hero.SLIDE7.SUBTITLE} </p> <div class="color-card flex gap-2 items-center mt-5 border border-[#BD91A0] rounded-2xl px-4 pt-1 pb-2 max-w-[347px] w-full"> ${renderComponent($$result2, "Wallet4", Wallet4, {})} <div> <p class="text-sm md:text-xl font-semibold text-[#BD91A0] text-balance"> ${t.hero.SLIDE7.WALLET_TITLE} </p> <p class="text-balance leading-5 text-[15px]"> ${t.hero.SLIDE7.WALLET_TEXT} </p> </div> </div> </div> </div> <div class="app-button flex gap-5 mt-16 px-4"> ${renderComponent($$result2, "Button", $$Button, { "tag": "a", "variant": "secondary", "href": "#" }, { "default": ($$result3) => renderTemplate`${t.buttons.LAUNCHAPP}<span class="block ml-2 group-hover:translate-x-1 transition-transform">➔</span> ` })} </div> ` })} ${renderComponent($$result, "HeroItem", $$HeroItem, { "position": "center" }, { "default": ($$result2) => renderTemplate` <div class="hero-text-8 w-full px-4"> <p class="md:text-center text-xl text-primary mb-3 md:mb-8 text-balance"> <strong class="text-semibold">${t.hero.SLIDE8.STRONG_TEXT}</strong>: ${t.hero.SLIDE8.TITLE} </p> <h2 class="md:text-center text-[36px] lg:text-[56px] font-light leading-none mb-3.5 text-balance"> ${t.hero.SLIDE8.SUBTITLE} </h2> </div> ` })} ${renderComponent($$result, "HeroItem", $$HeroItem, { "position": "center" }, { "default": ($$result2) => renderTemplate` <div class="hero-text-9 w-full px-4"> <p class="text-center text-xl text-primary mb-8"> <strong class="text-semibold"> ${t.hero.GLOBAL.EXPERIENCE_STRONG_TEXT} </strong> ${t.hero.GLOBAL.EXPERIENCE_TITLE} </p> <h2 class="text-center text-[36px] lg:text-[56px] font-light leading-none mb-3.5 text-balance"> ${t.hero.SLIDE9.TITLE} </h2> </div> ` })} ${renderComponent($$result, "HeroItem", $$HeroItem, { "position": "center" }, { "default": ($$result2) => renderTemplate` <div class="hero-text-10 w-full px-4"> <p class="text-center text-xl text-primary mb-8"> <strong class="text-semibold"> ${t.hero.GLOBAL.EXPERIENCE_STRONG_TEXT} </strong> ${t.hero.GLOBAL.EXPERIENCE_TITLE} </p> <h2 class="text-center text-[36px] lg:text-[56px] font-light leading-none mb-3.5 text-balance"> ${t.hero.SLIDE10.TITLE} </h2> </div> ` })} ${renderComponent($$result, "HeroItem", $$HeroItem, { "position": "center" }, { "default": ($$result2) => renderTemplate` <div class="hero-text-11 w-full px-4"> <p class="text-center text-xl text-primary mb-8"> <strong class="text-semibold"> ${t.hero.GLOBAL.EXPERIENCE_STRONG_TEXT} </strong> ${t.hero.GLOBAL.EXPERIENCE_TITLE} </p> <h2 class="text-center text-[36px] lg:text-[56px] font-light leading-none mb-3.5 text-balance"> ${t.hero.SLIDE11.TITLE} </h2> </div> ` })} ${renderComponent($$result, "HeroItem", $$HeroItem, { "position": "center" }, { "default": ($$result2) => renderTemplate` <div class="hero-text-12 w-full px-4"> <p class="text-center text-xl text-primary mb-8"> <strong class="text-semibold"> ${t.hero.GLOBAL.EXPERIENCE_STRONG_TEXT} </strong> ${t.hero.GLOBAL.EXPERIENCE_TITLE} </p> <h2 class="text-center text-[36px] lg:text-[56px] font-light leading-none mb-3.5 text-balance"> ${t.hero.SLIDE12.TITLE} </h2> </div> ` })} ${renderComponent($$result, "HeroItem", $$HeroItem, { "position": "center" }, { "default": ($$result2) => renderTemplate` <div class="hero-text-13 w-full px-4"> <p class="text-center text-xl text-primary mb-8"> <strong class="text-semibold"> ${t.hero.GLOBAL.EXPERIENCE_STRONG_TEXT} </strong> ${t.hero.GLOBAL.EXPERIENCE_TITLE} </p> <h2 class="text-center text-[36px] lg:text-[56px] font-light leading-none mb-3.5 text-balance"> ${t.hero.SLIDE13.TITLE} </h2> </div> ` })} ${renderComponent($$result, "HeroItem", $$HeroItem, { "position": "center" }, { "default": ($$result2) => renderTemplate` <div class="hero-text-14 w-full px-4"> <p class="text-center text-xl text-primary mb-8"> <strong class="text-semibold"> ${t.hero.GLOBAL.EXPERIENCE_STRONG_TEXT} </strong> ${t.hero.GLOBAL.EXPERIENCE_TITLE} </p> <h2 class="text-center text-[36px] lg:text-[56px] font-light leading-none mb-3.5 text-balance"> ${t.hero.SLIDE14.TITLE} </h2> </div> <div class="join-button mt-4 px-4 md:mb-10"> ${renderComponent($$result2, "Button", $$Button, { "tag": "a", "variant": "primary", "className": "animated-link", "dataTime": MENU_SCROLL_POSITIONS.CONTACT }, { "default": ($$result3) => renderTemplate`${t.buttons.JOINCLUB}` })} </div> ` })} ${renderComponent($$result, "TraidingWidget", $$TraidingWidget, {})} </section>`;
}, "/Users/albert/Sites/fundfy/src/components/Hero.astro", void 0);

const cardImg = new Proxy({"src":"/_astro/card-front.Bc0sfzZd.png","width":696,"height":450,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/albert/Sites/fundfy/src/assets/card-front.png";
							}
							
							return target[name];
						}
					});

const cardBackImg = new Proxy({"src":"/_astro/card-back.yytbniav.png","width":464,"height":300,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/albert/Sites/fundfy/src/assets/card-back.png";
							}
							
							return target[name];
						}
					});

const shadowImg = new Proxy({"src":"/_astro/shadow.ByjBX_ab.png","width":763,"height":806,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/albert/Sites/fundfy/src/assets/shadow.png";
							}
							
							return target[name];
						}
					});

const shadow2Img = new Proxy({"src":"/_astro/shadow2.DgpNulLo.png","width":763,"height":828,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/albert/Sites/fundfy/src/assets/shadow2.png";
							}
							
							return target[name];
						}
					});

const shadow3Img = new Proxy({"src":"/_astro/shadow3.BLS3RAKC.png","width":763,"height":829,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/albert/Sites/fundfy/src/assets/shadow3.png";
							}
							
							return target[name];
						}
					});

const shadow4Img = new Proxy({"src":"/_astro/shadow4.D-Nw3Ihu.png","width":763,"height":829,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/albert/Sites/fundfy/src/assets/shadow4.png";
							}
							
							return target[name];
						}
					});

const $$HeroCard = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="card-wrapper z-20 relative h-screen md:pr-4"> <div class="card-container max-w-[1160px] mx-auto w-full px-4 relative h-[53dvh] md:h-[70vh] mt-auto md:my-auto overflow-hidden md:overflow-visible"> <img${addAttribute(cardImg.src, "src")} alt="Card" class="credit-card z-10"> <img${addAttribute(cardBackImg.src, "src")} alt="Card" class="credit-card-back z-10"> <div class="shadow-card relative"> <img${addAttribute(shadowImg.src, "src")} alt="Shadow" class="shadow1"> <img${addAttribute(shadow2Img.src, "src")} alt="Shadow" class="shadow2 absolute top-0 left-0 opacity-0"> <img${addAttribute(shadow3Img.src, "src")} alt="Shadow" class="shadow3 absolute top-0 left-0 opacity-0"> <img${addAttribute(shadow4Img.src, "src")} alt="Shadow" class="shadow4 absolute top-0 left-0 opacity-0"> </div> </div> </div>`;
}, "/Users/albert/Sites/fundfy/src/components/HeroCard.astro", void 0);

const video = "/_astro/video.Hl8JYc5T.mp4";

const experience1 = new Proxy({"src":"/_astro/experience1.QqHZuZUB.png","width":1440,"height":810,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/albert/Sites/fundfy/src/assets/experience1.png";
							}
							
							return target[name];
						}
					});

const experience2 = new Proxy({"src":"/_astro/experience2.Dbexz6IK.png","width":1440,"height":810,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/albert/Sites/fundfy/src/assets/experience2.png";
							}
							
							return target[name];
						}
					});

const experience3 = new Proxy({"src":"/_astro/experience3.Ck7P1O1E.png","width":1440,"height":810,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/albert/Sites/fundfy/src/assets/experience3.png";
							}
							
							return target[name];
						}
					});

const experience4 = new Proxy({"src":"/_astro/experience4.C85ev_yJ.png","width":1440,"height":810,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/albert/Sites/fundfy/src/assets/experience4.png";
							}
							
							return target[name];
						}
					});

const experience5 = new Proxy({"src":"/_astro/experience5.B_O6aAMT.png","width":1440,"height":810,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/albert/Sites/fundfy/src/assets/experience5.png";
							}
							
							return target[name];
						}
					});

const experience6 = new Proxy({"src":"/_astro/experience6.Bh0Og7mh.png","width":1440,"height":810,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/albert/Sites/fundfy/src/assets/experience6.png";
							}
							
							return target[name];
						}
					});

const $$HeroBackground = createComponent(($$result, $$props, $$slots) => {
  const classes = {
    video: "hero-video absolute top-0 right-0 z-0 w-screen h-screen object-cover pointer-events-none hidden md:block",
    experience: "absolute top-0 right-0 z-0 w-screen h-screen object-cover"
  };
  return renderTemplate`${maybeRenderHead()}<section class="w-screen h-screen absolute top-0 left-0 pt-0 -z-1"> <img${addAttribute(["experience1", classes.experience], "class:list")}${addAttribute(experience1.src, "src")}> <img${addAttribute(["experience2", classes.experience], "class:list")}${addAttribute(experience2.src, "src")}> <img${addAttribute(["experience3", classes.experience], "class:list")}${addAttribute(experience3.src, "src")}> <img${addAttribute(["experience4", classes.experience], "class:list")}${addAttribute(experience4.src, "src")}> <img${addAttribute(["experience5", classes.experience], "class:list")}${addAttribute(experience5.src, "src")}> <img${addAttribute(["experience6", classes.experience], "class:list")}${addAttribute(experience6.src, "src")}> <video${addAttribute(classes.video, "class:list")} id="videoElem"${addAttribute(video, "src")} autoplay loop playsinline muted></video> </section> ${renderScript($$result, "/Users/albert/Sites/fundfy/src/components/HeroBackground.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/albert/Sites/fundfy/src/components/HeroBackground.astro", void 0);

export { $$Hero as $, $$HeroCard as a, $$HeroBackground as b, $$Faqs as c, $$Contact as d };
