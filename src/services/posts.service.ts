import PostModel from "../models/posts.model";

class PostService {
    constructor() {
        
    }
    
    async getAll()
    {
        try {
            console.log('Ejecutando el get All');
            const posts = await PostModel.find({});
            return posts;
            
        } catch (error) {
            return new Error("Ocurrió un error al intentar traer todos los registros.");
        }
    }
    
    get()
    {

    }
    
    store()
    {

    }

    update()
    {

    }

    remove()
    {

    }
}

export default new PostService();