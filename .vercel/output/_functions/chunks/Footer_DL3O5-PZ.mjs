import { c as createComponent, s as spreadAttributes, u as unescapeHTML, f as renderTemplate, a as createAstro, d as renderComponent, e as renderSlot, m as maybeRenderHead, b as addAttribute, j as renderScript } from './astro/server_Eu3TDnBi.mjs';
import { t as toRoutingStrategy, g as getLocaleRelativeUrl } from './utils_NWPKnTJh.mjs';

function createSvgComponent({ meta, attributes, children }) {
  const Component = createComponent((_, props) => {
    const normalizedProps = normalizeProps(attributes, props);
    return renderTemplate`<svg${spreadAttributes(normalizedProps)}>${unescapeHTML(children)}</svg>`;
  });
  return Object.assign(Component, meta);
}
const ATTRS_TO_DROP = ["xmlns", "xmlns:xlink", "version"];
const DEFAULT_ATTRS = {};
function dropAttributes(attributes) {
  for (const attr of ATTRS_TO_DROP) {
    delete attributes[attr];
  }
  return attributes;
}
function normalizeProps(attributes, props) {
  return dropAttributes({ ...DEFAULT_ATTRS, ...attributes, ...props });
}

const image = createSvgComponent({"meta":{"src":"/_astro/fundfy_logo.DVQ0pMiW.svg","width":178,"height":32,"format":"svg"},"attributes":{"width":"178","height":"32","viewBox":"0 0 178 32","fill":"none"},"children":"\n<path d=\"M6.54545 0C2.93058 0 0 2.93058 0 6.54545H26.1818V0H6.54545Z\" fill=\"#91BDB4\" />\n<path d=\"M19.6364 19.2727C23.2512 19.2727 26.1818 16.3422 26.1818 12.7273H3.63636C1.62802 12.7273 0 14.3553 0 16.3636V32H6.54545V19.2727H19.6364Z\" fill=\"#91BDB4\" />\n<path d=\"M125.844 0C122.23 0 119.299 2.93058 119.299 6.54545H145.481V0H125.844Z\" fill=\"#91BDB4\" />\n<path d=\"M138.935 19.2727C142.55 19.2727 145.481 16.3422 145.481 12.7273H122.935C120.927 12.7273 119.299 14.3553 119.299 16.3636V32H125.844V19.2727H138.935Z\" fill=\"#91BDB4\" />\n<path d=\"M169.83 0L162.335 12.7776L154.826 0H147.299L159.044 20.3636V32H165.408L165.595 20.4441L177.315 0H169.83Z\" fill=\"#91BDB4\" />\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M89.4545 0H102.694C108.842 0 113.551 2.61604 114.902 8.75148C115.916 13.3856 115.917 18.7095 114.902 23.3436C113.543 29.5191 108.836 31.9905 102.694 31.9905H89.4545V0ZM96 25.4545L102.694 25.4545C108.098 25.4545 109.299 20.5722 109.273 16C109.248 11.61 107.983 6.54545 102.694 6.54545L96 6.54546V25.4545Z\" fill=\"#91BDB4\" />\n<path d=\"M79.2727 21.7575C79.2727 21.7575 72.4982 8.89415 69.0646 1.92168C68.5243 0.726824 67.4918 0 66.165 0H62.4723C60.7242 0 59.6364 1.04485 59.6364 2.72851V31.9983H66.1818V10.5838L75.939 30.0801C76.478 31.2756 77.5108 32 78.8368 32H83.0277C84.7486 32 85.8182 30.9552 85.8182 29.2715V0H79.2709L79.2727 21.7575Z\" fill=\"#91BDB4\" />\n<path d=\"M42.9091 25.4545C47.7605 25.4545 49.449 22.2711 49.449 18.0064L49.4545 0H56V18.0046C56 26.1784 51.9503 32 42.9091 32C33.8012 32 29.8182 26.3537 29.8182 18.0064V0H36.3398V18.0064C36.3398 22.2991 38.0219 25.4545 42.9091 25.4545Z\" fill=\"#91BDB4\" />\n"});

