import React, { Component, useState, useEffect } from 'react'
import styles from './deleteUser.module.css'
import axios from 'axios'


function DeleteUser() {
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

    return (
        <div className={styles.cont}>
            <div className={styles.form_container}>
                <h2>Podaj usuwanego użytkownika</h2>
                <from>
                    <div class="mb-3">
                        <label for="title" class="form-label">Login użytkownika</label>
                        <input type="login" class="form-control" name="Login" onChange={(e) => setNazwa(e.target.value)} />
                    </div>
                    <p>Lista Użytkowników</p>
                    <p style={{ fontSize: "12px" }}>{Companies}</p>
                    {added ? (
                        <p className="text-success">Usunięto użytkownika</p>
                    ) : (
                        <></>
                    )}
                    <div>
                        <button className={styles.Button2}>Usuń</button>
                    </div>
                </from>
            </div>
        </div>
    )



}
export default DeleteUser;