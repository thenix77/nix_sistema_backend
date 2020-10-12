import { dbSinfo, dbBlackBoard } from "../database/conection";
import { ITutoria } from "../models/tutoria.model";

class Data {
  private dbSinfo = dbSinfo();
  private dbBlackBoard = dbBlackBoard();
  private tutorias: ITutoria[] = [];

  async index(): Promise<ITutoria[]> {
    const ssql = "select * from sinfo.tutoria";

    const { rows } = await this.dbSinfo.query(ssql);
    this.tutorias = rows;

    return this.tutorias;
  }

  async find(id_alumno: string): Promise<ITutoria[]> {
    const ssql = "select * from sinfo.tutoria where id_alumno like $1";

    const { rows } = await this.dbSinfo.query(ssql, [id_alumno]);

    return rows;
  }
}

const data = new Data();
export default data;
