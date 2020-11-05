import { Request, Response } from "express";

class Ctrl {
    async index(req: Request, res: Response): Promise<Response | void> {
      
        return res.send('conectado')
    }

}

const ctrl = new Ctrl();
export default ctrl;
