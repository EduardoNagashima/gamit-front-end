import Feed from "../Feed";
import Sidebar from "../Sidebar";
import { HomeSection } from "./style";
import { useState } from "react";

export default function Home() {
    const [counter, setCounter] = useState(0);

    return (
        <HomeSection>
            <Feed counter={counter} setCounter={setCounter} />
            <Sidebar counter={counter} setCounter={setCounter} />
        </HomeSection>
    )
}