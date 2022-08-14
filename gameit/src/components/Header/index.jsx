import { HeaderSection, HeaderDiv, UserDiv, HeaderContent, LogoutDiv, InvisibleDiv } from "./style";
import { FaBell, FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { IconContext } from "react-icons/lib";
import { useContext, useState } from "react";
import UserContext from "../../contexts/UserContext";

export default function Header() {
    const navigate = useNavigate();
    const [userData] = useState(useContext(UserContext).userInfo);
    const [showLogout, setshowLogout] = useState(false);

    function showWindow() {
        showLogout ? setshowLogout(false) : setshowLogout(true);
    }

    const logout = async () => {
        localStorage.removeItem("authorization");
        localStorage.removeItem("userInfo");
        navigate('/login');
        window.location.reload();
    }

    return (
        <HeaderSection>
            <HeaderContent>
                <HeaderDiv>
                    <h1>GameIt</h1>
                </HeaderDiv>
                <HeaderDiv>
                    {userData && <IconContext.Provider value={{ color: "white", style: { fontSize: '1.5rem' } }}>
                        <UserDiv>
                            <img onClick={() => showWindow()} src={userData.image} alt="avatar" />
                            <h2 onClick={() => showWindow()}>{userData.username}</h2>
                            {!showLogout && <FaAngleDown onClick={() => showWindow()} />}
                            {showLogout && <FaAngleUp onClick={() => showWindow()} />}
                            <FaBell />
                            <LogoutDiv hidden={showLogout}>
                                <InvisibleDiv onClick={() => showWindow()}></InvisibleDiv>
                                <span onClick={logout}>Logout</span>
                            </LogoutDiv>
                        </UserDiv>
                    </IconContext.Provider>}

                </HeaderDiv>
            </HeaderContent>
        </HeaderSection>
    );
}