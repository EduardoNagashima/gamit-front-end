import { RiLockPasswordFill, RiUser3Fill } from "react-icons/ri";
import RefreshContext from "../../contexts/RefreshContext";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { IconContext } from "react-icons/lib";
import { LoginPage,LoginForm } from "./style";
import { toast } from "react-toastify";
import api from "../../services/api";
import Notify from "../Notify";

export default function Login() {
    const { count, setCount } = useContext(RefreshContext);
    const navigate = useNavigate();
    const [token] = useState(JSON.parse(localStorage.getItem('authorization')));
    useEffect(() => {
        if (token) {
            navigate('/')
        }
    });

    const [userInfo, setUserInfo] = useState({
        email: '',
        password: ''
    });
    const [signUpInfo, setSignUpInfo] = useState({});
    const [toggleLogin, setToggleLogin] = useState(true);
    function LoginAuth(e) {
        e.preventDefault();
        if (!userInfo.email || !userInfo.password) {
            toast.warn('Preencha todos os campos!')
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
                toast.error(err.response.data);
            })
    }

    function SignUp(e) {
        e.preventDefault();
        api.post('/signup', signUpInfo)
            .then(res => {
                if (res.status === 201) {
                    toast.success('Conta criada com sucesso!');
                    setToggleLogin(!toggleLogin);
                }
            })
            .catch(err => {
                toast.error(err);
                console.error(err);
            })
    }

    return (
        <>
        <Notify/>
        <LoginPage>
            <LoginForm>
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
            </LoginForm>
            {toggleLogin && <h3 onClick={() => setToggleLogin(!toggleLogin)}>Não tem uma conta? <b>Clique Aqui!</b></h3>}
            {!toggleLogin && <h3 onClick={() => setToggleLogin(!toggleLogin)}>Já tem uma conta? <b>Clique Aqui!</b></h3>}
        </LoginPage>
        </>
    );
}