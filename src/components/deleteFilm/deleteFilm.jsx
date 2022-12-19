import React, { Component } from 'react'
import styles from'./deleteFilm.module.css'
class DeleteFilm extends Component{
    render(){
        return(
            <div className = {styles.cont}>
            <div className={styles.form_container}>
                    <h2>Czy na pewno?</h2>
                    <form><button className={styles.Button2}>Tak</button>
                        <button className={styles.Button2}>Anuluj</button></form>
                    </div>
                    
                    </div>
)}}
export default DeleteFilm;