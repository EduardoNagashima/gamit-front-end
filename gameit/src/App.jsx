import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import UserContext from "./contexts/UserContext"
import Header from "./components/Header";
import Login from "./components/Login";
import Home from "./components/Home";

import "./assets/styles/reset.css";
import "./assets/styles/style.css";

const App = () => {

    const [token] = useState(JSON.parse(localStorage.getItem('authorization')));
    const [userInfo] = useState(JSON.parse(localStorage.getItem('userInfo')));

    return (
        <BrowserRouter>
            <UserContext.Provider value={{ token, userInfo }}>
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