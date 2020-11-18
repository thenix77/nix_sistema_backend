import { dbSinfo, dbBlackBoard } from "../database/conection";
import { ITerm } from "../models/Term.model";

class Data {
  private dbSinfo = dbSinfo();
  private dbBlackBoard = dbBlackBoard();
  private terms: ITerm[] = [];

  private async consulta() {
    const ssql =
                ` select  periodo ,name ,start_date, end_date
                  from
                    bb.terms
                  where
                    name not like 'Patrón%' and
                    name not like 'PRUEBA%' and
                    name not like 'Inducción' 
                  order by periodo desc`

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
