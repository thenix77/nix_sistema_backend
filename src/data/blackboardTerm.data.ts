import { dbSinfo, dbBlackBoard } from "../database/conection";
import { ITerm } from "../models/Term.model";

class Data {
  private dbSinfo = dbSinfo();
  private dbBlackBoard = dbBlackBoard();
  private terms: ITerm[] = [];

  private async consulta() {
    const ssql =
      "SELECT name,sourcedid_id,start_date,end_date " +
      "from  term " +
      "where available_ind like 'Y'";

    const { rows } = await this.dbBlackBoard.query(ssql);

    this.terms = rows;
  }

  async index(): Promise<ITerm[]> {
    await this.consulta();

    return this.terms;
  }
}

const data = new Data();
export default data;
