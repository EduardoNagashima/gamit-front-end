import { SidebarSection, PostCreationContainer } from "./style"
import { useState, useContext } from "react";
import api from "../../services/api";
import UserContext from "../../contexts/UserContext";

export default function Sidebar({ counter, setCounter }) {
    const [token] = useState(useContext(UserContext).token);
    const [postInfos, setPostInfos] = useState({
        tittle: '',
        coverImg: '',
        content: ''
    });

    function postPost(e) {
        e.preventDefault();
        const { tittle, coverImg, content } = postInfos;
        if (!tittle || !content) {
            alert('Campos vazios!');
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
                alert('Postagem criada com sucesso!');
                setCounter(counter + 1);
            })
            .catch(err => {
                console.log(err.response.data)
                if (err.response.data[0].context.label === 'coverImg') {
                    alert('ERRO!!! Coloque uma imagem de fundo válida: -COMEÇAR COM http(s)://... -TERMINAR COM (.png, .jpg, .jpeg, .gif, .png, .svg)')
                }
            });
    }

    return (
        <SidebarSection>
            <PostCreationContainer>
                <form onSubmit={postPost}>
                    <p>Create Post</p>
                    <h3>Tittle: </h3>
                    <input
                        required
                        type="text"
                        name='tittle'
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
                        placeholder='I think...'
                        value={postInfos.content}
                        onChange={e => setPostInfos({ ...postInfos, content: e.target.value })}
                    ></textarea>
                    <button type="submit"> Publish </button>
                </form>
            </PostCreationContainer>
        </SidebarSection>
    )
}