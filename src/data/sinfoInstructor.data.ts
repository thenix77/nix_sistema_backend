import { dbSinfo, dbBlackBoard } from "../database/conection";

class Data {
    private dbSinfo = dbSinfo();
    private dbBlackBoard = dbBlackBoard();
 
    private async consulta() {
        const ssql = `select * 
                        from instructores 
                        where 
                        estatus not like 'T' 
                        order by locacion,apellido`
        
        const { rows } = await this.dbSinfo.query(ssql);

        return rows
    }

    async index() {
    console.log('aqui')

        return await this.consulta();
    }
}
const data = new Data();
export default data;