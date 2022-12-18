import React, { Component } from 'react'
import './changeFilm.css'
class ChangeFilm extends Component{
    render(){
        return(
            <div class="cont1">
                <div className="container">
                    <h2>Edytuj Film</h2>
            <from>
                <div class="mb-3">
                    <label for="title" class="form-label" style={{fontSize:"22px", fontWeight:"bold", color:"#3b43de"}}>Tytuł Filmu</label>
                    <input type="text" class="form-control" name="Tytuł"/>
                </div>
                <div>
                    <button className="btn btn-success" style={{marginLeft: "47%", minWidth:"100px", marginBottom:"15px"}}>Zmień</button>
                </div>
            </from>
            </div>
            </div>
        )
        
    }

}
export default ChangeFilm;