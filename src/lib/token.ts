import { Request,Response,NextFunction } from 'express'
import {IPayload} from '../models/payload.model'
import jwt from 'jwt-then'

const apiToken:string = 'La$$ZDXe|f8F7Uf[F2J4Se]2</{916eds+d>*M=8)fOcc)NTF3jlJADcjow.dQ?'

export async function token(id:number):Promise<string>{

    let tokens:string|void = ''

    if(id > 0){
        tokens = await jwt.sign({id:id}, apiToken)
    }

    return tokens
}

export const validationToken = async(
    req:Request,
    res:Response,
    next:NextFunction
)=>{

    const tokenx= req.header('token')

    if(!tokenx) return res.status(200).json({auth:false,msg:'no autorizado'})

    try {
        const payload = await jwt.verify(
          tokenx,
          apiToken || "testToken"
        ) as IPayload;
    
        req.userId = payload.id;
      } catch (error) {
        return res.status(200).json({ auth:false,acceso: "No Autorizado" });
      }


    next()
}