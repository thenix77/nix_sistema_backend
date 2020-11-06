import { Request, Response } from "express";
import data from "../data/sinfoVZonal.data";

class Ctrl {
  async index(req: Request, res: Response): Promise<Response | void> {
    const zonal = await data.index();
    return res.status(200).json({length:zonal.length,data:zonal});
  }


  async supervisores(req: Request, res: Response): Promise<Response | void> {
    const rst = await data.supervisores();
    return res.status(200).json({length:rst.length,data:rst});
  }

 
}

const ctrl = new Ctrl();
export default ctrl;
