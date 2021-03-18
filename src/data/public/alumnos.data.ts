import { dbSinfo, dbBlackBoard } from "../../database/conection";



class Data {
    private dbSinfo = dbSinfo();
    private dbBlackBoard = dbBlackBoard();

    private ssql:string = `select  *
                            from public.r_alumnos `  
 

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

    private async consultaAlumno(periodo: string, idAlumnos: string) {
    
        const ssql = this.ssql+
                     " where "+
                     "       periodo like '"+ periodo+"' "+
                     "        and id_alumno in (" + this.generaIn(idAlumnos) + ") "
         
        const { rows}= await this.dbSinfo.query(ssql, idAlumnos.split(','))  

        return rows
    }


    async findxNrc(periodo:string, nrcs:string){
        return await this.consultaNrc(periodo, nrcs)
    }

    async findxAlumno(periodo:string, idAlumnos:string){
        return await this.consultaAlumno(periodo, idAlumnos)
    }



}

const data = new Data();
export default data;