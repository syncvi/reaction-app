import React, { Component } from 'react'
import styles from './changePassword.module.css'
class ChangePassword extends Component{
    render(){
        return(
            <div className = {styles.cont}>
            <div className={styles.form_container}>
                    <h3>Podaj nowe hasło</h3>
            <from>
                <div class="mb-3">
                    <label for="title" class="form-label">Nowe Hasło</label>
                    <input type="text" class="form-control" name="Haslo"/>
                </div>
                <div class="mb-3">
                    <label for="title" class="form-label">Potwierdź Hasło</label>
                    <input type="text" class="form-control" name="Haslo"/>
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
export default ChangePassword;