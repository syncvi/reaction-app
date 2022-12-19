import React, { Component } from 'react'
import styles from './changeActor.module.css'

class ChangeActor extends Component{
    render(){
        return(
            <div className = {styles.cont}>
            <div className={styles.form_container}>
                    <h2>Zmień dane aktora</h2>
            <from>
                <div class="mb-3">
                    <label for="title" class="form-label" >Imię aktora</label>
                    <input type="text" class="form-control" name="Imie"/>
                </div>
                <div class="mb-3">
                    <label for="title" class="form-label" >Nazwisko aktora</label>
                    <input type="text" class="form-control" name="Nazwisko"/>
                </div>
                <div class="mb-3">
                    <label for="title" class="form-label" >Data Urodzenia</label>
                    <input type="RRRR-MM-DD" class="form-control" name="Nazwisko"/>
                </div>
                <div class="mb-3">
                    <label for="title" class="form-label" >Kraj Pochodzenia</label>
                    <input type="text" class="form-control" name="Nazwisko"/>
                </div>
                <div>
                    <button type="submit">Zmień</button>
                </div>
            </from>
            </div>
            </div>
        )
        
    }

}
export default ChangeActor;