const $$Astro$4 = createAstro();
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Button;
  const {
    tag = "a",
    href,
    variant = "primary",
    className,
    dataTime
  } = Astro2.props;
  const Tag = tag;
  return renderTemplate`${renderComponent($$result, "Tag", Tag, { "href": href, "class:list": [
    "cursor-pointer z-10 font-semibold text-[15px] border px-6 h-[40px] rounded-full text-dark leading-0 inline-flex items-center justify-center group disabled:opacity-20 disabled:pointer-events-none",
    {
      "bg-primary hover:bg-[#AFCFC9] active:bg-primary border-primary hover:boder-[#AFCFC9] active:border-primary": variant === "primary"
    },
    {
      "bg-white hover:bg-[#D9D9D9] active:bg-white border-white hover:border-[#D9D9D9] active:border-white": variant === "secondary"
    },
    {
      "bg-transparent hover:bg-[#3C4341] active:bg-transparent border-white text-white": variant === "ghost"
    },
    className ? [className] : []
  ], "data-time": dataTime }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "/Users/albert/Sites/fundfy/src/components/atoms/Button.astro", void 0);

const $$Astro$3 = createAstro();
const $$Link = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Link;
  const { href, dataTime, className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(["cursor-pointer text-4xl font-light mb-8 block", className ? [className] : []], "class:list")}${addAttribute(dataTime, "data-time")}> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "/Users/albert/Sites/fundfy/src/components/atoms/Link.astro", void 0);

const MENU_SCROLL_POSITIONS = {
  HOME: 0,
  INVESTMENT: 180,
  EXPERIENCES: 430,
  FAQS: 694,
  CONTACT: 757
};

const header$1 = {"INVESTMEN":"Inversion","EXPERIENCES":"Experiencias","FAQS":"FAQs","JOIN":"Hazte socio"};
const buttons$1 = {"KNOWMORE":"Saber más","JOINCLUB":"Únete al Club","LAUNCHAPP":"Lanzar App"};
const hero$1 = {"SLIDE1":{"TITLE":"Más que un Club de Inversión: transforma tu vida financiera","SUBTITLE":"Operando bajo la licencia MiCA Europea","TEXT":"(European Market in Crypto-Assets)"},"SLIDE2":{"TITLE":"Acceso exclusivo a rentabilidad, estrategia y red profesional","SUBTITLE":"Hemos diseñado una estructura privada para maximizar tu patrimonio"},"SLIDE3":{"TITLE":"Más que ventajas. Una experiencia exclusiva","SUBTITLE":"No dejamos nada al azar: nos guiamos por el análisis y resultados medibles"},"SLIDE4":{"TITLE":"Liquidez sin concesiones","SUBTITLE":"Rotación rápida de capital con gestión estratégica. Accede a tu inversión sin renunciar a rendimiento.","WALLET_TITLE":"Cartera Anual","WALLET_TEXT":"APR máximo: 2% mensual / 24% anual"},"SLIDE5":{"TITLE":"Estabilidad con visión estratégica","SUBTITLE":"Rentabilidad sólida en ciclos de mercado, con la flexibilidad de revisiones periódicas.","WALLET_TITLE":"Cartera Semestral","WALLET_TEXT":"APR máximo: 16% semestral / 32% anual"},"SLIDE6":{"TITLE":"Consolidación y estrategia a largo plazo","SUBTITLE":"Un modelo de gestión pensado para construir valor real y sostenible.","WALLET_TITLE":"Cartera Mensual","WALLET_TEXT":"APR máximo: 40% anual"},"SLIDE7":{"TITLE":"Sin calendario. Invierte a tu ritmo","SUBTITLE":" Entra en el mercado cuando lo necesites e invierte en oportunidades únicas.","WALLET_TITLE":"Cartera Spot","WALLET_TEXT":"Sin APR máximo"},"SLIDE8":{"STRONG_TEXT":"Club Fundfy","TITLE":"forma parte de una red privada de inversores","SUBTITLE":"Acceso exclusivo a nuestra membresía para impulsar tu crecimiento financiero"},"SLIDE9":{"TITLE":"Luxe SuperCars"},"SLIDE10":{"TITLE":"Sailing yachting"},"SLIDE11":{"TITLE":"Events"},"SLIDE12":{"TITLE":"Suscriptions"},"SLIDE13":{"TITLE":"Suscriptions"},"SLIDE14":{"TITLE":"y mucho más..."},"GLOBAL":{"EXPERIENCE_STRONG_TEXT":"Experiencias","EXPERIENCE_TITLE":"Más que inversión"}};
const faqs$1 = {"TITLE":"— <strong>FAQs</strong> Preguntas frecuentes","SUBTITLE":"Todo lo que necesitas saber","QUESTION1":{"TITLE":"¿Qué tipo de activos financieros puedo custodiar con Fundfy?","TEXT":"Fundfy permite la custodia tanto de activos tradicionales como digitales, incluyendo criptomonedas, brindando máxima seguridad y acceso verificado."},"QUESTION2":{"TITLE":"¿Qué diferencia a Fundfy de otras plataformas de gestión de activos?","TEXT":"En Fundfy ofrecemos un enfoque integral que combina la seguridad de la custodia de activos, la innovación en gestión de criptomonedas, y un rendimiento demostrado con una rentabilidad acumulada de +450% desde 2018."},"QUESTION3":{"TITLE":"¿Cómo funciona el servicio de staking en Fundfy?","TEXT":"Nuestro servicio de staking te permite generar rendimientos pasivos sobre tus criptomonedas depositadas, mientras nos encargamos de la seguridad y el proceso técnico."},"QUESTION4":{"TITLE":"¿Cómo puedo unirme y empezar a invertir con Fundfy?","TEXT":"Para unirte a Fundfy, simplemente ponte en contacto con nosotros a través del formulario de nuestra web o envíanos un correo electrónico a <a href=\"mailto:hello@fundfy.io\" class=\"underline\">hello@fundfy.io</a> y nuestro equipo te guiará a través del proceso."}};
const contact$1 = {"TITLE":"— <strong>Contacto</strong> Hazte socio","SUBTITLE":"Únete al Club","FORM":{"NAME":"Nombre completo*","EMAIL":"Email*","SUBJECT":"Asunto","MESSAGE":"Mensaje","MANDATORY_FIELDS":"* Campos obligatorios","ERROR_NAME":"Por favor, introduce tu nombre completo.","ERROR_EMAIL":"Por favor, introduce un email válido.","SUCCESS_MESSAGE":"Tu email se ha enviado correctamente. En breve nos pondremos en contacto. Gracias.","SUBMIT":"Enviar","PRIVACY_POLICY":"Al enviar este formulario, aceptas nuestra <a href=\"/privacy\" class=\"underline\">Política de Privacidad</a> y nos autorizas a procesar tus datos para responder a tu consulta. Tus datos serán tratados de forma segura y no serán compartidos con terceros sin tu consentimiento."}};
const footer$1 = {"SUBTITLE":"Tu Club de Inversión","HOME":"Inicio","CONTACT":"Contacto","INVESTMEN":"Inversion","EXPERIENCE":"Expeiencia","FAQS":"FAQs","PRIVACY":"Política de Privacidad","COOKIES":"Política de Cookies","CONDITIONS":"Condiciones generales","COPYRIGHT":"Fundfy Investment Club SL ©2025 Todos los derechos reservados"};
const spanish = {
  header: header$1,
  buttons: buttons$1,
  hero: hero$1,
  faqs: faqs$1,
  contact: contact$1,
  footer: footer$1,
};

const header = {"INVESTMEN":"Investment","EXPERIENCES":"Experiences","FAQS":"FAQs","JOIN":"Join"};
const buttons = {"KNOWMORE":"Know More","JOINCLUB":"Join the Club","LAUNCHAPP":"Launch App"};
const hero = {"SLIDE1":{"TITLE":"More Than an Investment Club: Transform Your Financial Life","SUBTITLE":"Operating Under the European MiCA License","TEXT":"(European Market in Crypto-Assets)"},"SLIDE2":{"TITLE":"Exclusive Access to Profitability, Strategy, and Professional Network","SUBTITLE":"We’ve Designed a Private Structure to Maximize Your Wealth"},"SLIDE3":{"TITLE":"More Than Advantages. An Exclusive Experience","SUBTITLE":"We Leave Nothing to Chance: We Rely on Analysis and Measurable Results"},"SLIDE4":{"TITLE":"Liquidity Without Compromise","SUBTITLE":"Fast Capital Rotation with Strategic Management. Access Your Investment Without Sacrificing Returns.","WALLET_TITLE":"Annual Portfolio","WALLET_TEXT":"Maximum APR: 2% Monthly / 24% Annual"},"SLIDE5":{"TITLE":"Stability with Strategic Vision","SUBTITLE":"Solid Returns Across Market Cycles, with the Flexibility of Periodic Reviews.","WALLET_TITLE":"Semi-Annual Portfolio","WALLET_TEXT":"Maximum APR: 16% Semi-Annual / 32% Annual"},"SLIDE6":{"TITLE":"Consolidation and Long-Term Strategy","SUBTITLE":"A Management Model Designed to Build Real, Sustainable Value.","WALLET_TITLE":"Monthly Portfolio","WALLET_TEXT":"Maximum APR: 40% Annual"},"SLIDE7":{"TITLE":"No Schedule. Invest at Your Pace","SUBTITLE":"Enter the Market When You Need to and Invest in Unique Opportunities.","WALLET_TITLE":"Spot Portfolio","WALLET_TEXT":"No Maximum APR"},"SLIDE8":{"STRONG_TEXT":"Club Fundfy","TITLE":"Be Part of a Private Network of Investors","SUBTITLE":"Exclusive Access to Our Membership to Boost Your Financial Growth"},"SLIDE9":{"TITLE":"Luxe SuperCars"},"SLIDE10":{"TITLE":"Sailing & Yachting"},"SLIDE11":{"TITLE":"Events"},"SLIDE12":{"TITLE":"Subscriptions"},"SLIDE13":{"TITLE":"Subscriptions"},"SLIDE14":{"TITLE":"and Much More..."},"GLOBAL":{"EXPERIENCE_STRONG_TEXT":"Experiences","EXPERIENCE_TITLE":"More Than Investment"}};
const faqs = {"TITLE":"— <strong>FAQs</strong> Frequently Asked Questions","SUBTITLE":"Everything You Need to Know","QUESTION1":{"TITLE":"What Types of Financial Assets Can I Custody with Fundfy?","TEXT":"Fundfy allows the custody of both traditional and digital assets, including cryptocurrencies, providing maximum security and verified access."},"QUESTION2":{"TITLE":"What Sets Fundfy Apart from Other Asset Management Platforms?","TEXT":"At Fundfy, we offer an integrated approach that combines asset custody security, cryptocurrency management innovation, and a proven track record with cumulative returns of +450% since 2018."},"QUESTION3":{"TITLE":"How Does the Staking Service Work at Fundfy?","TEXT":"Our staking service allows you to generate passive returns on your deposited cryptocurrencies, while we handle security and the technical process."},"QUESTION4":{"TITLE":"How Can I Join and Start Investing with Fundfy?","TEXT":"To join Fundfy, simply contact us through our website form or email us at <a href=\"mailto:hello@fundfy.io\" class=\"underline\">hello@fundfy.io</a>, and our team will guide you through the process."}};
const contact = {"TITLE":"— <strong>Contact</strong> Become a Member","SUBTITLE":"Join the Club","FORM":{"NAME":"Full Name*","EMAIL":"Email*","SUBJECT":"Subject","MESSAGE":"Message","MANDATORY_FIELDS":"* Required Fields","ERROR_NAME":"Please enter your full name.","ERROR_EMAIL":"Please enter a valid email address.","SUCCESS_MESSAGE":"Your email has been sent successfully. We will contact you shortly. Thank you.","SUBMIT":"Send","PRIVACY_POLICY":"By submitting this form, you agree to our <a href=\"/privacy\" class=\"underline\">Privacy Policy</a> and authorize us to process your data to respond to your inquiry. Your data will be handled securely and will not be shared with third parties without your consent."}};
const footer = {"SUBTITLE":"Your Investment Club","HOME":"Home","CONTACT":"Contact","INVESTMEN":"Investment","EXPERIENCE":"Experience","FAQS":"FAQs","PRIVACY":"Privacy Policy","COOKIES":"Cookies Policy","CONDITIONS":"Terms & Conditions","COPYRIGHT":"Fundfy Investment Club SL ©2025 All Rights Reserved"};
const english = {
  header,
  buttons,
  hero,
  faqs,
  contact,
  footer,
};

const LANGUAGES = {
    SPANISH: 'es',
    ENGLISH: 'en'
};

function getI18N ({ currentLocale }) {
    if(currentLocale === LANGUAGES.ENGLISH) return english;
    if(currentLocale === LANGUAGES.SPANISH) return spanish;
    return english;
}

const $$Astro$2 = createAstro();
const $$MenuMobile = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$MenuMobile;
  const { currentLocale } = Astro2;
  const t = getI18N({ currentLocale });
  return renderTemplate`${maybeRenderHead()}<div class="fixed flex flex-col items-start w-full h-full md:h-auto inset-0 bg-white z-50 text-dark p-10 scale-y-0" id="nav-menu"> <a class="logo inline-block w-36 mb-12 z-10 cursor-pointer" data-time="0"> <img${addAttribute(image.src, "src")} alt="Logo" class="w-full h-full"> </a> <nav role="navigation" aria-label="Menú principal" class=""> <ul class="menu-list"> <li class="md:opacity-100"> ${renderComponent($$result, "Link", $$Link, { "dataTime": MENU_SCROLL_POSITIONS.INVESTMENT, "className": "animated-link" }, { "default": ($$result2) => renderTemplate`${t.header.INVESTMEN}` })} </li> <li> ${renderComponent($$result, "Link", $$Link, { "dataTime": MENU_SCROLL_POSITIONS.EXPERIENCES, "className": "animated-link" }, { "default": ($$result2) => renderTemplate`${t.header.EXPERIENCES}` })} </li> <li> ${renderComponent($$result, "Link", $$Link, { "dataTime": MENU_SCROLL_POSITIONS.FAQS, "className": "animated-link" }, { "default": ($$result2) => renderTemplate`${t.header.FAQS}` })} </li> <li> ${renderComponent($$result, "Link", $$Link, { "dataTime": MENU_SCROLL_POSITIONS.CONTACT, "className": "animated-link" }, { "default": ($$result2) => renderTemplate`${t.header.JOIN}` })} </li> </ul> </nav> <div class=""> ${renderComponent($$result, "Button", $$Button, { "href": "#", "tag": "a" }, { "default": ($$result2) => renderTemplate`${t.buttons.LAUNCHAPP}<span class="block ml-2 group-hover:translate-x-1 transition-transform">➔</span> ` })} </div> <div class="text-center mt-auto w-full" id="close-menu-btn"> <span class="sr-only">Cerrar menú</span> <button class="text-dark" aria-label="Cerrar menú"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-8"> <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"></path> </svg> </button> </div> </div> <div class="md:hidden z-10 flex itmes-center"> <button type="button" id="hamburger-btn" class="flex items-center m-auto" aria-controls="navbar-default" aria-expanded="false"> <span class="sr-only">Abrir menú</span> <svg width="28" height="14" viewBox="0 0 28 14" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"> <path d="M2.37305 1.52539H26.373" stroke="currentColor" stroke-width="3" stroke-linecap="round"></path> <path d="M2.37305 11.5254H26.373" stroke="currentColor" stroke-width="3" stroke-linecap="round"></path> </svg> </button> </div> ${renderScript($$result, "/Users/albert/Sites/fundfy/src/components/atoms/MenuMobile.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/albert/Sites/fundfy/src/components/atoms/MenuMobile.astro", void 0);

