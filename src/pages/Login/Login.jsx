import React, { useState } from "react";
import "./Login.css";
import axios from "axios"
import { useNavigate } from "react-router-dom";

export default function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [token, setToken] = useState("");



    const Auth = () => {
        if (email === "eve.holt@reqres.in" && password) {
            try {

                axios.post("https://reqres.in/api/login", { email, password, })
                    .then(res => {
                        setToken(res.data.token);

                    });
                props.getToken(token, email)



            } catch (error) {
                console.log(error);
            }
        } else {
            navigate("/login")
        }
        navigate("/profil")

    }




    return (
        <div className="login">
            <div className="formLogin">
                <div>
                    <img src="/assets/alba-logo.png" alt="" />
                </div>
                <h1>Login</h1>
                <p>email</p>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                <p>password</p>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit" className="btn" onClick={Auth}>
                    login
                </button>
            </div>
        </div>

    )
}

