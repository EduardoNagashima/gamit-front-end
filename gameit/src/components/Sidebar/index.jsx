import { SidebarSection, PostCreationContainer, UserContainer, MostViewContainer } from "./style"
import { useState, useEffect } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import Notify from "../Notify";
import { toast } from "react-toastify";

export default function Sidebar({ counter, setCounter }) {
    const navigate = useNavigate();
    const [token] = useState(JSON.parse(localStorage.getItem('authorization')));
    const [mostViews, setMostViews] = useState([]);
    const [postInfos, setPostInfos] = useState({
        tittle: '',
        coverImg: '',
        content: ''
    });

    function postPost(e) {
        e.preventDefault();
        const { tittle, coverImg, content } = postInfos;
        if (!tittle || !content) {
            toast.warn('Campos vazios!');
            return;
        }
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
        const body = {
            tittle,
            coverImg,
            content,
            categoryId: 1
        }
        api.post('/post', body, config)
            .then(res => {
                setPostInfos({
                    tittle: '',
                    coverImg: '',
                    content: ''
                });
                toast.success('Postagem criada com sucesso!');
                setCounter(counter + 1);
            })
            .catch(err => {
                toast.error(err.response.data);
                if (err.response.data[0].context.label === 'coverImg') {
                    toast.warn('Coloque uma imagem de fundo válida: http(s)://...(.png, .jpg, .jpeg, .gif, .png, .svg)')
                }
            });
    }

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem('authorization'));
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }

        api.get('/post/mostviews', config)
            .then(res => {
                setMostViews(res.data);
            })
    }, [])

    function goToPage(id) {
        navigate('/post/' + id);
    }

    return (
        <SidebarSection>
            <Notify/>
            <PostCreationContainer>
                <form onSubmit={postPost}>
                    <p>Create Post</p>
                    <h3>Tittle: </h3>
                    <input
                        required
                        type="text"
                        name='tittle'
                        maxLength='60'
                        value={postInfos.tittle}
                        onChange={e => setPostInfos({ ...postInfos, tittle: e.target.value })}
                    />
                    <h3>Cover Photo: </h3>
                    <input
                        required
                        type="text"
                        name='photo'
                        placeholder='http://...'
                        value={postInfos.coverImg}
                        onChange={e => setPostInfos({ ...postInfos, coverImg: e.target.value })}
                    />
                    <h3>Content:</h3>
                    <textarea
                        required
                        rows="10"
                        cols="30"
                        name='content'
                        placeholder='I think... (now accepts MD ## hello world!)'
                        value={postInfos.content}
                        onChange={e => setPostInfos({ ...postInfos, content: e.target.value })}
                    ></textarea>
                    <button type="submit"> Publish </button>
                </form>
            </PostCreationContainer>

            <MostViewContainer>
                <p>Most Views:</p>
                {mostViews?.map(el => {
                    return (
                        <UserContainer key={el.id} onClick={() => goToPage(el.id)}>
                            <div>
                                <img src={el.user.image} alt="user-avatar" />
                                <h2>{el.user.username}</h2>
                            </div>
                            <small>{el.tittle}</small>
                            <h3><FaEye />{el.views}</h3>
                        </UserContainer>
                    );
                })
                }
            </MostViewContainer>
        </SidebarSection>
    )
}