import React, { Component } from 'react'
import styles from './deleteUser.module.css'
class DeleteUser extends Component{
    render(){
        return(
            <div className = {styles.cont}>
            <div className={styles.form_container}>
                    <h2>Podaj usuwanego użytkownika</h2>
            <from>
                <div class="mb-3">
                    <label for="title" class="form-label">Login użytkownika</label>
                    <input type="login" class="form-control" name="Login"/>
                </div>
                <div>
                <button className={styles.Button2}>Usuń</button>
                </div>
            </from>
            </div>
            </div>
        )
        
    }

}
export default DeleteUser;