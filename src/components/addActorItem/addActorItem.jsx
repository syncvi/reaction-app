import React, { useState } from 'react'
import axios from "axios"

function AddActorItem (){
    const [Imię, setName] = useState("");
    const [Nazwisko, setSurname] = useState("");
    const [Data_Urodzenia, setDate] = useState("");
    const [Kraj_Pochodzenia, setCountry] = useState("");
    const [Zdjęcie, setImage] = useState("");
    const [added, setAdded] = useState(false);

    const handleSubmit = (e) => {
        // prevent the form from refreshing the whole page
        e.preventDefault();

        // set configurations
        const configuration = {
            method: "post",
            url: "http://localhost:8080/routes/Osoba",
            data: {
                Imię,
                Nazwisko,
                Data_Urodzenia,
                Kraj_Pochodzenia,
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
        return(
            <div class="cont">
                <div className="container">
                    <h2>Nowa osoba</h2>
            <from onSubmit={(e) => handleSubmit(e)}>
                <div class="mb-3">
                    <label for="title" class="form-label" style={{fontSize:"22px", fontWeight:"bold", color:"#3b43de"}}>Imię</label>
                    <input type="text" class="form-control" name="Imie" onChange={(e) => setName(e.target.value)}/>
                </div>
                <div class="mb-3">
                    <label for="title" class="form-label" style={{fontSize:"22px", fontWeight:"bold", color:"#3b43de"}}>Nazwisko</label>
                    <input type="text" class="form-control" name="Nazwisko" onChange={(e) => setSurname(e.target.value)}/>
                </div>
                <div class="mb-3">
                    <label for="title" class="form-label" style={{fontSize:"22px", fontWeight:"bold", color:"#3b43de"}}>Data Urodzenia</label>
                    <input type="RRRR-MM-DD" class="form-control" name="Data_urodzenia" onChange={(e) => setDate(e.target.value)}/>
                </div>
                <div class="mb-3">
                    <label for="title" class="form-label" style={{fontSize:"22px", fontWeight:"bold", color:"#3b43de"}}>Kraj Pochodzenia</label>
                    <input type="text" class="form-control" name="Kraj_Pochodzenia" onChange={(e) => setCountry(e.target.value)}/>
                </div>
                <div class="mb-3">
                    <label for="title" class="form-label" style={{fontSize:"22px", fontWeight:"bold", color:"#3b43de"}}>Zdjęcie</label>
                    <input type="text" class="form-control" name="Zdjecie" onChange={(e) => setImage(e.target.value)}/>
                </div>
                {added ? (
                    <p className="text-success">Person added succesfully</p>
                ) : (
                    <></>
                )}
                <div class="mb-3">
                        <button className="btn btn-success" type="submit" onClick={(e) => handleSubmit(e)}>Dodaj Osobe</button>
                    </div>
            </from>
            
            </div>
            </div>
        )
    
}
export default AddActorItem;