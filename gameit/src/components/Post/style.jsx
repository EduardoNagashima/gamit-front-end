import styled from "styled-components";

export const PostSection = styled.section`
    width: 90%;
    margin: 100px auto;
`

export const ErrorMessage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    h5{
        font-size: 42px;
        color: white;
        text-align: center;
        margin: 20% auto 20px;
        align-self: center;
    }
`

export const PostDiv = styled.div`
    margin: 0 auto;
    background-color: #e4dfdf;
    border-radius: 10px;
    width: 100%;
    max-width: 920px;
    height: auto;
    @media screen 
    and (max-device-width: 1400px) 
    and (min-device-width: 0px) 
    { 
       min-width: 350px;
    }
    img {
        width: 100%;
        margin-right: 10px;
        padding: 5px;
        object-fit: cover;
        border-radius: 10px;
    }
    p {
        font-size: 42px;
        text-align: center;
        @media screen 
        and (max-device-width: 450px) 
        and (min-device-width: 0px) 
        { 
            font-size: 25px;
        }
    }
    div {
        padding: 10px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        div {
            strong {
                font-size: 20px;
                margin-left: 5px;
                @media screen 
                and (max-device-width: 900px) 
                and (min-device-width: 0px) 
                { 
                    font-size: 12px;
                }
            }
        }
        @media screen 
        and (max-device-width: 900px) 
        and (min-device-width: 0px) 
        { 
            padding: 5px;
        }
    }
    h2 {
        padding: 20px;
        font-family: 'Roboto', sans-serif;
        font-size: 35px;
        font-weight: 400;
        @media screen 
        and (max-device-width: 900px) 
        and (min-device-width: 0px) 
        {   
         
            font-size: 30px;
        
        }
    }
    
`

export const ContentText = styled.h4`
    font-size: 42px;
    padding: 20px;
    font-family: 'Roboto', sans-serif;
    @media screen 
    and (max-device-width: 900px) 
    and (min-device-width: 0px) 
    {   
        
        font-size: 30px;
    
    }
`

export const UserInfoDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-height: 90px;
    div {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        img {
        width: 75px;
        height: 75px;
        object-fit: cover;
        border-radius: 100%;
    }
    }
    p {
        font-family: 'Roboto', sans-serif;
        font-size: 25px;
        font-weight: 400; 
    }
    
    small {
        font-size: 20px;
        
    }
    font-size: 20px;
        @media screen 
        and (max-device-width: 625px) 
        and (min-device-width: 0px) 
        { 
        small {
            font-size: 15px;
            text-align: right;
        }
        p {
            font-size: 20px;
        }
        
        }
`