const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json()); //Permite que a requisição seja feita em foramto de JSON
app.use(routes); //É muito importante que esta variável esteja debaixo do express.json()

// Rota / Recurso 

//Métodos HTTP:
// -GET: Buscar/listar uma informação do back-end
// -POST: Criar uma informação no back-end
// -PUT: Alterar uma informação no back-end
// -DELETE: Deletar uma informação no back-end

//Tipos de Parâmetros:
// -QUERY PARAMS: Parâmetros nomeados envidos na rota após "?" (Filtros, paginação)
// -ROUTE PARAMS: Parâmetros utilizados para identificar recursos
// -REQUEST BODY: Corpo da requisição, utilizado para criar ou alterar recursos

//Tipos de Bancos de Dados:
// -SQL: MySQL, SQLite, PostgreSQL, Oracle, Miscrosoft SQL Server
// -NoSQL: MongoDB, CouchDB, entre outros

//Maneiras de utilizar o SQL:
// -Driver: SELECT * FROM users
// -QUERY BUILDER: table('users').select('*').where()

app.listen(3333);