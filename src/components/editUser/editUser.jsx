import React, { Component, useState, useEffect } from 'react'
import styles from './editUser.module.css'
import axios from 'axios'
function EditUser (){
    const [Nazwa, setNazwa] = useState("");
    const [Companies, setCompanies] = useState()
    const [added, setAdded] = useState(false);

    useEffect(() => {
        const configuration = {
            method: "get",
            url: `http://localhost:8080/routes/Uzytkownik`,
        };

        axios(configuration).then((res) => {
            var kategorie = ''
            for(var i = 0; i < res.data.length; i++) {
                kategorie = kategorie + ' ' + res.data[i].Login
            }
            setCompanies(kategorie)
        });
    }, [])
        return(
            <div className = {styles.cont}>
            <div className={styles.form_container}>
                    <h3>Edytuj Użytkownika</h3>
            <from>
                <div class="mb-3">
                    <label for="title" class="form-label" >Login</label>
                    <input type="text" class="form-control" name="Tytuł"/>
                </div>
                <div class="mb-3">
                    <label for="title" class="form-label" >E-Mail</label>
                    <input type="text" class="form-control" name="Tytuł"/>
                </div>
                <div class="mb-3">
                    <label for="title" class="form-label" >Hasło</label>
                    <input type="text" class="form-control" name="Tytuł"/>
                </div>
                <div class="mb-3">
                    <label for="title" class="form-label" >StatusPremium</label>
                    <input type="text" class="form-control" name="Tytuł"/>
                </div>
                <div class="mb-3">
                    <label for="title" class="form-label" >TypKonta</label>
                    <input type="text" class="form-control" name="Tytuł"/>
                </div>
                <div class="mb-3">
                    <label for="title" class="form-label" >Zdjęcie</label>
                    <input type="text" class="form-control" name="Tytuł"/>
                </div>
                <p>Lista Użytkowników</p>
                    <p style={{ fontSize: "12px" }}>{Companies}</p>
                    {added ? (
                        <p className="text-success">Usunięto użytkownika</p>
                    ) : (
                        <></>
                    )}
                <div>
                <button className={styles.Button2}>Zmień</button>
                </div>
            </from>
            </div>
            </div>
        )
        
    

}
export default EditUser;