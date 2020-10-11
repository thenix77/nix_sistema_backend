import {Request,Response} from 'express'

class Ctrl {
    async index(req:Request,res:Response):Promise<Response|void>{
        return res.status(200).json({saludo:'hello'})
    }
}

const ctrl = new Ctrl()
export default ctrl