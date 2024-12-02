import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import music_movieRouter from './src/routes/music_movie.js';    
import carritoRouter from './src/routes/carrito.js';
import ordenRouter from './src/routes/orden.js';
import usuarioRouter from './src/routes/usuario.js';
import authRoutes from './src/routes/authController.js';

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, resp) => {
    return resp.send('Hello World');
})

app.use('/music_movie', music_movieRouter);
app.use('/carrito', carritoRouter);
app.use('/orden', ordenRouter);
app.use('/usuario', usuarioRouter);
app.use('/api/auth', authRoutes);

app.listen(4001,() => {
    console.log('Server is running on port 4001');
})