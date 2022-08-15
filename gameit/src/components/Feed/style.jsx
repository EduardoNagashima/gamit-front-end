import styled from "styled-components";

export const FeedSection = styled.section`
    margin: 0 1% 0 2%;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70%;
    height: 100rem;
`

export const ThumbTittle = styled.h2`
    font-family: 'Roboto', sans-serif;
    color: white;
    font-weight: 700;
    text-align: left;
    font-size: 30px;
    padding: 10px;
`

export const PostThumbnail = styled.div`
    width: 100%;
    height: auto;

    background: #2C343A;
    border-radius: 16px;
    margin-bottom: 2rem;
    margin-top: 2rem;
`

export const ThumbUserDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 10px;
    img {
        width: 40px;
        height: 40px;
        object-fit: cover;
        border-radius: 50px;
    }
    p { 
        color: white;
        font-size: 18px;
    }
`

export const ImgDiv = styled.div`
    img{
        border-radius: 16px 16px 0px 0px;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

`

export const ThumbDetails = styled.div`
    display: flex;
    align-items: center;
    width: auto;
    padding: 10px;
    justify-content: space-between;
    
    div {
        display: flex;
        gap: 1rem;
        align-items: flex-end;
        p {
            font-family: 'Roboto', sans-serif;
            font-weight: 400;
            font-size: 15px;
            line-height: 19px;
            color: #95999C;
        }
    }
    small {
        font-size: 15px;
        color: #95999C;
        font-weight: 400;
        text-align: center;
        justify-self: center;
        align-self: center;
    }
`