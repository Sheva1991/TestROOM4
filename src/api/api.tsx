import axios from "axios";

const API = axios.create({
    baseURL: 'http://ws.audioscrobbler.com/2.0'
});

API.defaults.params = {
    'api_key': '5fa512c783b1fb3ff184531a58213587',
    'format': 'json'
};

export default API







