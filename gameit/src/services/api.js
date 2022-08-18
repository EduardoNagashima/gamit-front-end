import axios from "axios";

let api;

if (false) {
    api = axios.create({
        baseURL: "http://localhost:5000",
    });
} else {
    api = axios.create({
        baseURL: "https://gameit-backend-deploy.herokuapp.com/",
    });
}

export default api;