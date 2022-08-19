import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../services/api.js";
import { IconContext } from "react-icons/lib";
import { PostSection, PostDiv, UserInfoDiv, ErrorMessage } from "./style.jsx";
import { RiHeartLine, RiHeartFill, RiEyeFill, RiEraserFill } from 'react-icons/ri';
import { useNavigate } from "react-router-dom";
import Loading from "../Loading/index.jsx";

export default function Post() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [token] = useState(JSON.parse(localStorage.getItem('authorization')));
    const [userData] = useState(JSON.parse(localStorage.getItem('userInfo')));
    const [postInfo, setPostInfo] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const config = { headers: { "Authorization": `Bearer ${token}` } }
        api.get(`/post/${id}`, config)
            .then(res => {
                setPostInfo(res.data);
            })
            .catch(err => {
                console.error(err);
            })
            .finally(() => {
                setLoading(false);
            })
    }, [token]);

    function deletePost() {
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

    return (
        <PostSection>
            {!loading && postInfo.user ?
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
                        <IconContext.Provider value={{ color: "black", style: { fontSize: '42px', marginRight: '12px' } }}>
                            <div>
                                {true ? <RiHeartFill /> : <RiHeartLine />}
                                <RiEyeFill /> <strong> {postInfo.views} vizualizações </strong>
                            </div>
                            {postInfo.user.username === userData.username ? <RiEraserFill onClick={() => deletePost()} /> : <></>}
                        </IconContext.Provider>

                    </div>
                    <h2>{postInfo.content}</h2>
                </PostDiv> : <Loading />
            }

            {!postInfo.user && !loading &&
                <ErrorMessage>
                    <h5>404 página não encontrada!</h5>
                </ErrorMessage>}

        </PostSection>
    );
}