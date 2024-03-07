import Email from "@/emails/emailMario";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request, res: Response) {
  const { lastName, firstName, email, level, sector, controller, console } =
    await req.json();
  const { data, error } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "antoine.vinsonneau34@gmail.com",
    subject: `Inscription au tournois VALYM Esport ${lastName} - ${firstName}`,
    react: Email({
      lastName,
      firstName,
      email,
      level,
      sector,
      console,
      controller,
    }),
  });

  if (error) {
    return Response.json(error);
  }
  return Response.json({ message: "Email sent successfully" });
}
