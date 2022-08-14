import { HeaderSection, HeaderDiv, UserDiv, HeaderContent } from "./style";
import { FaBell, FaAngleDown } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { useContext, useState } from "react";
import UserContext from "../../contexts/UserContext";

export default function Header() {
    const [userData] = useState(useContext(UserContext).userInfo);
    return (
        <HeaderSection>
            <HeaderContent>
                <HeaderDiv>
                    <h1>GameIt</h1>
                </HeaderDiv>
                <HeaderDiv>
                    <IconContext.Provider value={{ color: "white", style: { fontSize: '1.5rem' } }}>
                        <UserDiv>
                            <img src={userData.image} alt="avatar" />
                            <h2>{userData.username}</h2>
                            <FaAngleDown />
                            <FaBell />
                        </UserDiv>
                    </IconContext.Provider>
                </HeaderDiv>
            </HeaderContent>
        </HeaderSection>
    );
}