import styled from "styled-components";

export const FeedSection = styled.section`
    margin: 0 1% 0 2%;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70%;
    height: auto;
    margin-bottom: 20px;
    h1 {
        font-size: 30px;
        margin-top: 50px;
        color: white;
    }
    @media screen 
    and (max-device-width: 1400px) 
    and (min-device-width: 0px) 
    { 
        order: 2;
        width: 100%;
        margin: 0px auto;
        max-width: 1000px;
    }
`

export const ThumbTittle = styled.h2`
    font-family: 'Roboto', sans-serif;
    color: white;
    font-weight: 700;
    text-align: left;
    font-size: 30px;
    padding: 20px;
`

export const PostThumbnail = styled.div`
    width: 100%;
    height: auto;

    background: rgb(47,65,78);
    background: linear-gradient(138deg, rgba(47,65,78,1) 0%, rgba(44,52,58,1) 66%);
    border-radius: 16px;
    margin-bottom: 20px;
    margin-top: 2rem;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    @media screen 
    and (max-device-width: 800px) 
    and (min-device-width: 0px) 
    { 
        width: 100%;
        margin: 20px auto;
    }
`

export const ThumbUserDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    padding-left: 20px;
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
    @media screen 
    and (max-device-width: 800px) 
    and (min-device-width: 0px) 
    { 
        width: 100%;
        margin: 0px auto;
        p {
            font-size: 12px;
        }
    }
`

export const ImgDiv = styled.div`
    img{
        border-radius: 16px 16px 0px 0px;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    @media screen 
    and (max-device-width: 800px) 
    and (min-device-width: 0px) 
    { 

    }

`

export const ThumbDetails = styled.div`
    display: flex;
    align-items: center;
    width: auto;
    padding: 10px;
    h2 {
        font-size: 20px;
        color: #95999C;
    }
    div {
        padding: 5px;
        width: 100%;
        display: flex;
        align-items: center;
        gap: 10px;
        p {
            font-family: 'Roboto', sans-serif;
            font-weight: 700;
            font-size: 20px;
            line-height: 19px;
            color: #95999C;
        }
    }
    small {
        font-size: 15px;
        color: #95999C;
        font-weight: 400;
        justify-self: center;
        align-self: center;
        flex-grow: 2;
        text-align: right;
    }
    @media screen 
    and (max-device-width: 1400px) 
    and (min-device-width: 0px) 
    { 
        h2 {
            font-size: 13px;
        }
        small {
            font-size: 12px;
        }
        div {
            gap: 5px;
            p {
                font-size: 12px;
            }
        }
    }
`
