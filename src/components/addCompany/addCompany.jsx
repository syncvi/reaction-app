import React, { Component } from 'react'
import styles from './addCompany.module.css'

class AddCompany extends Component{
    render(){
        return(
            <div className = {styles.cont}>
            <div className={styles.form_container}>
                    <h2>Nowa Firma Produkcyjna</h2>
            <form>
                <div class="mb-3">
                    <label for="title" class="form-label" >Nazwa</label>
                    <input type="text" class="form-control" name="Nazwa"/>
                </div>
                <div class="mb-3">
                    <label for="title" class="form-label" >Siedziba</label>
                    <input type="text" class="form-control" name="Siedziba"/>
                </div>
                <div>
                    <button className={styles.Button2} >Dodaj</button>
                </div>
            </form>
            </div>
            </div>
        )
        
    }

}
export default AddCompany;