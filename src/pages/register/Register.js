import axios from "axios";
import { useRef } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import "./Register.css"

export default function Register() {
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordAgain = useRef();
    const history = useHistory()

    const handleClick = async(e)=>{
        e.preventDefault();
        if(passwordAgain.current.value !== password.current.value){
            passwordAgain.current.setCustomValidity("Passwords don't match!")
        }
        else{
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value,
            }
            try{
                await axios.post("/auth/register",user);
                history.push("/login");
            }catch(err){
                console.log(err);
            }
        }
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
                        <input placeholder="Username" ref={username} className="loginInput" required/>
                        <input placeholder="Email" ref={email} className="loginInput" type="email" required/>
                        <input placeholder="Password" ref={password} className="loginInput" type="password" minLength="8" required/>
                        <input placeholder="Password Again" ref={passwordAgain} className="loginInput" type="password" required/>
                        <button className="loginButton" type="submit">Sign Up</button>
                        <Link to="/login" style={{textDecoration:"none",width:"100%"}}>
                            <button className="loginRegisterButton">Log into Account</button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    )
}
