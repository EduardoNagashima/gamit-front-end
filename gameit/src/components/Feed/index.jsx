import { FeedSection, ThumbTittle, ThumbUserDiv, PostThumbnail, ImgDiv, ThumbDetails } from "./style";
import { RiEraserFill, RiHeartLine, RiHeartFill, RiTimeFill } from 'react-icons/ri';
import { useNavigate } from "react-router-dom";
import { IconContext } from "react-icons/lib";
import { useState, useEffect } from "react";
import api from "../../services/api";

export default function Feed({ counter, setCounter }) {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState([true]);
    const [userData] = useState(JSON.parse(localStorage.getItem('userInfo')));
    const [token] = useState(JSON.parse(localStorage.getItem('authorization')));
    const navigate = useNavigate();

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem('authorization'));
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
        api.get("/posts", config).then(res => {
            setPosts(res.data);
        }).catch(err => {
            console.error(err);
        }).finally(() => {
            setLoading(false);
        })
    }, [counter]);

    function goToPage(id) {
        navigate('/post/' + id);
    }

    function deletePost(id) {
        if (window.confirm('Você tem certeza que quer apagar sua linda publicação?')) {
            const config = { headers: { "Authorization": `Bearer ${token}` } }
            api.delete(`/post/${id}`, config)
                .then(res => {
                    alert('Publicação excluida com sucesso!');

                    navigate('/');
                })
                .catch(err => {
                    console.error(err);
                })
        }
    }

    function like(postId) {
        const config = { headers: { "Authorization": `Bearer ${token}` } }
        api.post('/like', { postId }, config)
            .then(res => {
                console.log(res);
                setCounter(counter + 1);
            })
            .catch(err => {
                console.error(err);
            })
    }

    return (
        <FeedSection>
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
                                <IconContext.Provider value={{ color: "white", size: '30px' }}>
                                    <div>
                                        {el.Like?.find(us => us.user.username === userData.username) ? <RiHeartFill onClick={() => like(el.id)} /> : <RiHeartLine onClick={() => like(el.id)} />}
                                        {el._count.Like === 0 ? <h2>nenhuma pessoas curtiu isso :( , seja a primeira!</h2> : <h2>{el._count.Like + ' curtida(s)!'}</h2>}
                                        <RiTimeFill /> <p> {el.views} vizualizações </p>
                                        <small>{el.createAt.slice(0, -5).replaceAll('-', '/').replace('T', ' - Time: ')}</small>
                                    </div>
                                    {el.user.username === userData.username ? <RiEraserFill onClick={() => deletePost(el.id)} /> : <></>}
                                </IconContext.Provider>
                            </ThumbDetails>
                        </div>
                    </PostThumbnail>
                );
            })}
            {!posts[0] && <h1>Não há publicaçãoes no momento, faça a primeira!</h1>}
        </FeedSection >
    );
}