import React, { useState } from 'react'
import axios from 'axios'
import './matchActorFilm.css'

function MatchActorFilm() {
    const [Imię, setName] = useState("");
    const [Nazwisko, setSurname] = useState("");
    const [Stanowisko, setJob] = useState("");
    var filmInfo = JSON.parse(localStorage.getItem('filmTitle'));
    var Film_Id = filmInfo.Id;
    console.log(Film_Id)
    const [type, setType] = useState("");

    const getId = () => {
        const configuration = {
            method: "post",
            url: "http://localhost:8080/routes/Osoba/findId",
            data: {
                Imię,
                Nazwisko
            },
        };
        axios(configuration)
            .then(function (response) {
                console.log(response.data.Osoba_Id);
                localStorage.setItem('Osoba_Id', JSON.stringify(response.data.Osoba_Id))
            })
            .catch((error) => {
                console.log(error);
                error = new Error();

            });

    }
    const handleSubmit = (e) => {
        // prevent the form from refreshing the whole page
        e.preventDefault();
        getId()
        var Osoba_Id = 0
        setTimeout(Osoba_Id = JSON.parse(localStorage.getItem('Osoba_Id')), 1500);
        if (type === 'Pracownik') {
            var configuration = {
                method: "post",
                url: "http://localhost:8080/routes/Film_Pracownik",
                data: {
                    Film_Id,
                    Osoba_Id,
                    Stanowisko,
                },
            };
        }
        if (type === "Aktor") {
            var Rola = Stanowisko;
            var configuration = {
                method: "post",
                url: "http://localhost:8080/routes/Film_Aktor",
                data: {
                    Film_Id,
                    Osoba_Id,
                    Rola,
                },
            };
        }
        // set configurations

        axios(configuration)
            .then(() => {
            })
            .catch((error) => {
                error = new Error();

            });


    }
    return (
        <div class="cont1">
            <div className="container">
                <h2>Dodaj osobę do filmu</h2>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div class="mb-3">
                        <label class="form-label" style={{ fontSize: "22px", fontWeight: "bold", color: "#3b43de" }}>Imię Osoby</label>
                        <input type="text" class="form-control" name="Imie" onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div class="mb-3">
                        <label class="form-label" style={{ fontSize: "22px", fontWeight: "bold", color: "#3b43de" }}>Nazwisko Osoby</label>
                        <input type="text" class="form-control" name="Nazwisko" onChange={(e) => setSurname(e.target.value)} />
                    </div>
                    <div class="mb-3">
                        <label class="form-label" style={{ fontSize: "22px", fontWeight: "bold", color: "#3b43de" }}>Stanowisko Osoby</label>
                        <input type="text" class="form-control" name="Stanowisko" onChange={(e) => setJob(e.target.value)} />
                    </div>
                    <div>
                        <button className="btn btn-success" style={{ marginLeft: "20%", marginRight: "45vh", minWidth: "100px", marginBottom: "20px" }} onClick={() => (setType('Aktor'))} onSubmit={(e) => handleSubmit(e)}>Dodaj jako aktora</button>
                        <button className="btn btn-success" style={{ marginRight: "20%", minWidth: "100px", marginBottom: "20px" }} onClick={() => (setType('Pracownik'))} onSubmit={(e) => handleSubmit(e)}>Dodaj jako pracownika</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default MatchActorFilm;