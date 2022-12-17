import React, {useRef} from "react"
import {Link} from "react-router-dom"
import './registerPage.css'
const Register = () => {
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);
    const inputRef4 = useRef(null);
    const handleRegister= () =>{
        console.log(inputRef1.current.value + " " +inputRef2.current.value + " " + inputRef3.current.value + " " + inputRef4.current.value);
      }

    return (
        <div class="cont">
        <div className="container">
            <div className="row">
                <div className="col-md-7">
                    <h1>Rejestracja</h1>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" ref={inputRef1}/>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput2" class="form-label">Login</label>
                    <input type="login" class="form-control" id="exampleFormControlInput2" placeholder="Nazwa_Użytkownika" ref={inputRef2}/>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput3" class="form-label">Hasło</label>
                    <input type="password" class="form-control" id="exampleFormControlInput3" placeholder="***********" ref={inputRef3}/>
                </div>
                <div class="mb-3">
                <label for="exampleFormControlInput4" class="form-label">Link do zdjęcia</label>
                    <input type="password" class="form-control" id="exampleFormControlInput4" placeholder="https://paczaizm.pl/content/wp-content/uploads/kiedy-40-letni-typ-doda-zdjecie-profilowe-selfie-wiedzmin-geralt.jpg" ref={inputRef4}/>
                </div>
                <div class="mb-3">
                    <button className="btn btn-success" onClick={handleRegister}>Zarejestruj</button>
                    <label for="btnSuccess" class="form-label" style={{margin:"0px 0px 0px 970px"}}>Już masz konto?</label>
                    <Link className="link" to="/login" style={{textDecoration:"none"}}>Logowanie</Link>
                </div>

            </div>
        </div>
        </div>
    )
}
export default Register