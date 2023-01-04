import React, { Component, useState, useEffect } from 'react'
import axios from 'axios'
import styles from './addComment.module.css'
function AddComment () {
    const [Komentarz, setKomentarz] = useState("");
    const [Ocena, setOcena] = useState("");
    
    const [added, setAdded] = useState(false);
    var retrievedObject = JSON.parse(localStorage.getItem('filmTitle'));
    var dane = JSON.parse(localStorage.getItem('userInfo'));
    var Film_Id = retrievedObject.Id
    var Login = dane.Login
    const handleSubmit = (e) => {
        // prevent the form from refreshing the whole page
        e.preventDefault();

        // set configurations
        const configuration = {
            method: "post",
            url: "http://localhost:8080/routes/Opinia",
            data: {
                Film_Id,
                Login,
                Komentarz,
                Ocena
            },
        };
        axios(configuration)
            .then(() => {
                window.location.reload(false);
            })
            .catch((error) => {
                error = new Error();

            });
    }
 
        return (
            <div className={styles.cont}>
                <div className={styles.form_container}>
                    <h2>Dodaj komentarz</h2>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <div class="mb-3">
                            <label for="title" class="form-label" >Treść komentarza</label>
                            <input type="textarea" class="form-control" name="Komentarz" onChange={(e) => setKomentarz(e.target.value)}/>
                        </div>
                        <div class="mb-3">
                            <label for="title" class="form-label" >Ocena</label>
                            <input type="number" min="0" max="5" class="form-control" name="Komentarz"style={{maxWidth: "10vh"}}onChange={(e) => setOcena(e.target.value)} />
                        </div>
                        {added ? (
                        <p className="text-success">Comment added succesfully</p>
                    ) : (
                        <></>
                    )}
                        <div>
                            <button type="submit" onClick={(e) => handleSubmit(e)}>Dodaj komentarz</button>
                        </div>
                    </form>
                </div>
            </div>
        )

}
export default AddComment;