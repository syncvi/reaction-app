import React, { useRef, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import './loginPage.css'


function Login() {
    const [password, setPassword] = useState("");
    const [login, setUserName] = useState(false);

    const handleSubmit = (e) => {
        // prevent the form from refreshing the whole page
        e.preventDefault();
        // make a popup alert showing the "submitted" text
        alert("Submited");
    }

    const configuration = {
        method: "post",
        url: "https://nodejs-mongodb-auth-app.herokuapp.com/login",
        data: {
            login,
            password,
        },
    };


    return (
        <div class="cont">
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="col-md-7">
                        <h1 class="h11">Logowanie</h1>
                    </div>
                    <div class="mb-3">
                        <label for="login" class="form-label" style={{ fontSize: "22px", fontWeight: "bold", color: "#3b43de" }}>Login</label>
                        <input type="text" class="form-control" id="login" onChange={e => setUserName(e.target.value)} />
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label" style={{ fontSize: "22px", fontWeight: "bold", color: "#3b43de" }}>Hasło</label>
                        <input type="password" class="form-control" onChange={e => setPassword(e.target.value)} />
                    </div>
                    <div class="mb-3">
                        <button className="btn btn-success" onClick={handleSubmit}>Zaloguj</button>
                        <label for="btnSuccess" class="form-label" style={{ margin: "0px 0px 0px 970px" }}>Nie masz konta?</label>
                        <Link className="link" to="register" style={{ textDecoration: "none" }}>Rejestracja</Link>
                    </div>
                </form>
                {login ? (
                    <p className="text-success">You Are Logged in Successfully</p>
                ) : (
                    <p className="text-danger">You Are Not Logged in</p>
                )}
            </div>
        </div>
    )
}
export default Login