import { SidebarSection, PostCreationContainer } from "./style"
import { useState } from "react";
import api from "../../services/api";

export default function Sidebar() {
    const [postInfos, setPostInfos] = useState({
        tittle: '',
        coverImg: '',
        content: ''
    })

    function postPost(e) {
        e.preventDefault();
        const { tittle, coverImg, content } = postInfos;
        if (!tittle || !content) {
            alert('Campos vazios!');
            return;
        }
        const config = {
            headers: {
                "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY2MDQ5MDE4NSwiZXhwIjoxNjYzMDgyMTg1fQ.M049T1ym90WuDg--v3uSnBERUUcUk-Ih9X47yaBAkKQ`
            }
        }

        const body = {
            tittle,
            coverImg,
            content,
            categoryId: 1
        }
        api.post('/post', body, config).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err.response.data)
        })
    }

    return (
        <SidebarSection>
            <PostCreationContainer>
                <form onSubmit={postPost}>
                    <p>Create Post</p>
                    <h3>Tittle: </h3>
                    <input type="text"
                        name='tittle'
                        value={postInfos.tittle}
                        onChange={e => setPostInfos({ ...postInfos, tittle: e.target.value })}
                    />
                    <h3>Cover Photo: (opcional)</h3>
                    <input type="text"
                        name='photo'
                        placeholder='http://...'
                        value={postInfos.coverImg}
                        onChange={e => setPostInfos({ ...postInfos, coverImg: e.target.value })}
                    />
                    <h3>Content:</h3>
                    <textarea
                        cols="30"
                        name='content'
                        rows="10"
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