import React, { Component } from 'react'
import './deleteFilm.css'
class DeleteFilm extends Component{
    render(){
        return(
            <div class="cont12">
                <div className="container">
                    <h2>Podaj usuwany film</h2>
            <from>
                <div class="mb-3">
                    <label for="title" class="form-label" style={{fontSize:"22px", fontWeight:"bold", color:"#3b43de"}}>Tytuł Filmu</label>
                    <input type="text" class="form-control" name="Tytul"/>
                </div>
                <div>
                    <button className="btn btn-success" style={{marginLeft: "320px", minWidth:"100px", marginBottom:"15px"}}>Usuń</button>
                </div>
            </from>
            </div>
            </div>
        )
        
    }

}
export default DeleteFilm;