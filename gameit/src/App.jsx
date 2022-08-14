import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import UserContext from "./contexts/UserContext"
import Header from "./components/Header";
import Login from "./components/Login";
import Home from "./components/Home";

import "./assets/styles/reset.css";
import "./assets/styles/style.css";

const App = () => {

    const [token, setToken] = useState(JSON.parse(localStorage.getItem('token')));
    const [userInfo, setUserInfo] = useState(JSON.parse(localStorage.getItem('userInfo')));

    return (
        <BrowserRouter>
            <UserContext.Provider value={{ token, setToken, userInfo, setUserInfo }}>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </UserContext.Provider>
        </BrowserRouter>
    );
}
export default App;