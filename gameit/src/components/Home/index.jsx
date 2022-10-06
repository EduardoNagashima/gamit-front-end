import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { HomeSection } from "./style";
import Sidebar from "../Sidebar";
import Feed from "../Feed";

export default function Home() {
    const token = JSON.parse(localStorage.getItem('authorization'));
    const [counter, setCounter] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            navigate('/login');
        }
    });

    return (
        <HomeSection>
            <Feed counter={counter} setCounter={setCounter} />
            <Sidebar counter={counter} setCounter={setCounter} />
        </HomeSection>
    )
}