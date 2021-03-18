import { dbSinfo, dbBlackBoard } from "../database/conection";
import { IBbSinfo } from "../models/bbsinfo.model";

class Data {
    private dbSinfo = dbSinfo();
    private dbBlackBoard = dbBlackBoard();

    private ssql:string = `select   * , 
                           scriptusuario(id_alumno , id_curso , deuda , retirado , calificable ,  matriculable , usuarioenrolado, usuariovisible) script 
                           from matricula `

    private generaIn(dato:string){
        let values = []
        let newDato = dato.split(',')
        var setvs = (vs:string[]) => vs.map((v:string) => '$' + (values.push(v))).join();

        return setvs(newDato)
    }
 
    private async consultaNrc(periodo: string, nrcs: string): Promise<IBbSinfo[]> {
    
        const ssql = this.ssql+
                     " where "+
                     "       periodo like '"+ periodo+"' "+
                     "        and nrc in (" + this.generaIn(nrcs) + ") "+
                   //  "        and usuariovisible like 'Y' "
                     " order by nrc"
         
        const { rows}= await this.dbSinfo.query(ssql, nrcs.split(','))  

        return rows
    }

    private async consultaAlumno(periodo: string, idAlumno: string): Promise<IBbSinfo[]> {
        
        const ssql = this.ssql+
                     " where "+
                     "       periodo like '"+ periodo+"' "+
                     "       and id_alumno in (" + this.generaIn(idAlumno) + ") "+
                     " order by nrc"
         
        const { rows}= await this.dbSinfo.query(ssql,idAlumno.split(','))  

        return rows
    }

    private async consultaRetiro(periodo: string): Promise<IBbSinfo[]> {
        
        const ssql = this.ssql +
                     "  where "+
                     "       periodo like $1 " +
                     "       	and retirado like 'Y' "+
                     "          and usuariovisible like 'Y' "+
                     "  order by id_alumno,nrc"
                     
        const { rows}= await this.dbSinfo.query(ssql , [periodo])  

        return rows
    }

    async findxNrc(PERIODO:string, NRC:string): Promise<IBbSinfo[]> {
        
        return await this.consultaNrc(PERIODO, NRC)
    }

    async findxIdAlumno(PERIODO:string , IDALUMNO:string): Promise<IBbSinfo[]>{

        return await this.consultaAlumno(PERIODO, IDALUMNO)
    }
    
    async findxRetiro(PERIODO:string): Promise<IBbSinfo[]>{

        return await this.consultaRetiro(PERIODO)
    }
}


const data = new Data();
export default data;