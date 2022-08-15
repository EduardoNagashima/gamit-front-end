import { useParams } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import api from "../../services/api.js";
import UserContext from "../../contexts/UserContext";
import { PostSection, PostDiv } from "./style.jsx";

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
            {postInfo &&
                <PostDiv>
                    <p>Oi</p>
                </PostDiv>
            }
        </PostSection>
    );
}