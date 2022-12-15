import React from "react"

const Login = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-7">
                    <h1>Logowanie</h1>
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
                    <button className="btn btn-success">Zaloguj</button>
                </div>
            </div>
        </div>
    )
}
export default Login