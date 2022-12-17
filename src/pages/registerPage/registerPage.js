import React from "react"
import { Link} from "react-router-dom"
import axios from "axios"
import './registerPage.css'
//const bcrypt = require("bcrypt");



class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Login: '',
            EMail: '',
            Hasło: '',
            StatusPremium: false,
            TypKonta: 'Użytkownik',
            Zdjęcie: ''
        }
    }

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    handleSubmit = e => {
        e.preventDefault();

        const { Login,
            EMail,
            Hasło,
            StatusPremium,
            TypKonta,
            Zdjęcie } = this.state;

        const Użytkownik = {
            Login,
            EMail,
            Hasło,
            StatusPremium,
            TypKonta,
            Zdjęcie
        };

        axios
            .post('http://localhost:8080/routes/Uzytkownik', Użytkownik)
            .then(() => console.log('User Registered'))
            .catch(err => {
                console.error(err);
            });
    };

    render() {
        return (
            <div class="cont">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <h1>Rejestracja</h1>
                        </div>
                        <form onSubmit={this.handleSubmit} action="http://localhost:3000/movies">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                <input type="email" class="form-control" name="EMail" placeholder="Your_Name@mail.com" onChange={this.handleInputChange} />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput2" class="form-label">Login</label>
                                <input type="login" class="form-control" name="Login" placeholder="Nazwa_Użytkownika" onChange={this.handleInputChange} />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput3" class="form-label">Hasło</label>
                                <input type="password" class="form-control" name="Hasło" placeholder="***********" onChange={this.handleInputChange} />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput4" class="form-label">Link do zdjęcia</label>
                                <input type="text" class="form-control" name="Zdjęcie" placeholder="https://paczaizm.pl/content/geralt.jpg" onChange={this.handleInputChange} />
                            </div>
                            <div class="mb-3">
                                <button className="btn btn-success" type="submit">Zarejestruj</button>
                                <label for="btnSuccess" class="form-label" style={{ margin: "0px 0px 0px 970px" }}>Już masz konto?</label>
                                <Link className="link" to="/login" style={{ textDecoration: "none" }}>Logowanie</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}



export default Register