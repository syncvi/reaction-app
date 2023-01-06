import React, { Component, useEffect, useState } from 'react'
import axios from 'axios'
import styles from './changeFilm.module.css'

function ChangeFilm() {
    const [Film_Id, setId] = useState("");
    const [Tytuł, setTytuł] = useState("");
    const [Data_Wydania, setData] = useState("");
    const [Język, setJęzyk] = useState("");
    const [Długość, setDługość] = useState("");
    const [Opis, setOpis] = useState("");
    const [Zdjęcie, setZdjęcie] = useState("");
    const [parsed, setParsed] = useState("");

    var retrievedObject = JSON.parse(localStorage.getItem('filmTitle'));
    useEffect(() => {
        if(parsed === "") {
            setParsed("parsed")
            setId(retrievedObject.Id)
            setTytuł(retrievedObject.Title)
            setData(retrievedObject.ReleaseDate)
            setJęzyk(retrievedObject.Language)
            setDługość(retrievedObject.Length)
            setOpis(retrievedObject.Description)
            setZdjęcie(retrievedObject.Picture)}
        
    })

    const handleSubmit = (e) => {
        // prevent the form from refreshing the whole page
        e.preventDefault();
        var lstorage = {
            Id: Film_Id,
            Title: Tytuł,
            ReleaseDate: Data_Wydania,
            Length: Długość,
            Description: Opis,
            Picture: Zdjęcie,
            Language: Język
        }
        // set configurations
        const configuration = {
            method: "post",
            url: "http://localhost:8080/routes/Film/update",
            data: {
                Film_Id,
                Tytuł,
                Data_Wydania,
                Długość,
                Opis,
                Zdjęcie,
                Język
            },
        };
        axios(configuration)
            .then(() => {
                window.localStorage.removeItem('filmTitle')
                localStorage.setItem("filmTitle", JSON.stringify(lstorage));
                window.location.reload(false);
            })
            .catch((error) => {
                error = new Error();

            });
    }
    

    return (
        <div className={styles.cont}>
            <div className={styles.form_container}>
                <h3>Edytuj Film</h3>
                <from onSubmit={(e) => handleSubmit(e)}>
                    <div class="mb-3">
                        <label for="title" class="form-label" >Tytuł Filmu</label>
                        <input type="text" class="form-control" name="Tytuł" value={Tytuł} onChange={(e) => setTytuł(e.target.value)}/>
                    </div>
                    <div class="mb-3">
                        <label for="title" class="form-label" >Data Wydania Filmu</label>
                        <input type="text" class="form-control" name="Tytuł" value={Data_Wydania} onChange={(e) => setData(e.target.value)}/>
                    </div>
                    <div class="mb-3">
                        <label for="title" class="form-label" >Język Filmu</label>
                        <input type="text" class="form-control" name="Tytuł" value={Język} onChange={(e) => setJęzyk(e.target.value)}/>
                    </div>
                    <div class="mb-3">
                        <label for="title" class="form-label" >Długość Filmu</label>
                        <input type="text" class="form-control" name="Tytuł" value={Długość} onChange={(e) => setDługość(e.target.value)}/>
                    </div>
                    <div class="mb-3">
                        <label for="title" class="form-label" >Opis Filmu</label>
                        <input type="text" class="form-control" name="Tytuł" value={Opis} onChange={(e) => setOpis(e.target.value)}/>
                    </div>
                    <div class="mb-3">
                        <label for="title" class="form-label" >Zdjęcie Filmu</label>
                        <input type="text" class="form-control" name="Tytuł" value={Zdjęcie}  onChange={(e) => setZdjęcie(e.target.value)}/>
                    </div>
                    <div>
                        <button className={styles.Button2} onClick={(e) => handleSubmit(e)}>Zmień</button>
                    </div>
                </from>
            </div>
        </div>
    )
}
export default ChangeFilm;