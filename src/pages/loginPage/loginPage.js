import React, {useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import './loginPage.css'
import Cookies from "universal-cookie";
const cookies = new Cookies();


export default function Login() {
    const [Hasło, setPassword] = useState("");
    const [Login, setLogin] = useState(false);

    const handleSubmit = (e) => {
        // prevent the form from refreshing the whole page
        e.preventDefault();

        // set configurations
        const configuration = {
            method: "post",
            url: "http://localhost:8080/routes/Uzytkownik/user/login",
            data: {
                Login,
                Hasło
            },
        };
        axios(configuration)
            .then((result) => {
                // set the cookie
                cookies.set("TOKEN", result.data.token, {
                    path: "/",
                });
                // redirect user to the auth page
                window.location.href = "/profile";

                setLogin(true);
                console.log(configuration);
            })
            .catch((error) => {
                error = new Error();
                console.log(configuration);
            });
    }


    return (
        <div class="cont">
            <div className="container">
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="col-md-7">
                        <h1 class="h11">Logowanie</h1>
                    </div>
                    <div class="mb-3">
                        <label for="login" class="form-label" style={{ fontSize: "22px", fontWeight: "bold", color: "#3b43de" }}>Login</label>
                        <input type="text" class="form-control" id="login" onChange={e => setLogin(e.target.value)} />
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label" style={{ fontSize: "22px", fontWeight: "bold", color: "#3b43de" }}>Hasło</label>
                        <input type="password" class="form-control" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div class="mb-3">
                        <button className="btn btn-success" onSubmit={(e) => handleSubmit(e)}>Zaloguj</button>
                        <label for="btnSuccess" class="form-label" style={{ margin: "0px 0px 0px 970px" }}>Nie masz konta?</label>
                        <Link className="link" to="register" style={{ textDecoration: "none" }}>Rejestracja</Link>
                    </div>
                </form>
                {Login ? (
                    <p className="text-success">You Are Logged in Successfully</p>
                ) : (
                    <p className="text-danger">You Are Not Logged in</p>
                )}
            </div>
        </div>
    )
}