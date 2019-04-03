import ApiControllerInterface from '../interfaces/apicontroller.interface';
import {Request, Response} from 'express';
import PostService from '../services/posts.service';

class PostApiController implements ApiControllerInterface {
    constructor(){
    }

    getAll(req: Request, res: Response) {
        try {
            const posts = PostService.getAll();
            res.status(200).json({
                data:posts,
                message:"Traidos los posts"
            })
            
        } catch (error) {
            res.status(500)
            .json({
                error:true,
                message: "Ocurrió un problema "+error
            })
        }

    }
    get(req: Request, res: Response) {
        const id = req.body.id;
        res.send('Este es el get Id')
    }
    post(req: Request, res: Response) {
        throw new Error("Method not implemented.");
    }
    put(req: Request, res: Response) {
        throw new Error("Method not implemented.");
    }
    delete(req: Request, res: Response) {
        throw new Error("Method not implemented.");
    }
    
}

export default PostApiController;