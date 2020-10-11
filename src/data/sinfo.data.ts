import {dbSinfo,dbBlackBoard} from '../database/conection'

class Data {

    private dbSinfo = dbSinfo()
    private dbBlackBoard = dbBlackBoard()

    async index():Promise<string|void>{
        const ssql =''
        const {rows} = await this.dbSinfo.query('')
        return rows[0]
    }
}

const data = new Data()
export default data