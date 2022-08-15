import styled from "styled-components";

export const SidebarSection = styled.section`
    margin: 0 2% 0 1%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
    width: 30%;
`

export const PostCreationContainer = styled.div`
    height: auto;
    padding: 10px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    border-radius: 16px;
    margin-top: 2rem;
    align-items: center;
    width: 100%;
    background-color: #2C343A;
    p {
            padding: 10px;
            font-weight: 700;
            font-size: 42px;
            text-align: center;
            color: #d3d6d8;
            margin-bottom: 10px;
    }
    h3 {
        font-size: 18px;
        color: #b2b4b6;
        margin-bottom: 5px;
    }
    input, textarea{
        font-size: 20px;
        color: #1f2529;
        width: 100%;
        background-color: #b2b4b6;
        margin-bottom: 10px;
        border-radius: 5px;
        border: none;
        resize: none;
    }
    button {
        width: 100%;
        color: white;
        font-size: 20px;
        font-weight: 700;
        font-family: 'Roboto', sans-serif;
        height: 30px;
        background-color: #f57373;
        border: none;
        border-radius: 5px;
        &:hover {
            background-color: #1f2529;
        }
    }
`

export const MostViewContainer = styled.div`
    position: sticky;
    top: 100px;
    width: 100%;
    height: auto;
    padding: 10px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    border-radius: 16px;
    margin-top: 2rem;
    align-items: center;
    background-color: #2C343A;
    p {
        color: #d3d6d8;
        font-weight: 700;
        font-size: 42px;
    }
`

export const UserContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 10px;
    height: auto;
    justify-content: space-between;
    div{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        gap: 1rem;
        img {
            object-fit: cover;
            width: 50px;
            height: 50px;
            border-radius: 50px;
        }
        h2 {
            font-size: 14px;
            color: #d3d6d8;
        }
    }
    small {
        font-size: 20px;
        color: #d3d6d8;
        font-family: 'Roboto', sans-serif;
    }
    h3 {
        display: flex;
        align-items: center;
        justify-content: center;
        color: #d3d6d8;
        font-size: 20px;
    }
`
