import { verifyIsRegister } from "../dao/register.DAO";

export async function POST(req: Request, res: Response) {
  try {
    const { email } = await req.json();
    const user = await verifyIsRegister(email);
    return Response.json(user ? true : false);
  } catch (error) {
    return Response.json({ message: "Error" });
  }
}
