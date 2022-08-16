import styled from "styled-components";

export const PostSection = styled.section`
    width: 90%;
    margin: 5% auto;
`

export const PostDiv = styled.div`
    margin: 0 auto;
    background-color: #e4dfdf;
    border-radius: 10px;
    width: 100%;
    max-width: 1090px;
    min-width: 1000px;
    height: auto;

    img {
        width: 100%;
        margin-right: 10px;
        padding: 5px;
        object-fit: cover;
        border-radius: 10px;
    }
    p {
        font-size: 250%;
        text-align: center;
    }
    div {
        padding: 10px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        div {
            strong {
                font-size: 30px;
            }
        }
    }
    h2 {
        margin-top: 20px;
        margin-bottom: 20px;
        padding: 10px;
        font-family: 'Roboto', sans-serif;
        font-size: 50px;
        font-weight: 400;
    }
`

export const UserInfoDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
    }
    p {
        font-family: 'Roboto', sans-serif;
        font-size: 200%;
        font-weight: 400; 
    }
    img {
        width: 100px;
        height: 100px;
        object-fit: cover;
        border-radius: 100%;
    }
    small {
        font-size: 30px;
    }

`