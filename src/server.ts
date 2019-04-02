import App from './app';
import IndexRoutes from './routes/api/index.routes';
import PostsRoutes from './routes/api/posts.routes';
import UserRoutes from './routes/api/user.routes';

class Server {

    routes():void
    {
        //Api
        App.use('/api', IndexRoutes)
        App.use('/api/posts', PostsRoutes)
        App.use('/api/users', UserRoutes)

        //Web
    }

    start():void
    {
        App.listen(App.get('port'), () => console.log(`Estoy usando el puerto ${App.get('port')}`));
        this.routes();
    }
}

const _server = new Server();
_server.start();
