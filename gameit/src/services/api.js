import axios from "axios";

//MUDAR ISSO NA HORA DO DEPLOYs

const api = axios.create({
    baseURL: "http://localhost:5000",
});

// const api = axios.create({
//     baseURL: "https://gameit-backend-deploy.herokuapp.com/",
// });

export default api;