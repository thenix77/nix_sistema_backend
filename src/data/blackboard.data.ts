import { dbSinfo, dbBlackBoard } from "../database/conection";

class Data {
    private dbSinfo = dbSinfo();
    private dbBlackBoard = dbBlackBoard();
 
    private async consulta() {
        const ssql = `select * 
                        from term`
        
        const { rows } = await this.dbSinfo.query(ssql);

        return rows
    }

    async index() {
        return await this.consulta();
    }
}
const data = new Data();
export default data;