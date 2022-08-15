import { FeedSection, ThumbTittle, ThumbUserDiv, PostThumbnail, ImgDiv, ThumbDetails } from "./style";
import { RiSaveFill, RiSaveLine, RiHeartLine, RiHeartFill, RiTimeFill } from 'react-icons/ri';
import { IconContext } from "react-icons/lib";
import { useState, useEffect, useContext } from "react";
import api from "../../services/api";
import UserContext from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";

export default function Feed({ counter }) {
    const [posts, setPosts] = useState([]);
    const [token] = useState(useContext(UserContext).token);
    const navigate = useNavigate();
    const salvo = true;
    const like = true;

    useEffect(() => {
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
        api.get("/posts", config).then(res => {
            setPosts(res.data);
        }).catch(err => {
            console.error(err);
        })
    }, [counter]);

    function goToPage(id) {
        navigate('/post/' + id);
    }

    return (
        <FeedSection>
            {posts?.map(el => {
                return (
                    <PostThumbnail key={el.id} onClick={() => { goToPage(el.id) }}>
                        <ImgDiv>
                            <img src={el.coverImg} alt="photo" />
                        </ImgDiv>
                        <div>
                            <ThumbTittle>{el.tittle}</ThumbTittle>
                            <ThumbUserDiv>
                                <img src={el.user.image} alt="" />
                                <p>{el.user.username}</p>
                            </ThumbUserDiv>
                            <ThumbDetails>
                                <IconContext.Provider value={{ color: "white", style: { fontSize: '1.3rem' } }}>
                                    <div>
                                        {like ? <RiHeartFill /> : <RiHeartLine />}
                                        <RiTimeFill /> <p> {el.views} vizualizações </p>
                                        <small>{el.createAt.slice(0, -5).replaceAll('-', '/').replace('T', ' - Time: ')}</small>
                                    </div>
                                    {salvo ? <RiSaveFill /> : <RiSaveLine />}
                                </IconContext.Provider>
                            </ThumbDetails>
                        </div>
                    </PostThumbnail>

                );
            })}
        </FeedSection>

    );
}