import axios from 'axios';

const instance = axios.create({
    baseURL: "http://localhost:1337/parse"
});

instance.defaults.headers.common['X-Parse-Application-Id'] = "notificacoes";

export default instance;