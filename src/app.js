
import express from "express"; //importamos el modulo instalado en node modules
import productsRouter from './routes/products.router.js';
import cartsRouter from './routes/carts.router.js';
import __dirname from "./utils.js";
import handlebars from 'express-handlebars';
import viewsRouter from './routes/views.router.js';
import usersRouter from './routes/users.router.js';
import { Server } from "socket.io";

const app = express();

//Config Params
app.use(express.json());
app.use( express.urlencoded( {extended:true} )); //para que el servidor pueda interpretar todas las querys

//app.use(express.static('./src/public'))
app.use(express.static((`${__dirname}/public`)));

app.use('/api/products', productsRouter);
app.use('/api/carts', cartsRouter);

//Implementacion de Handlebars
app.engine('handlebars', handlebars.engine());
app.set('views', `${__dirname}/views`);
app.set('view engine', 'handlebars');

app.use('/', viewsRouter);
app.use('/api/users', usersRouter);

//Implementacion de Socket.io
const server = app.listen(8080, ()=> console.log("Listening on 8080"));
const io = new Server(server);

app.get('/', async (req, res) => {
    const products = await productManager.getProducts();
    res.render('home', { products: products });
  });

//Establece coneccion bidireccional

// io.on('connection', socket => {
//     console.log('Nuevo cliente conectado');

//     socket.on('message', data =>{
//         console.log(data);
//     });
    
//     //Todos ven el mensaje
//     socket.emit('evento_socket_individual', "este mensaje solo debe recibirlo el socket");

//     socket.broadcast.emit('evento_todos_menos_actual', "Lo veran todos menos actual");

//     io.emit('evento_todos', "Este mensaje les llegara a todos los usuarios");

// });

const logs = [];

io.on ('connection', socket =>{
    console.log('conectado');
    socket.on('message1', data =>{
        io.emit('log', data)
    })

    socket.on('message2', data =>{
        logs.push({ socketId: socket.id, message:data });
        io.emit('log', { logs })
    })
})



