import React, { Component } from 'react'

export default function AddFilmItem (){
    const [Tytuł, setPassword] = useState("");
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
        return(
            <div class="cont">
                <div className="container">
                    <h2>Nowy Film</h2>
            <from>
                <div class="mb-3">
                    <label for="title" class="form-label" style={{fontSize:"22px", fontWeight:"bold", color:"#3b43de"}}>Tytuł</label>
                    <input type="text" class="form-control" name="Tytul"/>
                </div>
                <div class="mb-3">
                    <label for="title" class="form-label" style={{fontSize:"22px", fontWeight:"bold", color:"#3b43de"}}>Data Wydania</label>
                    <input type="RRRR-MM-DD" class="form-control" name="DataWydania"/>
                </div>
                <div class="mb-3">
                    <label for="title" class="form-label" style={{fontSize:"22px", fontWeight:"bold", color:"#3b43de"}}>Język</label>
                    <input type="text" class="form-control" name="Jezyk"/>
                </div>
                <div class="mb-3">
                    <label for="title" class="form-label" style={{fontSize:"22px", fontWeight:"bold", color:"#3b43de"}}>Długość</label>
                    <input type="number" class="form-control" name="Długosc"/>
                </div>
                <div class="mb-3">
                    <label for="title" class="form-label" style={{fontSize:"22px", fontWeight:"bold", color:"#3b43de"}}>Opis</label>
                    <input type="text" class="form-control" name="Opis"/>
                </div>
                <div class="mb-3">
                    <label for="title" class="form-label" style={{fontSize:"22px", fontWeight:"bold", color:"#3b43de"}}>Zdjęcie</label>
                    <input type="text" class="form-control" name="Zdjecie"/>
                </div>
            </from>
            </div>
            </div>
        )
        
    

}
