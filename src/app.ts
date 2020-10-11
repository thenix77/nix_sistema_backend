import dotenv from 'dotenv'
import Server from './index'

function Main(){
    dotenv.config()

    const server = new Server()
    server.start()
}

Main()