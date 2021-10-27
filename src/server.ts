import express from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';
import mainRoutes from './routes/index';

// public to use data everywhere
dotenv.config()

const server = express();

// template engine
server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

//  public
server.use(express.static(path.join(__dirname, '../public')));

// routes

server.use(mainRoutes);

server.use((req,res)=>{
    // res.send('Page not found')
    res.render('pages/404')
})

server.listen(process.env.PORT);