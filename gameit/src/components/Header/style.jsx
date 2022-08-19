import styled from "styled-components";

export const HeaderSection = styled.header`
    z-index: 2;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    height: 4rem;
    width: 100%;
    background-color: #1c232b;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    @media screen 
    and (max-device-width: 1400px) 
    and (min-device-width: 0px) 
    { 
       min-width: 400px;
    }
`

export const HeaderContent = styled.section`
    display: flex;
    align-items: center;
    width: 95%;
    justify-content: space-between;
`

export const HeaderDiv = styled.div`
    cursor: pointer;
    h1{
        font-size: 2rem;
        color: white;
    }

`

export const UserDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    img {
        object-fit: cover;
        width: 50px;
        height: 50px;
        border-radius: 50px;
        padding: 5px;
    }
    h2 {
        color: white;
    }
`
export const InvisibleDiv = styled.div`
box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 1;
    left: 0;
`

export const LogoutDiv = styled.div`
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: ${(props) => props.hidden === true ? 'visible' : 'hidden'};
    position: absolute;
    background-color: #171717;
    color: #FFF;
    top: 62px;
    right: 0px;
    width: 15%;
    height: 50px;
    background: #1c232b;
    border-radius: 0px 0px 20px 20px;
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    color: #FFFFFF;
    transition: 0s;
    span {
        transition: 0s;
        border-radius: 0px 0px 20px 20px;
        z-index: 3;
        padding: 40px;
        margin-right: 10px;
    }
    @media screen 
    and (max-device-width: 800px) 
    and (min-device-width: 0px) 
    { 
        width: 100px;
      span {
        font-size: 12px;
      }
    }
`