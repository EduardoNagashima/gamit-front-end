import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Header from "./components/Header";
import Home from "./components/Home";
import Auth from "./components/Auth";
import UserContext from "./contexts/UserContext"

import "./assets/styles/reset.css";
import "./assets/styles/style.css";

const App = () => {

    const [token, setToken] = useState(JSON.parse(localStorage.getItem('token')));

    return (
        <BrowserRouter>
            <UserContext.Provider value={{ token, setToken }}>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Auth />} />
                </Routes>
            </UserContext.Provider>
        </BrowserRouter>
    );
}
export default App;