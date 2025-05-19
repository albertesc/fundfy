import { ActionError, defineAction } from "astro:actions";

import { Resend } from "resend";
const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const server = {
  contact: defineAction({
    accept: "form",
    handler: async (formData) => {
        const { company, email, subject, message } = Object.fromEntries(formData.entries());

      const { data, error } = await resend.emails.send({
        from: "Funfy <funfy@resend.dev>",
        to: [import.meta.env.RECIPIENT_EMAIL],
        subject: "Funfy - Contact Form",
        html: `
            <body style="margin:0; padding:0; background-color:#f4f4f4; font-family:Arial, sans-serif;">

            <!-- Contenedor principal -->
            <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                <tr>
                <td align="center">

                    <!-- Caja blanca con sombra -->
                    <table width="600" cellpadding="0" cellspacing="0" role="presentation" style="background-color:#ffffff; margin:20px 0; border-radius:8px; overflow:hidden; box-shadow:0 2px 8px rgba(0,0,0,0.1);">

                    <!-- Header con logo y color corporativo -->
                    <tr>
                        <td style="background-color:#91BDB4; padding:20px; text-align:center;">
                        <img src="https://fundfy.io/wp-content/uploads/2024/11/LOGO-CE-negativo.png" alt="Logo Empresa" width="150" style="display:block; margin:0 auto;">
                        </td>
                    </tr>

                    <!-- Asunto -->
                    <tr>
                        <td style="padding:20px; border-bottom:1px solid #e0e0e0;">
                        <strong style="font-size:18px; color:#333;"><?xml version="1.0" encoding="UTF-8"?><strong>Asunto:</strong> ${subject || "--"}</strong>
                        </td>
                    </tr>

                    <!-- Contenido -->
                    <tr>
                        <td style="padding:20px; color:#555; line-height:1.6;">
                        <p><strong>Empresa:</strong> ${company}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Mensaje:</strong><br/>${message || "--"}</p>
                        </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                        <td style="background-color:#FFFFFF; padding:15px; text-align:center; font-size:12px; color:#999;">
                        © ${new Date().getFullYear()} Fundfy. Todos los derechos reservados.<br/>
                        <a href="https://fundy.io" style="color:#91BDB4; text-decoration:none;">Visita nuestra web</a>
                        </td>
                    </tr>

                    </table>

                </td>
                </tr>
            </table>

            </body>
        `,
      });

      if (error) {
        throw new ActionError({
          code: "BAD_REQUEST",
          message: error.message,
        });
      }

      return data;
    },
  }),
};