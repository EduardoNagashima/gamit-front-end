import { FeedSection, ThumbTittle, ThumbUserDiv, PostThumbnail, ImgDiv, ThumbDetails } from "./style";
import { RiSaveFill, RiSaveLine, RiHeartLine, RiHeartFill, RiTimeFill } from 'react-icons/ri';
import { IconContext } from "react-icons/lib";
import { useState, useEffect } from "react";
import api from "../../services/api";

export default function Feed() {
    const [posts, setPosts] = useState([]);
    const salvo = true;
    const like = true;

    useEffect(() => {
        const config = {
            headers: {
                "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY2MDQ5MDE4NSwiZXhwIjoxNjYzMDgyMTg1fQ.M049T1ym90WuDg--v3uSnBERUUcUk-Ih9X47yaBAkKQ`
            }
        }
        api.get("/posts", config).then(res => {
            setPosts(res.data);
        }).catch(err => {
            console.error(err);
        }).finally(() => {
            console.log(posts);
        });

    }, []);


    return (
        <FeedSection>
            {posts?.map(el => {
                return (
                    <PostThumbnail key={el.id}>
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
                                        <RiTimeFill /> <p> 0 vizualizações </p>
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