import { dbSinfo, dbBlackBoard } from "../database/conection";
import { IVMatricula } from "../models/vmatricula.model";

class Data {
  private dbSinfo = dbSinfo();
  private dbBlackBoard = dbBlackBoard();
  private matriculas: IVMatricula[] = [];

  private async Consulta() {
    const ssql = "select * from vmatriculabb";

    const { rows } = await this.dbSinfo.query(ssql);
    this.matriculas = rows;
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
      const ssql = 'select distinct cursoid from vmatriculabb'
      const { rows } = await this.dbSinfo.query(ssql);
    
    
    return rows.length;
  }

  async cantidadAlumnos() {
      const ssql = 'select distinct id_alumno from vmatriculabb'
      const { rows } = await this.dbSinfo.query(ssql);
    
    
    return rows.length;
  }


}

const data = new Data();
export default data;
