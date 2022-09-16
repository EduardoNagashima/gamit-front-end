import styled from "styled-components";

export const LoginPage = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 20px;
    background-color: #2C343A;
    margin: 10% auto;
    width: 100%;
    max-width: 500px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    div {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        padding: 20px;
        justify-content: center;
        input {
            background-color: #2C343A;
            color: #95999C;
            border: none;
            border-bottom: 2px #95999C solid ;
            :focus {
                outline: none;
            }
            height: auto;
            padding: 10px;
            font-size: 30px;
            margin-bottom: 10px;
            width: 100%;
        }
        p { 
            font-size: 24px;
            margin-bottom: 3px;
            color: #95999C;
        }
        button {
            color: #323138;
            font-size: 20px;
            width: 100%;
            border: none;
            padding: 5px;
            font-family: 'Silkscreen', cursive;
            cursor: pointer;
            :hover {
                background-color: #323138;
                color: #a9a9ad
            }
            :active {
                background-color: #666;
                box-shadow: 0 5px #666;
                transform: translateY(1px);
            }
        }
    }
    h3 {
        font-family: 'Roboto', sans-serif;
        font-size: 20px;
        color: #95999C;
        font-weight: 400;
        margin-bottom: 10px;
        cursor: pointer;
    }
`