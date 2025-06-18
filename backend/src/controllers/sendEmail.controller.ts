
import { Request, Response } from "express";
import { Resend } from "resend";

const resend = new Resend("re_cgz13vxx_FNUsbXQshoFhWzisFXAtZXSv");

export async function sendEmail(destinatary:string,password:string) {
  const { data, error } = await resend.emails.send({
    from: "Flowcore <info@binario.co.mz>",
    to: [destinatary],
    subject: "Cadastro na Flowcore",
    html: "<strong>Bem vindo a Flowcore</strong><p>Obrigado por se cadastrar na Flowcore. Sua senha é: " + password + "</p>",
  });

  if (error) {
   throw new Error(`Failed to send email: ${error.message}`);
  }

  return data;
}
