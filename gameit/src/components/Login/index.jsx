import { LoginPage } from "./style";
import { useState } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState({
        email: '',
        password: ''
    });
    const [signUpInfo, setSignUpInfo] = useState({
        email: '',
        password: '',
        confirmpassword: '',
        username: '',
        image: ''
    });
    const [toggleLogin, setToggleLogin] = useState(true);
    function LoginAuth(e) {
        e.preventDefault();
        if (!userInfo.email || !userInfo.password) {
            alert('Preencha todos os campos!')
            return;
        }
        api.post('/signin', userInfo)
            .then(res => {
                const { token, image, username } = res.data;
                const userInfo = { image, username };
                console.log(token);
                localStorage.setItem('authorization', JSON.stringify(token));
                localStorage.setItem('userInfo', JSON.stringify(userInfo));
                navigate("/");
            }).catch(err => {
                console.error(err.response.data);
                alert(err.response.data)
            })
    }

    function SignUp(e) {
        e.preventDefault();
        console.log(signUpInfo)
    }

    return (
        <LoginPage>
            <div>
                {toggleLogin && <form onSubmit={LoginAuth}>
                    <p>Email:</p>
                    <input type="email" onChange={e => setUserInfo({ ...userInfo, email: e.target.value })} />
                    <p>Password:</p>
                    <input type="password" onChange={e => setUserInfo({ ...userInfo, password: e.target.value })} />
                    <button>Login</button>
                </form>}
                {!toggleLogin && <form onSubmit={SignUp}>
                    <p>Email:</p>
                    <input type="email" onChange={e => setSignUpInfo({ ...signUpInfo, email: e.target.value })} />
                    <p>Username:</p>
                    <input type="text" onChange={e => setSignUpInfo({ ...signUpInfo, username: e.target.value })} />
                    <p>Image:</p>
                    <input type="text" placeholder='http://...' onChange={e => setSignUpInfo({ ...signUpInfo, image: e.target.value })} />
                    <p>Password:</p>
                    <input type="password" onChange={e => setSignUpInfo({ ...signUpInfo, password: e.target.value })} />
                    <p>Confirm Password:</p>
                    <input type="password" onChange={e => setSignUpInfo({ ...signUpInfo, confirmpassword: e.target.value })} />
                    <button>Login</button>
                </form>}
            </div>
            {toggleLogin && <h3 onClick={() => setToggleLogin(!toggleLogin)}>Não tem uma conta? Clique Aqui!</h3>}
            {!toggleLogin && <h3 onClick={() => setToggleLogin(!toggleLogin)}>Já tem uma conta? Clique Aqui!</h3>}

        </LoginPage>
    );
}