import EmailMarioRecap from "@/emails/emailMarioRecap";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request, res: Response) {
  const {
    lastName,
    firstName,
    email,
    level,
    sector,
    pseudoIg,
    pseudoDiscord,
    phoneNumber,
    rank,
    network,
    partner,
  } = await req.json();

  const { data, error } = await resend.emails.send({
    from: "VALYM Esports <contact@valymesports.com>",
    to: ["antoine.vinsonneau34@gmail.com", "contact@valymesports.com"],
    subject: `Inscription au tournoi VALYM Esport ${lastName} - ${firstName}`,
    react: EmailMarioRecap({
      lastName,
      firstName,
      email,
      level,
      sector,
      pseudoIg,
      pseudoDiscord,
      phoneNumber,
      rank,
      network,
      partner,
    }),
  });

  if (error) {
    return Response.json(error);
  }
  return Response.json({ message: "Email sent successfully" });
}
