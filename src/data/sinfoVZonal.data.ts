import { dbSinfo, dbBlackBoard } from "../database/conection";
import { IZonal } from "../models/zonal.model";

class Data {
  private dbSinfo = dbSinfo();
  private dbBlackBoard = dbBlackBoard();
  private zonal: IZonal[] = [];

  async index(): Promise<IZonal[]> {
    const ssql = "select * "+
                 "from vzonal ";
    

    const { rows } = await this.dbSinfo.query(ssql);
    this.zonal = rows;

    return this.zonal;
  }

}

const data = new Data();
export default data;