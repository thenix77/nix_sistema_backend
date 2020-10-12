import { Request, Response } from "express";
import { token as tk, expireIn } from "../lib/token";

class Ctrl {
  async index(req: Request, res: Response): Promise<Response | void> {
    const ID: number = parseInt(req.params.id);
    const token: string = await tk(ID);

    return res.status(200).json({ token });
  }

  async verificaToken(req: Request, res: Response): Promise<Response | void> {
    const token = req.params.token;

    const expire = await expireIn(token); // (await expireIn(token));

    return res.status(200).json({ expireIn: expire });
  }
}

const ctrl = new Ctrl();
export default ctrl;
