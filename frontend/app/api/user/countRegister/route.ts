import { countUserRegisterOnTournament } from "../dao/register.DAO";

export async function POST(req: Request, res: Response) {
  try {
    const { tournamentId } = await req.json();
    const count = await countUserRegisterOnTournament(tournamentId);
    return Response.json({ count });
  } catch (error) {
    return Response.json({ message: "Error" });
  }
}
