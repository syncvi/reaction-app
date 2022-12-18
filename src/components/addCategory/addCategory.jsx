import React, { useState } from 'react'
import axios from "axios"

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
        <div class="cont1">
            <div className="container">
                <h2>Nowa kategoria</h2>
                <from onSubmit={(e) => handleSubmit(e)}>
                    <div class="mb-3">
                        <label for="title" class="form-label" style={{ fontSize: "22px", fontWeight: "bold", color: "#3b43de" }}>Nazwa</label>
                        <input type="text" class="form-control" name="Imie" onChange={(e) => setNazwa(e.target.value)} />
                    </div>
                    {added ? (
                        <p className="text-success">Category added succesfully</p>
                    ) : (
                        <></>
                    )}
                    <div class="mb-3">
                        <button className="btn btn-success" type="submit" onClick={(e) => handleSubmit(e)}>Dodaj Kategorie</button>
                    </div>
                </from>

            </div>
        </div>
    )

}
export default AddCategory;