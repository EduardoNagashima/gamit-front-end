import axios from "axios";

const api = axios.create({
    baseURL: "https://gameit-backend-deploy.herokuapp.com/",
});

export default api;