import { FeedSection, ThumbTittle, ThumbUserDiv, PostThumbnail, ImgDiv, ThumbDetails } from "./style";
import { RiHeartLine, RiHeartFill, RiEyeFill } from 'react-icons/ri';
import RefreshContext from "../../contexts/RefreshContext";
import { useState, useEffect, useContext } from "react";
import DeleteButton from "../Post/deleteButton";
import { useNavigate } from "react-router-dom";
import { IconContext } from "react-icons/lib";
import api from "../../services/api";
import Loading from "../Loading";
import Notify from "../Notify";

export default function Feed() {
    const {count, setCount} = useContext(RefreshContext);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [userData] = useState(JSON.parse(localStorage.getItem('userInfo')));
    const [token] = useState(JSON.parse(localStorage.getItem('authorization')));
    const navigate = useNavigate();
    
    useEffect(() => {
        const token = JSON.parse(localStorage.getItem('authorization'));
        const config = {headers: { "Authorization": `Bearer ${token}`}};
        api.get("/posts", config)
        .then(res => {
            setPosts(res.data);
        })
        .catch(err => {
            console.error(err);
        })
        .finally(() => {
            setLoading(false);
        })
    }, [count]);

    function goToPage(id) {
        navigate('/post/' + id);
    }

    function like(postId) {
        const config = {headers: { "Authorization": `Bearer ${token}`}};
        api.post('/like', { postId }, config)
            .then(res => {
                setCount(count + 1);
            })
            .catch(err => {
                console.error(err);
            })
    }

    return (
        <FeedSection>
            <Notify/>
            {!loading && posts?.map(el => {
                return (
                    <PostThumbnail key={el.id}>
                        <ImgDiv onClick={() => { goToPage(el.id) }}>
                            <img src={el.coverImg} alt="cover" />
                        </ImgDiv>
                        <div>
                            <ThumbTittle onClick={() => { goToPage(el.id) }}>{el.tittle}</ThumbTittle>
                            <ThumbUserDiv>
                                <img src={el.user.image} alt="" />
                                <p>{el.user.username}</p>
                            </ThumbUserDiv>
                            <ThumbDetails>
                                <IconContext.Provider value={{ color: "white", size: '40px', style: { cursor: "pointer" } }}>
                                    <div>
                                        <div>
                                            {el.Like?.find(us => us.user.username === userData.username) ? <RiHeartFill onClick={() => like(el.id)} /> : <RiHeartLine onClick={() => like(el.id)} />}
                                            {el._count.Like === 0 ? <h2>nenhuma pessoas curtiu isso :( </h2> : <h2>{el._count.Like + ' curtida(s)!'}</h2>}
                                        </div>
                                        <p> {el.views} </p><RiEyeFill style={{ minWidth: '24px' }} />
                                        <small>{el.createAt.slice(0, -5).replaceAll('-', '/').replace('T', ' - Time: ')}</small>
                                    </div>
                                    {el.user.username === userData.username ? <DeleteButton token={token} id={el.id} /> : <></>}
                                </IconContext.Provider>
                            </ThumbDetails>
                        </div>
                    </PostThumbnail>
                );
            })}
            {!posts[0] && !loading && <h1>Não há publicaçãoes no momento, faça a primeira!</h1>}
            {loading && <Loading />}
        </FeedSection >
    );
}