import React, { Component, useState } from 'react'
import './matchCategoryFilm.css'
import axios from 'axios'
function MatchCategoryFilm() {
    const [Nazwa, setName] = useState("");
    var filmInfo = JSON.parse(localStorage.getItem('filmTitle'));
    var Film_Id = filmInfo.Id;

    const handleSubmit = (e) => {
        e.preventDefault();

        const configuration = {
            method: "post",
            url: "http://localhost:8080/routes/Kategoria/findId",
            data: {
                Nazwa,
            },
        };
        console.log(configuration);
        axios(configuration)
            .then(function (response) {
                console.log("response")
                console.log(response);
                var Kategoria_Id =  response.data.Kategoria_Id
                console.log("Resp data " + response.data.Kategoria_Id)
                var configuration2 = {
                    method: "post",
                    url: "http://localhost:8080/routes/Film_Kategoria",
                    data: {
                        Kategoria_Id,
                        Film_Id
                        
                    },
                };
                console.log(configuration2);
                axios(configuration2)
                    .then(() => {
                    })
                    .catch((error) => {
                        console.log("Errorr2")
                        console.log(error)
                        error = new Error();

                    });
            })
            .catch((error) => {
                console.log("error");
                console.log(error);
                error = new Error();

            });
    }
    return (
        <div class="cont11">
            <div className="container">
                <h2>Podaj Film i Kategorie</h2>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div class="mb-3">
                        <label for="title" class="form-label" style={{ fontSize: "22px", fontWeight: "bold", color: "#3b43de" }} >Nazwa Kategorii</label>
                        <input type="text" class="form-control" name="Kategoria_Id" onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div>
                        <button className="btn btn-success" style={{ marginLeft: "320px", minWidth: "100px", marginBottom: "15px" }} onSubmit={(e) => handleSubmit(e)}>Dodaj</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default MatchCategoryFilm;