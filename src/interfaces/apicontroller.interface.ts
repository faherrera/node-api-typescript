import {Request, Response} from 'express';

interface ApiControllerInterface{
    
    getAll(req: Request, res: Response): any;

    get(req: Request, res: Response): any;
    
    post(req: Request, res: Response): any;
    
    put(req: Request, res: Response): any;
    
    delete(req: Request, res: Response): any;

}

export default ApiControllerInterface;