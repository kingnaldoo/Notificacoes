const express = require('express');
const { default: ParseServer } = require('parse-server');
const ParseDashboard = require('parse-dashboard');

const app = express();

const nomeBanco = 'mydb' //Infome um nome para o seu banco de dados. Exemplo: bancoDanielLima

if(nomeBanco.length <= 3) {
    throw 'Informe um nome para seu banco de dados';
}

const parseServer = new ParseServer({
    databaseURI: `mongodb://200.129.39.34:8091/${nomeBanco}`,
    appId: 'notificacoes',
    masterKey: '12345678',
    serverURL: 'http://localhost:1337/parse',
    publicServerURL: 'http://localhost:1337/parse',
});

const dashboard = new ParseDashboard({
    apps: [
        {
            serverURL: 'http://localhost:1337/parse',
            appId: 'notificacoes',
            masterKey: '12345678',
            appName: "Notificacoes"
        }
    ]
});

app.use('/parse', parseServer.app);
app.use('/dashboard', dashboard);

app.listen(1337, function() {
    console.log('Rest API parse rodando em http://localhost:1337/parse');
    console.log('Dashboard parse rodando em http://localhost:1337/dashboard');
});