import styled from "styled-components";

export const SidebarSection = styled.section`
    margin: 0 2% 0 1%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
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
            font-family: 'Roboto', sans-serif;
            font-weight: 700;
            font-size: 20px;
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
