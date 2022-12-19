import React from 'react';
import styles from './editUser.module.css'
class EditUser extends React.Component{
    render(){
        return(
            <div className = {styles.cont}>
            <div className={styles.form_container}>
                    <h3>Edytuj Użytkownika</h3>
            <from>
                <div class="mb-3">
                    <label for="title" class="form-label" >Login</label>
                    <input type="text" class="form-control" name="Tytuł"/>
                </div>
                <div class="mb-3">
                    <label for="title" class="form-label" >E-Mail</label>
                    <input type="text" class="form-control" name="Tytuł"/>
                </div>
                <div class="mb-3">
                    <label for="title" class="form-label" >Hasło</label>
                    <input type="text" class="form-control" name="Tytuł"/>
                </div>
                <div class="mb-3">
                    <label for="title" class="form-label" >StatusPremium</label>
                    <input type="text" class="form-control" name="Tytuł"/>
                </div>
                <div class="mb-3">
                    <label for="title" class="form-label" >TypKonta</label>
                    <input type="text" class="form-control" name="Tytuł"/>
                </div>
                <div class="mb-3">
                    <label for="title" class="form-label" >Zdjęcie</label>
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
export default EditUser;