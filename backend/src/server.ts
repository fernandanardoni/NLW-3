import express from 'express';
import path from 'path';
import cors from 'cors';
import 'express-async-errors';
import './database/connection';
import routes from './routes';
import errorHandler from './errors/handler';

const app = express();


app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);

// Rota: todo o conjunto abaixo;
// Recurso: nesse caso, o usuário (/users);
// Métodos HTTP: GET (busca uma informação), POST (cria), PUT (edita), DELETE (deleta)
// Parâmetros: 
// Query (buscas/filtros através da rota): http://localhost:3333/users?search=name
// Route Params (identifica um recurso):http://localhost:3333/users/1
// Body (envia dados de formulários:http://localhost:3333/users



app.listen(3333);

// Driver nativo, Query builder, ORM