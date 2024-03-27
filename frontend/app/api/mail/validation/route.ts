import ValidationMail from "@/emails/validationMail";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request, res: Response) {
  const { pseudoIg, email } = await req.json();

  const { data, error } = await resend.emails.send({
    from: "VALYM Esports <contact@valymesports.com>",
    to: email,
    subject: `Validation inscription VALYM ESPORTS ${pseudoIg} `,
    react: ValidationMail({
      pseudoIg,
    }),
  });

  if (error) {
    return Response.json(error);
  }
  return Response.json({ message: "Email sent successfully" });
}
