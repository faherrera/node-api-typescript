import mongoose from 'mongoose';
import config from './lib/config';

mongoose.connect(config.MONGO_URI, {
    useNewUrlParser:true,
})
.then(db => console.log('DB is conected'))
.catch(err => console.log('Ocurrió un error', err));