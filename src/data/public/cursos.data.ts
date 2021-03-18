import { dbSinfo, dbBlackBoard } from "../../database/conection";



class Data {
    private dbSinfo = dbSinfo();
    private dbBlackBoard = dbBlackBoard();

    private ssql:string = `select  *
                            from public.r_cursos `  
 

    private generaIn(dato:string){
        let values = []
        let newDato = dato.split(',')
        var setvs = (vs:string[]) => vs.map((v:string) => '$' + (values.push(v))).join();

        return setvs(newDato)
    }

    private async consultaNrc(periodo: string, nrcs: string) {
    
        const ssql = this.ssql+
                     " where "+
                     "       periodo like '"+ periodo+"' "+
                     "        and nrc in (" + this.generaIn(nrcs) + ") "
         
        const { rows}= await this.dbSinfo.query(ssql, nrcs.split(','))  

        return rows
    }


    async findxNrc(periodo:string, nrcs:string){
        return await this.consultaNrc(periodo, nrcs)
    }



}

const data = new Data();
export default data;