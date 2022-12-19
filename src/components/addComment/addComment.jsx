import React, { Component, useState } from 'react'
import styles from './addComment.module.css'

const dane = { Login: '', Film_Id: 0 }//do przechowywania danych ktory uzytkownik, ktory film
class AddComment extends Component {
    constructor(_Login, _Film_Id) {
        super();
        dane.Login = _Login;
        dane.Film_Id = _Film_Id;
    }
    //na slepo robie css bo nie widze detailsPage -> nie mam bazy xd
    render() {
        return (
            <div className={styles.cont}>
                <div className={styles.form_container}>
                    <h2>Dodaj komentarz</h2>
                    <form>
                        <div class="mb-3">
                            <label for="title" class="form-label" >Treść komentarza</label>
                            <input type="textarea" class="form-control" name="Komentarz" />
                        </div>
                        <div class="mb-3">
                            <label for="title" class="form-label" >Ocena</label>
                            <input type="number" min="0" max="5" class="form-control" name="Komentarz"style={{maxWidth: "10vh"}} />
                        </div>
                        <div>
                            <button type="submit">Dodaj komentarz</button>
                        </div>
                    </form>
                </div>
            </div>
        )

    }

}
export default AddComment;