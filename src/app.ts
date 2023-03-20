
import express from 'express';
import session from 'express-session'
import cors from "cors"
import {router} from './routes';
//DB
import { MongoClientOptions } from 'mongodb';
import bodyParser from "body-parser";
import MongoStore from 'connect-mongo'
import db from './config/mongo'
//Handlebars conecction 
import  {engine} from 'express-handlebars';
import "dotenv/config"
const mongoURI = <string>process.env.DB_URI;



const PORT = process.env.PORT || 3002
const app = express()

app.use(cors())
app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


//Session config 
app.use(session({
    // store: new fileStorage({ path: __dirname + '/sessions', ttl: 100, retries: 0 }),
    store: MongoStore.create({
      mongoUrl:mongoURI,
      mongoOptions: { 
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        
      } as MongoClientOptions
    }),
    secret: 'loqueQuier4',
    resave: false,
    saveUninitialized: false
  }))
  
//Handlebars conec
// app.use(express.static(__dirname + '/public'));
// app.engine('handlebars', engine());
// app.set('views', __dirname +'/views')
// app.set('view engine', 'handlebars')

app.use(router)


db().then(() => console.log('Conexion con db lista'));
app.listen(PORT, () => console.log(`Escuchando en ${PORT}`))


