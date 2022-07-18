import express from 'express';
import morgan from 'morgan';
import pkg from '../package.json';
import favsRoutes from '../src/routes/favs.routes';
import authRoutes from './routes/auth.routes';

const app=express();

app.set('pkg', pkg);

app.use(morgan('dev'));
app.use(express.json());
app.get('/',(req,res)=>{
    res.json(('welcome'));
})
app.use('/api/favs', favsRoutes);
app.use('/api/auth', authRoutes);

export default app;