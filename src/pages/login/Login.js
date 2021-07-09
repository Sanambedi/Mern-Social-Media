import "./Login.css";
import { useContext, useRef } from "react";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@material-ui/core";


export default function Login() {
    const email = useRef();
    const password = useRef();
    const {isFetching,dispatch} = useContext(AuthContext)

    const handleClick = (e)=>{
        e.preventDefault();
        loginCall({email:email.current.value,password:password.current.value},dispatch);
    }       

    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">SanamBook</h3>
                    <span className="loginDesc"> Sanam Book mein aapka swagat hai</span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleClick}>
                        <input placeholder="Email" type="email" className="loginInput" ref={email} required/>
                        <input placeholder="Password" type="password" className="loginInput" ref={password} minLength="8" required/>
                        <button className="loginButton" type="submit" disabled={isFetching}>{isFetching ? <CircularProgress color="white" size="20px"/> : "Log In"}</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <button className="loginRegisterButton">
                            {isFetching ? <CircularProgress color="white" size="20px"/> : "Create a new account"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
