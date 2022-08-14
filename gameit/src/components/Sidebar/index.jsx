import { SidebarSection, PostCreationContainer } from "./style"

export default function Sidebar() {
    return (
        <SidebarSection>
            <PostCreationContainer>
                <p>Create Post</p>
                <h3>Tittle: </h3>
                <input type="text" name='tittle' />
                <h3>Cover Photo: </h3>
                <input type="text" name='photo' placeholder='http://...' />
                <h3>Content:</h3>
                <textarea cols="30" name='content' rows="10" placeholder='I think...' ></textarea>
                <button> Publish</button>
            </PostCreationContainer>
        </SidebarSection>
    )

}