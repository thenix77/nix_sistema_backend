import { dbSinfo, dbBlackBoard } from "../database/conection";
import { IBbSinfo } from "../models/bbsinfo.model";

class Data {
    private dbSinfo = dbSinfo();
    private dbBlackBoard = dbBlackBoard();
 
    private async consulta(periodo: string, nrcs: string): Promise<IBbSinfo[] | void> {
        let values = []
        let newNrcs = nrcs.split(',')
        var setvs = (vs:string[]) => vs.map((v:string) => '$' + (values.push(v))).join();
        
        
        const ssql = "select * "+
                     "from vmatbbsinfo"+
                     " where "+
                     "       periodo like '"+ periodo+"' and "+
                     "       nrc in (" + setvs(newNrcs) + ")"
         
        const { rows}= await this.dbSinfo.query(ssql,newNrcs)  

        return rows
    }

    async index(PERIODO:string, NRCs:string) :Promise<IBbSinfo[]|void>{
        
        return await this.consulta(PERIODO, NRCs);
    }
    
}
const data = new Data();
export default data;