const $$Astro$1 = createAstro();
const $$Menu = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Menu;
  const { currentLocale } = Astro2;
  const t = getI18N({ currentLocale });
  return renderTemplate`${maybeRenderHead()}<div class="hidden md:flex gap-14 items-center z-10"> <nav role="navigation" aria-label="Menú principal"> <ul class="menu-list flex items-center gap-14"> <li> ${renderComponent($$result, "Link", $$Link, { "dataTime": MENU_SCROLL_POSITIONS.INVESTMENT, "className": "animated-link text-[15px] font-semibold md:mb-0" }, { "default": ($$result2) => renderTemplate`${t.header.INVESTMEN}` })} </li> <li> ${renderComponent($$result, "Link", $$Link, { "dataTime": MENU_SCROLL_POSITIONS.EXPERIENCES, "className": "animated-link text-[15px] font-semibold md:mb-0" }, { "default": ($$result2) => renderTemplate`${t.header.EXPERIENCES}` })} </li> <li> ${renderComponent($$result, "Link", $$Link, { "dataTime": MENU_SCROLL_POSITIONS.FAQS, "className": "animated-link text-[15px] font-semibold md:mb-0" }, { "default": ($$result2) => renderTemplate`${t.header.FAQS}` })} </li> <li> ${renderComponent($$result, "Link", $$Link, { "dataTime": MENU_SCROLL_POSITIONS.CONTACT, "className": "animated-link text-[15px] font-semibold md:mb-0" }, { "default": ($$result2) => renderTemplate`${t.header.JOIN}` })} </li> </ul> </nav> <div class=""> ${renderComponent($$result, "Button", $$Button, { "href": "#", "tag": "a" }, { "default": ($$result2) => renderTemplate`${t.buttons.LAUNCHAPP}<span class="block ml-2 group-hover:translate-x-1 transition-transform">➔</span> ` })} </div> </div>`;
}, "/Users/albert/Sites/fundfy/src/components/atoms/Menu.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="fixed top-0 bottom-none z-10 w-full"> <div class="opacity-0 background-blur absolute inset-0 bg-white/30 backdrop-blur-md transition-opacity duration-300 pointer-events-none"></div> <div class="max-w-[1160px] mx-auto flex align-center justify-between px-4 py-6"> <a class="logo inline-block w-32 lg:w-52 z-10 cursor-pointer" data-time="0"> <img${addAttribute(image.src, "src")} alt="Logo" class="w-full h-full"> </a> ${renderComponent($$result, "Menu", $$Menu, {})} ${renderComponent($$result, "MenuMobile", $$MenuMobile, {})} </div> </header> ${renderScript($$result, "/Users/albert/Sites/fundfy/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/albert/Sites/fundfy/src/components/Header.astro", void 0);

