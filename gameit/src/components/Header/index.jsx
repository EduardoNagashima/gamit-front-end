import { HeaderSection, HeaderDiv, UserDiv, HeaderContent } from "./style";
import { FaBell, FaAngleDown } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

export default function Header() {
    return (
        <HeaderSection>
            <HeaderContent>
                <HeaderDiv>
                    <h1>GameIt</h1>
                </HeaderDiv>
                <HeaderDiv>
                    <IconContext.Provider value={{ color: "white", style: { fontSize: '1.5rem' } }}>
                        <UserDiv>
                            <img src="https://c4.wallpaperflare.com/wallpaper/787/854/424/jujutsu-kaisen-satoru-gojo-anime-boys-anime-girls-hd-wallpaper-preview.jpg" alt="avatar" />
                            <h2>username</h2>
                            <FaAngleDown />
                            <FaBell />
                        </UserDiv>
                    </IconContext.Provider>
                </HeaderDiv>
            </HeaderContent>
        </HeaderSection>
    );
}