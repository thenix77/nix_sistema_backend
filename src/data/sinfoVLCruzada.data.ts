import { dbSinfo, dbBlackBoard } from "../database/conection";
import { IVLCruzada } from '../models/listacruzada.model'

class Data {
  private dbSinfo = dbSinfo();
  private dbBlackBoard = dbBlackBoard();
  private lcruzadas: IVLCruzada[] = []
    

  async index(): Promise<IVLCruzada[]> {
    const ssql = "select * " +
                 "from vlcruzada "                 

    const { rows } = await this.dbSinfo.query(ssql);
    this.lcruzadas = rows;

    return this.lcruzadas;
  }

}

const data = new Data();
export default data;