var define_ASTRO_INTERNAL_I18N_CONFIG_default = { format: "directory", trailingSlash: "ignore", i18n: { defaultLocale: "en", locales: ["es", "en"], routing: { } }};
const { trailingSlash, format, i18n} = (
  // @ts-expect-error
  define_ASTRO_INTERNAL_I18N_CONFIG_default
);
const { defaultLocale, locales, domains, routing } = i18n;
const base = "/";
let strategy = toRoutingStrategy(routing, domains);
const getRelativeLocaleUrl = (locale, path, options) => getLocaleRelativeUrl({
  locale,
  path,
  base,
  trailingSlash,
  format,
  defaultLocale,
  locales,
  strategy,
  ...options
});

const $$Astro = createAstro();
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Footer;
  const { currentLocale } = Astro2;
  const t = getI18N({ currentLocale });
  const classes = {
    link: "md:hover:text-primary active:text-primary transition-colors duration-300 cursor-pointer"
  };
  return renderTemplate`${maybeRenderHead()}<footer class="pt-20 pb-5 bg-dark text-white mt-auto"> <div class="max-w-[1160px] mx-auto w-full px-4 relative grid grid-cols-1 md:grid-cols-4 gap-4 text-center md:text-left"> <div> <img${addAttribute(image.src, "src")} alt="Logo" class="w-40 mb-2.5 mx-auto md:mx-0"> <p class="font-semibold text-xl mb-11">${t.footer.SUBTITLE}</p> ${renderComponent($$result, "Button", $$Button, { "tag": "a", "className": "animated-link", "dataTime": MENU_SCROLL_POSITIONS.CONTACT }, { "default": ($$result2) => renderTemplate`${t.buttons.JOINCLUB}` })} </div> <nav> <ul> <li> <a${addAttribute(["animated-link", classes.link], "class:list")}${addAttribute(MENU_SCROLL_POSITIONS.HOME, "data-time")}> ${t.footer.HOME} </a> </li> <li> <a${addAttribute(["animated-link", classes.link], "class:list")}${addAttribute(MENU_SCROLL_POSITIONS.INVESTMENT, "data-time")}> ${t.footer.INVESTMEN} </a> </li> <li> <a${addAttribute(["animated-link", classes.link], "class:list")}${addAttribute(MENU_SCROLL_POSITIONS.EXPERIENCES, "data-time")}> ${t.footer.EXPERIENCE} </a> </li> </ul> </nav> <nav> <ul> <li> <a${addAttribute(["animated-link", classes.link], "class:list")}${addAttribute(MENU_SCROLL_POSITIONS.FAQS, "data-time")}> ${t.footer.FAQS} </a> </li> <li> <a${addAttribute(["animated-link", classes.link], "class:list")}${addAttribute(MENU_SCROLL_POSITIONS.CONTACT, "data-time")}> ${t.footer.CONTACT} </a> </li> </ul> </nav> <nav> <ul> <li> <a${addAttribute(classes.link, "class:list")}${addAttribute(getRelativeLocaleUrl(currentLocale ?? "en", "/privacy"), "href")}> ${t.footer.PRIVACY} </a> </li> <li> <a${addAttribute(classes.link, "class:list")}${addAttribute(getRelativeLocaleUrl(currentLocale ?? "en", "/cookies"), "href")}> ${t.footer.COOKIES} </a> </li> <li> <a${addAttribute(classes.link, "class:list")}${addAttribute(getRelativeLocaleUrl(currentLocale ?? "en", "/conditions"), "href")}> ${t.footer.CONDITIONS} </a> </li> </ul> </nav> </div> <p class="text-center mt-11 text-[14px] opacity-40 px-4"> ${t.footer.COPYRIGHT} </p> </footer>`;
}, "/Users/albert/Sites/fundfy/src/components/Footer.astro", void 0);

export { $$Header as $, MENU_SCROLL_POSITIONS as M, $$Footer as a, $$Button as b, createSvgComponent as c, getI18N as g };
