import { useParams } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import api from "../../services/api.js";
import { IconContext } from "react-icons/lib";
import UserContext from "../../contexts/UserContext";
import { PostSection, PostDiv, UserInfoDiv } from "./style.jsx";
import { RiSaveFill, RiSaveLine, RiHeartLine, RiHeartFill, RiTimeFill } from 'react-icons/ri';

export default function Post() {
    const { id } = useParams();
    const [token] = useState(useContext(UserContext).token);
    const [postInfo, setPostInfo] = useState({});

    useEffect(() => {
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
        api.get(`/post/${id}`, config)
            .then(res => {
                setPostInfo(res.data);
            })
            .catch(err => {
                console.error(err);
            })
    }, []);
    console.log(postInfo)
    return (
        <PostSection>
            {postInfo.user &&
                <PostDiv>
                    <UserInfoDiv>
                        <div>
                            <img src={postInfo.user.image} alt="" />
                            <p>{postInfo.user.username}</p>
                        </div>
                        <div>
                            <small>{postInfo.createAt.slice(0, -5).replaceAll('-', '/').replace('T', ' - Time: ')}</small>
                        </div>
                    </UserInfoDiv>
                    <img src={postInfo.coverImg} alt="cover" />
                    <p>{postInfo.tittle}</p>
                    <div>
                        <IconContext.Provider value={{ color: "black", style: { fontSize: '70px' } }}>
                            <div>
                                {true ? <RiHeartFill /> : <RiHeartLine />}
                                <RiTimeFill /> <strong> {postInfo.views} vizualizações </strong>
                            </div>
                            {false ? <RiSaveFill /> : <RiSaveLine />}
                        </IconContext.Provider>

                    </div>
                    <h2>{postInfo.content}</h2>
                </PostDiv>
            }
        </PostSection>
    );
}