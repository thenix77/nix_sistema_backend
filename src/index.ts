import express from 'express'
import color from 'colors'

//Rutas
import sinfoRoute from './routes/sinfo.route'

class Server {
    app:express.Application
    
    constructor(private port?:number|string ){
        this.app = express()
        this.config()
        this.rutas()   
    }

    private config(){
        this.app.set('port',this.port || process.env.PORT || 4000)
    }

    private rutas(){
        this.app.use('/' , sinfoRoute )
    }

    async start(){
        await this.app.listen(this.app.get('port'))
        console.log(`${color.yellow('server> ')} ESTADO DEL SERVIDOR ${color.red('UP')}`)
        console.log(`${color.yellow('server> ')} PUERTO ${color.red(this.app.get('port'))}`)
    }
}

export default Server