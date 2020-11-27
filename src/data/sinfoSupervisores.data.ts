import { dbSinfo, dbBlackBoard } from "../database/conection";
import { ISupervisores } from "../models/zonal.model";

class Data {
  private dbSinfo = dbSinfo();
  private dbBlackBoard = dbBlackBoard();
  private supervisores: ISupervisores[] = [];

  async index(): Promise<ISupervisores[]> {
    const ssql = "select * from supervisores";

    const { rows } = await this.dbSinfo.query(ssql);
    this.supervisores = rows;

    return this.supervisores;
  }


}

const data = new Data();
export default data;
