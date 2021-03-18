import { dbSinfo, dbBlackBoard } from "../../database/conection";

class Data {
    private dbSinfo = dbSinfo();
    private dbBlackBoard = dbBlackBoard();

    private ssql:string = `select  *
                            from public.r_instructores `  
 

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
                     "        and nrc in (" + this.generaIn(nrcs) + ") "+
                     " order by nrc, id_inst"
         
        const { rows}= await this.dbSinfo.query(ssql, nrcs.split(','))  

        return rows
    }

    private async consultaIdInstructor(periodo: string, idInstructor: string) {
    
        const ssql = this.ssql+
                     " where "+
                     "       periodo like '"+ periodo+"' "+
                     "        and id_inst in (" + this.generaIn(idInstructor) + ") "
         
        const { rows}= await this.dbSinfo.query(ssql, idInstructor.split(','))  

        return rows
    }


    async findxNrc(periodo:string, nrcs:string){
        return await this.consultaNrc(periodo, nrcs)
    }

    async findxInstructores(periodo:string, idInstructor:string){
        return await this.consultaIdInstructor(periodo, idInstructor)
    }



}

const data = new Data();
export default data;