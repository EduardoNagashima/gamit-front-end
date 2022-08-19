import styled from "styled-components"

export default function Scroll() {
    function toTop() {
        window.scrollTo(0, 0)
    }

    return (
        <ScrollContainer>
            <button onClick={() => toTop()}>Scroll <br /> Top</button>
        </ScrollContainer>
    )
}

const ScrollContainer = styled.div`
    position: fixed;
    width: 50px;
    height: 50px;
    top: 80px;
    left: 20px;
    margin: 0 auto;
    border-radius: 100px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    button {
        font-size: 12px;
        color: #fff;
        width: 100%;
        height: 100%;
        font-weight: 700;
        background-image: linear-gradient(to bottom right, #3863f0, #392264);
        border: none;
        border-radius: 100px;
    }
`