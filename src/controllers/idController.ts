import { Request, Response } from "express";
import * as idService from '../services/idService'

export async function returnId(req:Request, res:Response):Promise<Response>{
    try{
        const id:string = req.params.id;
        await idService.returnId(id);
        return res.status(200).send({id});

    }catch(err:any){
        console.log(err);
        if(err.code==='NotFound') return res.status(404).send(err.message);
        return res.sendStatus(500);
    }
}