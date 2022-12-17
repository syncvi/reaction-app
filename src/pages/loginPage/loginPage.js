import React, {useRef} from "react"
import {Link} from "react-router-dom"
import './loginPage.css'

const Login = () => {

    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const handleLogin= () =>{
        localStorage.setItem('CurrentLogin', inputRef1.current.value);
        localStorage.setItem('CurrentPassword', inputRef2.current.value);
      }
    return (
        <div class="cont">
        <div className="container">
            <div className="row">
                <div className="col-md-7">
                    <h1 class="h11">Logowanie</h1>
                </div>
                <div class="mb-3">
                    <label for="login" class="form-label" style={{fontSize:"22px", fontWeight:"bold", color:"#3b43de"}}>Login</label>
                    <input type="text" class="form-control" id="login" ref={inputRef1}/>
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label" style={{fontSize:"22px", fontWeight:"bold", color:"#3b43de"}}>Hasło</label>
                    <input type="password" class="form-control" id="password" ref={inputRef2}/>
                </div>
                <div class="mb-3">
                    <button className="btn btn-success" onClick={handleLogin}>Zaloguj</button>
                    <label for="btnSuccess" class="form-label" style={{margin:"0px 0px 0px 970px"}}>Nie masz konta?</label>
                    <Link className="link" to="register" style={{textDecoration:"none"}}>Rejestracja</Link>
                </div>
            </div>
        </div>
        </div>
    )
}
export default Login