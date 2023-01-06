import React, { useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import styles from './loginPage.module.css'
import Cookies from "universal-cookie";
const cookies = new Cookies();


export default function Login() {
    const [Hasło, setPassword] = useState("");
    const [Login, setLogin] = useState("");
    const [login, setLogged] = useState(false);
    const [error, setError] = useState("");

    const getUserInfo = () => {
        axios
            .get(`http://localhost:8080/routes/Uzytkownik/${Login}`,)
            .then(function (response) {
                
                var obj = {
                    Login: response.data.Login,
                    StatusPremium: response.data.StatusPremium,
                    TypKonta: response.data.TypKonta,
                    Zdjęcie: response.data.Zdjęcie
                }
                console.log(obj)
                window.localStorage.removeItem('userInfo')
                localStorage.setItem('userInfo', JSON.stringify(obj));
            });
    }
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
                getUserInfo()
                setLogged(true);
                // console.log(configuration);
                setTimeout(() => { window.location.href = "/profile" }, 1500);

            })
            .catch(function (error)  {
                setError(error.response.data.message);
            });
    }


    return (
        <div className={styles.cont}>
            <div className={styles.form_container}>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="col-md-7">
                        <h1 class="h11">Logowanie</h1>
                    </div>
                    <div class="mb-3">
                        <label for="login" class="form-label">Login</label>
                        <input type="text" class="form-control" id="login" onChange={e => setLogin(e.target.value)} />
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Hasło</label>
                        <input type="password" class="form-control" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div class="mb-3">
                        <button className={styles.Button2} onSubmit={(e) => handleSubmit(e)}>Zaloguj</button>
                    </div>
                    {error !== "" &&
                    <p style={{color:"#F48FB1"}}>{error}</p>}
                    
                </form>
                <div>
                    <label for="btnSuccess" class="form-label" >Nie masz konta?</label>

                </div>
                <div>
                    <Link className="link" to="register" style={{ textDecoration: "none" }}>Rejestracja</Link>
                </div>
            </div>
        </div>
    )
}