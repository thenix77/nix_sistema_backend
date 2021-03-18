import { Request, Response } from "express";
import {dbOracle} from '../database/conection'


class Ctrl {
    async index(req: Request, res: Response): Promise<Response | void> {

        const ssql = 'grant SELECT any table '
        const oracle = await dbOracle()

        const rs = await oracle.execute(ssql)

        console.log('default')
        return res.status(200).json({status:'onLine', rs})
    }

}

const ctrl = new Ctrl();
export default ctrl;
