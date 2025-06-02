import { defineMiddleware } from "astro/middleware";

export const onRequest = defineMiddleware(async (context, next) => {
  const url = new URL(context.request.url);

  if (url.pathname.startsWith("/es")) {
    return next();
  }

  const acceptLang = context.request.headers.get("accept-language") || "";
  const userLang = acceptLang.split(",")[0].toLowerCase();

  if (userLang.startsWith("es") && url.pathname === "/") {
    return Response.redirect(new URL("/es", url), 302);
  }

  return next();
});