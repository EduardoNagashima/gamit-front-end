import Feed from "../Feed";
import Sidebar from "../Sidebar";
import { HomeSection } from "./style";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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