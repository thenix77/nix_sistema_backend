import { Request, Response } from "express";
import data from "../data/sinfoVLCruzada.data";

class Ctrl {
  async index(req: Request, res: Response): Promise<Response | void> {
    const zonal = await data.index();
    return res.status(200).json({length:zonal.length,data:zonal});
  }

 
}

const ctrl = new Ctrl();
export default ctrl;
