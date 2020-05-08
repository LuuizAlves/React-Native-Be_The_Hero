const express = require('express');

const ongController = require('./controllers/ongController');
const incidentsController = require('./controllers/incidentsController');
const profileController = require('./controllers/profileControler');
const sessionController = require('./controllers/sessionControler');

const routes = express.Router();

routes.post('/session', sessionController.create);

routes.get('/ongs',ongController.index);
routes.post('/ongs',ongController.create);

routes.get('/profiles', profileController.index);

routes.get('/incidents', incidentsController.index);
routes.post('/incidents', incidentsController.create);    
routes.delete('/incidents/:id', incidentsController.delete);

module.exports = routes; //É nessa forma no NODEJS que é feito para exportar uma variável dentro de um arquivo