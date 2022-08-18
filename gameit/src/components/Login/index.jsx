import { LoginPage } from "./style";
import { useState, useEffect } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import { RiLockPasswordFill, RiUser3Fill } from "react-icons/ri";
import { IconContext } from "react-icons/lib";

export default function Login({ count, setCount }) {
    const navigate = useNavigate();
    const [token] = useState(JSON.parse(localStorage.getItem('authorization')));
    useEffect(() => {
        if (token) {
            navigate('/')
        }
    }, []);

    const [userInfo, setUserInfo] = useState({
        email: '',
        password: ''
    });
    const [signUpInfo, setSignUpInfo] = useState({
        email: 'eduyudji3@hotmail.com',
        password: '123',
        confirmPassword: '123',
        username: 'nagashi',
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
                localStorage.setItem('authorization', JSON.stringify(token));
                localStorage.setItem('userInfo', JSON.stringify(userInfo));
                setCount(count + 1);
                navigate("/");
            }).catch(err => {
                console.error(err.response.data);
                alert(err.response.data)
            })
    }

    function SignUp(e) {
        e.preventDefault();
        api.post('/signup', signUpInfo)
            .then(res => {
                if (res.status === 201) {
                    alert('Conta criada com sucesso!');
                    setToggleLogin(!toggleLogin);
                }
            })
            .catch(err => {
                console.error(err.response.data);
            })
    }

    return (
        <LoginPage>
            <div>
                {toggleLogin && <form onSubmit={LoginAuth}>
                    <IconContext.Provider value={{ color: "white", style: { fontSize: '42px', marginRight: '10px' } }}>
                        <div>
                            <RiUser3Fill />
                            <input
                                placeholder="E-mail"
                                requiredform__field
                                type="email"
                                onChange={e => setUserInfo({ ...userInfo, email: e.target.value })} />
                        </div>
                        <div>
                            <RiLockPasswordFill />
                            <input
                                type="password"
                                required
                                placeholder="Password"
                                onChange={e => setUserInfo({ ...userInfo, password: e.target.value })} />
                        </div>
                    </IconContext.Provider>
                    <button>Login</button>
                </form>}
                {!toggleLogin && <form onSubmit={SignUp}>
                    <p>Email:</p>
                    <input required type="email" onChange={e => setSignUpInfo({ ...signUpInfo, email: e.target.value })} />
                    <p>Username:</p>
                    <input required type="text" onChange={e => setSignUpInfo({ ...signUpInfo, username: e.target.value })} />
                    <p>Image:</p>
                    <input required type="text" placeholder='http://...' onChange={e => setSignUpInfo({ ...signUpInfo, image: e.target.value })} />
                    <p>Password:</p>
                    <input required type="password" onChange={e => setSignUpInfo({ ...signUpInfo, password: e.target.value })} />
                    <p>Confirm Password:</p>
                    <input required type="password" onChange={e => setSignUpInfo({ ...signUpInfo, confirmPassword: e.target.value })} />
                    <button>Create Account</button>
                </form>}
            </div>
            {toggleLogin && <h3 onClick={() => setToggleLogin(!toggleLogin)}>Não tem uma conta? <b>Clique Aqui!</b></h3>}
            {!toggleLogin && <h3 onClick={() => setToggleLogin(!toggleLogin)}>Já tem uma conta? <b>Clique Aqui!</b></h3>}

        </LoginPage>
    );
}