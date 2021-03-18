import { dbSinfo, dbBlackBoard } from "../../database/conection";

class Data {
    private dbSinfo = dbSinfo();
    private dbBlackBoard = dbBlackBoard();

    private ssql:string = `select  *
                            from public.r_enrolamiento `  
 

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
                     " order by nrc "
         
        const { rows}= await this.dbSinfo.query(ssql, nrcs.split(','))  

        return rows
    }

    private async consultaIdAlumno(periodo: string, idAlumno: string) {
    
        const ssql = this.ssql+
                     " where "+
                     "       periodo like '"+ periodo+"' "+
                     "        and id_alumno in (" + this.generaIn(idAlumno) + ") "
         
        const { rows}= await this.dbSinfo.query(ssql, idAlumno.split(','))  

        return rows
    }


    async findxNrc(periodo:string, nrcs:string){
        return await this.consultaNrc(periodo, nrcs)
    }

    async findxIdAlumno(periodo:string, idAlumno:string){
        return await this.consultaIdAlumno(periodo, idAlumno)
    }



}

const data = new Data();
export default data;