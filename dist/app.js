"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_session_1 = __importDefault(require("express-session"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = require("./routes");
const body_parser_1 = __importDefault(require("body-parser"));
const connect_mongo_1 = __importDefault(require("connect-mongo"));
const mongo_1 = __importDefault(require("./config/mongo"));
require("dotenv/config");
const mongoURI = process.env.DB_URI;
const PORT = process.env.PORT || 3002;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
//Session config 
app.use((0, express_session_1.default)({
    // store: new fileStorage({ path: __dirname + '/sessions', ttl: 100, retries: 0 }),
    store: connect_mongo_1.default.create({
        mongoUrl: mongoURI,
        mongoOptions: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    }),
    secret: 'loqueQuier4',
    resave: false,
    saveUninitialized: false
}));
//Handlebars conec
// app.use(express.static(__dirname + '/public'));
// app.engine('handlebars', engine());
// app.set('views', __dirname +'/views')
// app.set('view engine', 'handlebars')
app.use(routes_1.router);
(0, mongo_1.default)().then(() => console.log('Conexion con db lista'));
app.listen(PORT, () => console.log(`Escuchando en ${PORT}`));
