import React, { Component } from 'react'
import styles from './changeFilm.module.css'
class ChangeFilm extends Component{
    render(){
        return(
            <div className = {styles.cont}>
            <div className={styles.form_container}>
                    <h3>Edytuj Film</h3>
            <from>
                <div class="mb-3">
                    <label for="title" class="form-label" >Tytuł Filmu</label>
                    <input type="text" class="form-control" name="Tytuł"/>
                </div>
                <div class="mb-3">
                    <label for="title" class="form-label" >Data Wydania Filmu</label>
                    <input type="text" class="form-control" name="Tytuł"/>
                </div>
                <div class="mb-3">
                    <label for="title" class="form-label" >Język Filmu</label>
                    <input type="text" class="form-control" name="Tytuł"/>
                </div>
                <div class="mb-3">
                    <label for="title" class="form-label" >Długość Filmu</label>
                    <input type="text" class="form-control" name="Tytuł"/>
                </div>
                <div class="mb-3">
                    <label for="title" class="form-label" >Opis Filmu</label>
                    <input type="text" class="form-control" name="Tytuł"/>
                </div>
                <div class="mb-3">
                    <label for="title" class="form-label" >Zdjęcie Filmu</label>
                    <input type="text" class="form-control" name="Tytuł"/>
                </div>
                <div>
                <button className={styles.Button2}>Zmień</button>
                </div>
            </from>
            </div>
            </div>
        )
        
    }

}
export default ChangeFilm;