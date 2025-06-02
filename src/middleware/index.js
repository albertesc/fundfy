import { defineMiddleware } from "astro/middleware";

export const onRequest = defineMiddleware(async (context, next) => {
  const url = new URL(context.request.url);
  const pathname = url.pathname;

  // Si ya está en una ruta localizada, continúa normalmente
  if (pathname.startsWith("/es") || pathname.startsWith("/lt")) {
    return next();
  }

  // Detecta el idioma del navegador
  const acceptLang = context.request.headers.get("accept-language") || "";
  const userLang = acceptLang.split(",")[0].toLowerCase();

  // Si está en la raíz y el idioma es español
  if (pathname === "/" && userLang.startsWith("es")) {
    return Response.redirect(new URL("/es", url), 302);
  }

  // Si está en la raíz y el idioma es lituano
  if (pathname === "/" && userLang.startsWith("lt")) {
    return Response.redirect(new URL("/lt", url), 302);
  }

  // Por defecto, dejar pasar (inglés o cualquier otro idioma no gestionado)
  return next();
});
