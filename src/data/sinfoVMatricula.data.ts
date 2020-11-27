import { dbSinfo, dbBlackBoard } from "../database/conection";
import { IVMatricula } from "../models/vmatricula.model";

class Data {
  private dbSinfo = dbSinfo();
  private dbBlackBoard = dbBlackBoard();
  private matriculas: IVMatricula[] = [];

  private async Consulta() {
    const ssql = "select * from sinfo.vmatapex"

    const { rows } = await this.dbSinfo.query(ssql);
    this.matriculas = rows;
  }

  private async consultaMasiva(periodo: string, nrcs: string): Promise<IVMatricula[] | void> {
        let values = []
        let newNrcs = nrcs.split(',')
        var setvs = (vs:string[]) => vs.map((v:string) => '$' + (values.push(v))).join();
        
        
        const ssql = "select * "+
                     "from sinfo.vmatapex"+
                     " where "+
                     "       periodo like '"+ periodo+"' and "+
                     "       nrc in (" + setvs(newNrcs) + ")"
         
        const { rows}= await this.dbSinfo.query(ssql,newNrcs)  

        return rows
    }

  async index(): Promise<IVMatricula[]> {
    await this.Consulta();

    return this.matriculas;
  }

  async idalumno(IDALUMNO: string) {
    await this.Consulta();

   const rst = this.matriculas.filter((data) =>
      data.id_alumno.includes(IDALUMNO)
    );
    return rst;
  }

  async idcurso(IDCURSO: string) {
    await this.Consulta();

    const rst = this.matriculas.filter((data) =>
      data.cursoid.includes(IDCURSO)
    );
    return rst;
  }

  async cantidadCursos() {
      const ssql = 'select distinct cursoid from sinfo.vmatapex'
      const { rows } = await this.dbSinfo.query(ssql);
    
    
    return rows.length;
  }

  async cantidadAlumnos() {
      const ssql = 'select distinct id_alumno from sinfo.vmatapex'
      const { rows } = await this.dbSinfo.query(ssql);
    
    
    return rows.length;
  }


  async sinfoMatPeriodoNrcs(PERIODO:string,NRCs:string) {
    
    return await this.consultaMasiva(PERIODO,NRCs);
  }
}

const data = new Data();
export default data;
