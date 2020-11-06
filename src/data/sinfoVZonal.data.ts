import { dbSinfo, dbBlackBoard } from "../database/conection";
import { ISupervisores, IZonal } from "../models/zonal.model";

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

  async supervisores(): Promise<ISupervisores[]> {
    const ssql = "select * "+
                 "from supervisores ";
    

    const { rows}= await this.dbSinfo.query(ssql) ;
   

    return rows;
  }

}

const data = new Data();
export default data;