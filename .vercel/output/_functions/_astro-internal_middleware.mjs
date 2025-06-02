import { a as defineMiddleware, s as sequence } from './chunks/index_-p_z4u8c.mjs';
import './chunks/astro-designed-error-pages_EoPM0NEV.mjs';
import './chunks/astro/server_DXpXXyzT.mjs';

const onRequest$1 = defineMiddleware(async (context, next) => {
  const url = new URL(context.request.url);

  // Si ya está en un idioma específico, continúa normal
  if (url.pathname.startsWith("/es")){
    return next();
  }

  // Detecta idioma del navegador
  const acceptLang = context.request.headers.get("accept-language") || "";
  const userLang = acceptLang.split(",")[0].toLowerCase();

  // Redirige si el idioma es español
  if (userLang.startsWith("es")) {
    return Response.redirect(new URL("/es", url), 302);
  }

  // Redirige por defecto a inglés
  return Response.redirect(new URL("/", url), 302);
});

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
