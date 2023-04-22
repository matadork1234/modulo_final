import dotenv from 'dotenv';
import express from 'express';
import HomeRouter from './routes/home.route.js';
dotenv.config();
const app = express();
const PORT_SERVER = process.env.PORT || 3002;

app.use('/', HomeRouter);


app.listen(PORT_SERVER, () => {
    console.log(`Server is running in a port ${ PORT_SERVER }`)
})