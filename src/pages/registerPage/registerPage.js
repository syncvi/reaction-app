import React from "react"
import {Link} from "react-router-dom"
const Register = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-7">
                    <h1>Rejestracja</h1>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Login</label>
                    <input type="login" class="form-control" id="exampleFormControlInput1" placeholder="Nazwa_Użytkownika"/>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Hasło</label>
                    <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="***********"/>
                </div>
                <div class="mb-3">
                    <label for="formFileSm" class="form-label">Zdjęcie profilowe</label>
                    <input class="form-control form-control-sm" id="formFileSm" type="file"/>
                </div>
                <div class="mb-3">
                    <button className="btn btn-success">Zarejestruj</button>
                    <label for="btnSuccess" class="form-label" style={{margin:"0px 0px 0px 970px"}}>Już masz konto?</label>
                    <Link className="link" to="/login" style={{textDecoration:"none"}}>Logowanie</Link>
                </div>

            </div>
        </div>
    )
}
export default Register