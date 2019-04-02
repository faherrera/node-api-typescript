import { Router } from 'express';

class IndexRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config()
    {
        this.router.get('/', (req, res) => res.send('Index'));
        this.router.get('/contact', (req, res) => res.send('Contact!'));
    }

}

const booksRoutes = new IndexRoutes();
export default booksRoutes.router;