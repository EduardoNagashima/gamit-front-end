import { FeedSection, ThumbTittle, ThumbUserDiv, PostThumbnail, ImgDiv, ThumbDetails } from "./style";
import { RiSaveFill, RiSaveLine, RiHeartLine, RiHeartFill, RiTimeFill } from 'react-icons/ri';
import { IconContext } from "react-icons/lib";

export default function Feed() {
    const salvo = true;
    const like = true;
    const username = 'Eduardo Nagashima'

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
                        <spam>{username}</spam>
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