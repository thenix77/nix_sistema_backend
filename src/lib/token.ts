import { Request, Response, NextFunction } from "express";
import { IPayload } from "../models/payload.model";
import jwt from "jwt-then";

const apiToken: string =
  "La$$ZDXe|f8F7Uf[F2J4Se]2</{916eds+d>*M=8)fOcc)NTF3jlJADcjow.dQ?";

export async function token(id: number): Promise<string> {
  let tokens: string | void = "";

  if (id > 0) {
    tokens = await jwt.sign({ id: id, date: Date.now() }, apiToken, {
      expiresIn: 1 * 60 * 60,
    });
  } // { expiresIn: 24 * 60 * 60 }

  return tokens;
}

export async function expireIn(token: string) {
  const payload = (await jwt.verify(
    token,
    apiToken || "testToken"
  )) as IPayload;

  const fHoy: number = Date.now();
  const fCreacion: number = payload.date;
  const expireIn: number = payload.exp - (fHoy - fCreacion);

  return { fHoy, fCreacion, expireIn, token: payload.exp };
}

export const validationToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const tokenx = req.header("token");

  if (!tokenx)
    return res.status(200).json({ auth: false, msg: "no autorizado" });

  try {
    const payload = (await jwt.verify(
      tokenx,
      apiToken || "testToken"
    )) as IPayload;

    req.userId = payload.id;
  } catch (error) {
    return res.status(200).json({ auth: false, acceso: "No Autorizado" });
  }

  next();
};
