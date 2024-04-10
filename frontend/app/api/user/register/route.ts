import { Prisma } from "@prisma/client";
import { registerDao } from "../dao/register.DAO";

export async function POST(req: Request, res: Response) {
  try {
    const {
      firstName,
      lastName,
      email,
      pseudoIg,
      pseudoDiscord,
      phoneNumber,
      rank,
      network,
    } = await req.json();
    await registerDao({
      firstName,
      lastName,
      email: email.toLowerCase(),
      pseudoIg,
      pseudoDiscord,
      phoneNumber,
      rank,
      network,
      tournamentId: "93d18672-02a1-4749-8dc0-d82939b06163",
    });
    return Response.json({ message: "User registered successfully" });
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      if (e.code === "P2002") {
        return new Response("User already exist !", {
          status: 400,
        });
      }
      return Response.error();
    }
  }
}
