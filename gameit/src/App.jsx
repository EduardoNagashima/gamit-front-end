import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import UserContext from "./contexts/UserContext"
import Header from "./components/Header";
import Login from "./components/Login";
import Home from "./components/Home";
import Post from "./components/Post";

import "./assets/styles/reset.css";
import "./assets/styles/style.css";

const App = () => {

    const [token] = useState(JSON.parse(localStorage.getItem('authorization')));
    const [userInfo] = useState(JSON.parse(localStorage.getItem('userInfo')));
    const [count, setCount] = useState(0);

    return (
        <BrowserRouter>
            <UserContext.Provider value={{ token, userInfo }}>
                <Header count={count} />
                <Routes>
                    <Route path="/" element={<Home token={token} />} />
                    <Route path="/login" element={<Login count={count} setCount={setCount} />} />
                    <Route path="/post/:id" element={<Post />} />
                </Routes>
            </UserContext.Provider>
        </BrowserRouter>
    );
}
export default App;