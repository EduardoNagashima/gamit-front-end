import styled from "styled-components";

export const LoginPage = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    flex-direction: column;
    width: 100%;
    height: calc(100vh - 4rem);
    h3 {
        font-family: 'Roboto', sans-serif;
        font-size: 20px;
        color: #95999C;
        font-weight: 400;
        margin-bottom: 10px;
        cursor: pointer;
    }
`

export const LoginForm = styled.div`
        background-color: #2C343A;
        border-radius: 20px;
        margin: 0 auto;
        width: 100%;
        max-width: 500px;
        width: 100%;
        display: flex;
        align-items: center;
        padding: 20px;
        justify-content: center;
        form {
            display: flex;
            flex-direction: column;
            div {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 5px;
            }
        }
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
`