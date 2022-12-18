import React, { useState } from 'react'
import axios from "axios"

export default function AddFilmItem() {
    const [Tytuł, setTitle] = useState("");
    const [Data_Wydania, setReleaseDate] = useState("");
    const [Język, setLanguage] = useState("");
    const [Długość, setLength] = useState("");
    const [Opis, setDescription] = useState("");
    const [Zdjęcie, setImage] = useState("");
    const [added, setAdded] = useState(false);

    const handleSubmit = (e) => {
        // prevent the form from refreshing the whole page
        e.preventDefault();

        // set configurations
        const configuration = {
            method: "post",
            url: "http://localhost:8080/routes/Film",
            data: {
                Tytuł,
                Data_Wydania,
                Język,
                Długość,
                Opis,
                Zdjęcie
            },
        };
        axios(configuration)
            .then(() => {
                setAdded(true)
                
            })
            .catch((error) => {
                error = new Error();

            });
    }
    return (
        <div class="cont">
            <div className="container">
                <h2>Nowy Film</h2>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div class="mb-3">
                        <label for="title" class="form-label" style={{ fontSize: "22px", fontWeight: "bold", color: "#3b43de" }}>Tytuł</label>
                        <input type="text" class="form-control" name="Tytuł" onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div class="mb-3">
                        <label for="title" class="form-label" style={{ fontSize: "22px", fontWeight: "bold", color: "#3b43de" }}>Data Wydania</label>
                        <input type="RRRR-MM-DD" class="form-control" name="DataWydania" onChange={(e) => setReleaseDate(e.target.value)} />
                    </div>
                    <div class="mb-3">
                        <label for="title" class="form-label" style={{ fontSize: "22px", fontWeight: "bold", color: "#3b43de" }}>Język</label>
                        <input type="text" class="form-control" name="Język" onChange={(e) => setLanguage(e.target.value)} />
                    </div>
                    <div class="mb-3">
                        <label for="title" class="form-label" style={{ fontSize: "22px", fontWeight: "bold", color: "#3b43de" }}>Długość</label>
                        <input type="number" class="form-control" name="Długość" onChange={(e) => setLength(e.target.value)} />
                    </div>
                    <div class="mb-3">
                        <label for="title" class="form-label" style={{ fontSize: "22px", fontWeight: "bold", color: "#3b43de" }}>Opis</label>
                        <input type="text" class="form-control" name="Opis" onChange={(e) => setDescription(e.target.value)} />
                    </div>
                    <div class="mb-3">
                        <label for="title" class="form-label" style={{ fontSize: "22px", fontWeight: "bold", color: "#3b43de" }}>Zdjęcie</label>
                        <input type="text" class="form-control" name="Zdjecie" onChange={(e) => setImage(e.target.value)} />
                    </div>
                    <div class="mb-3">
                        <button className="btn btn-success" type="submit" onClick={(e) => handleSubmit(e)}>Dodaj Film</button>
                    </div>
                </form>
                {added ? (
                    <p className="text-success">Movie added succesfully</p>
                ) : (
                    <></>
                )}
            </div>
        </div>
    )



}
