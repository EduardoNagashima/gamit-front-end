import axios from "axios";

let api;

api = axios.create({
    baseURL: process.env.REACT_APP_DATABASE,
});

export default api;