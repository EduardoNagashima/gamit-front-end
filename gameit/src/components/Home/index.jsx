import Feed from "../Feed";
import Sidebar from "../Sidebar";
import { HomeSection } from "./style";

export default function Home() {
    return (
        <HomeSection>
            <Feed />
            <Sidebar />
        </HomeSection>
    )
}