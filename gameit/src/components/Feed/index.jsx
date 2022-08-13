import { FeedSection, PostThumbnail } from "./style";
import { RiSaveFill, RiHeartLine } from 'react-icons/ri';
import { IconContext } from "react-icons/lib";

export default function Feed() {
    return (
        <FeedSection>
            <PostThumbnail>
                <div>
                    <img src="" alt="" />
                </div>
                <div>
                    <h2>Acabou o beta :(</h2>
                    <div>

                    </div>
                    <div>
                        <IconContext.Provider value={{ color: "white", style: { fontSize: '1.5rem' } }}>
                            <RiHeartLine />
                            <p></p>
                            <RiSaveFill />
                        </IconContext.Provider>
                    </div>
                </div>
            </PostThumbnail>

            <PostThumbnail>

            </PostThumbnail>
        </FeedSection>
    );
}