import { FeedSection, ThumbTittle, ThumbUserDiv, PostThumbnail, ImgDiv, ThumbDetails } from "./style";
import { RiSaveFill, RiSaveLine, RiHeartLine, RiHeartFill, RiTimeFill } from 'react-icons/ri';
import { IconContext } from "react-icons/lib";
import { useState, useEffect } from "react";
import api from "../../services/api";

export default function Feed() {
    const [posts, setPosts] = useState('');
    const salvo = true;
    const like = true;
    const username = 'Eduardo Nagashima'

    useEffect(() => {
        const config = {
            headers: {
                "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY1OTk2NzcwMiwiZXhwIjoxNjYyNTU5NzAyfQ.gAgXX4yO9yta-Ry-iYQumXV6lr4Zb24LXIYY_TdsY0Q`
            }
        }
        api.get("/posts", config).then(res => {
            setPosts(res.data);
        }).catch(err => {
            console.error(err);
        })

    }, []);
    console.log(posts);

    return (
        <FeedSection>
            <PostThumbnail>
                <ImgDiv>
                    <img src="https://bnetcmsus-a.akamaihd.net/cms/blog_header/ck/CKVBTJLOOMIU1656284468947.png" alt="" />
                </ImgDiv>
                <div>
                    <ThumbTittle>Acabou o beta :(</ThumbTittle>
                    <ThumbUserDiv>
                        <img src="https://c4.wallpaperflare.com/wallpaper/787/854/424/jujutsu-kaisen-satoru-gojo-anime-boys-anime-girls-hd-wallpaper-preview.jpg" alt="" />
                        <p>{username}</p>
                    </ThumbUserDiv>
                    <ThumbDetails>
                        <IconContext.Provider value={{ color: "white", style: { fontSize: '1.3rem' } }}>
                            <div>
                                {like ? <RiHeartFill /> : <RiHeartLine />}
                                <RiTimeFill /> <p> 0 vizualizações </p>
                            </div>
                            {salvo ? <RiSaveFill /> : <RiSaveLine />}
                        </IconContext.Provider>
                    </ThumbDetails>
                </div>
            </PostThumbnail>
        </FeedSection>
    );
}