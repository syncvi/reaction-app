import React, {useState} from "react"
import { Link} from "react-router-dom"
import axios from "axios"
import './registerPage.css'


export default function Register() {
    // initial state
    const [EMail, setEmail] = useState("");
    const [Hasło, setPassword] = useState("");
    const [Login, setLogin] = useState("");
    const [Zdjęcie, setImage] = useState("");
    const [register, setRegister] = useState(false);

    const handleSubmit = (e) => {
        // prevent the form from refreshing the whole page
        e.preventDefault();

        // set configurations
        const configuration = {
            method: "post",
            url: "http://localhost:8080/routes/Uzytkownik/user/register",
            data: {
                Login,
                EMail,
                Hasło,
                Zdjęcie
            },
        };

        // make the API call
        axios(configuration)
            .then((result) => {
                setRegister(true);

            })
            .catch((error) => {
                error = new Error();
                
            });
    };
    return (
        <div class="cont">
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <h1>Rejestracja</h1>
                    </div>
                    <form onSubmit={(e) => handleSubmit(e)} action="http://localhost:3000/movies">
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Email address</label>
                            <input type="email" class="form-control" name="EMail" placeholder="Your_Name@mail.com" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput2" class="form-label">Login</label>
                            <input type="login" class="form-control" name="Login" placeholder="Nazwa_Użytkownika" onChange={(e) => setLogin(e.target.value)} />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput3" class="form-label">Hasło</label>
                            <input type="password" class="form-control" name="Hasło" placeholder="***********" onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput4" class="form-label">Link do zdjęcia</label>
                            <input type="text" class="form-control" name="Zdjęcie" placeholder="https://paczaizm.pl/content/geralt.jpg" onChange={(e) => setImage(e.target.value)} />
                        </div>
                        <div class="mb-3">
                            <button className="btn btn-success" type="submit" onClick={(e) => handleSubmit(e)}>Zarejestruj</button>
                            <label for="btnSuccess" class="form-label" style={{ margin: "0px 0px 0px 970px" }}>Już masz konto?</label>
                            <Link className="link" to="/login" style={{ textDecoration: "none" }}>Logowanie</Link>
                        </div>
                    </form>
                    {register ? (
                        <p className="text-success">You Are Registered Successfully</p>
                    ) : (
                        <p className="text-danger">You Are Not Registered</p>
                    )}
                </div>
            </div>
        </div>
    )
}