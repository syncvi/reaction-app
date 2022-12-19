import React, { useState } from 'react'
import axios from "axios"
import styles from './addCategory.module.css'

function AddCategory() {
    const [Nazwa, setNazwa] = useState("");

    const [added, setAdded] = useState(false);

    const handleSubmit = (e) => {
        // prevent the form from refreshing the whole page
        e.preventDefault();

        // set configurations
        const configuration = {
            method: "post",
            url: "http://localhost:8080/routes/Kategoria",
            data: {
                Nazwa
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
        <div className = {styles.cont}>
            <div className={styles.form_container}>
                <h2>Nowa kategoria</h2>
                <from onSubmit={(e) => handleSubmit(e)}>
                    <div class="mb-3">
                        <label for="title" class="form-label">Nazwa</label>
                        <input type="text" class="form-control" name="Imie" onChange={(e) => setNazwa(e.target.value)} />
                    </div>
                    {added ? (
                        <p className="text-success">Category added succesfully</p>
                    ) : (
                        <></>
                    )}
                    <div class="mb-3">
                        <button className={styles.Button2} onClick={(e) => handleSubmit(e)}>Dodaj Kategorie</button>
                    </div>
                </from>

            </div>
        </div>
    )

}
export default AddCategory;