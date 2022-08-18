import styled from "styled-components";

export default function Jaba() {
    return (
        <MeDaUmEmprego>
            <h4> Deselvolvido por &#169; <a target="_blank" href="https://github.com/EduardoNagashima">Eduardo Nagashima</a> </h4>
        </MeDaUmEmprego>
    );
}

const MeDaUmEmprego = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap');
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 3;
    text-align: right;
    h4 {
        padding: 10px;
        font-size: 15px;
        
    }
    a {
        font-size: 17px;
        font-weight: 700;
        text-decoration: none;
        color: azure;
        font-family: 'Ubuntu', sans-serif;
    }
`