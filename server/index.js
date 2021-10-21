const express = require('express');

const { default: ParseServer } = require('parse-server');
const ParseDashboard = require(('parse-dashboard'));

const app = express();

const parseServer = new ParseServer({
    databaseURI: 'mongodb+srv://reinaldo:reinaldo10@cluster0.3qyhr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    appId: 'notificacoes',
    masterKey: '12345678',
    serverURL: 'http://localhost:1337/parse',
    publicServerURL: 'http://localhost:1337/parse'
});

const dashboard = new ParseDashboard({
    apps: [
        {
            serverURL: 'http://localhost:1337/parse',
            appId: 'notificacoes',
            masterKey: '12345678',
            appName: 'Notificacoes'
        }
    ]
})

app.use('/parse', parseServer.app);
app.use('/dashboard', dashboard)

app.listen(1337, () => { console.log('Rest api parse rodando em http://localhost:1337/parse')})