import styled from "styled-components";

export const LoginPage = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 20px;
    background-color: #a9a9ad;
    margin: 20% auto;
    width: 60%;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    div {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        padding: 20px;
        justify-content: center;
        input {
            border: none;
            border-radius: 3px;
            box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
            margin-bottom: 5px;
            width: 98%;
        }
        p {
            margin-bottom: 3px;
        }
        button {
            color: #323138;
            font-size: 20px;
            width: 100%;
            border: none;
            padding: 5px;
            font-family: 'Silkscreen', cursive;
        }
    }
    h3 {
        font-family: 'Roboto', sans-serif;
        font-size: 18px;
        font-weight: 400;
        margin-bottom: 10px;
    }

`