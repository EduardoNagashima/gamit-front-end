import styled from "styled-components";

export const HeaderSection = styled.header`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    height: 4rem;
    width: 100%;
    background-color: #1c232b;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`

export const HeaderContent = styled.section`
    display: flex;
    align-items: center;
    width: 95%;
    justify-content: space-between;
`

export const HeaderDiv = styled.div`
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
    }
    h2 {
        color: white;
    }
`