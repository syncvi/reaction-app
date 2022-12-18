import React, { Component } from 'react'
import './matchActorFilm.css'
class MatchActorFilm extends Component{
    render(){
        return(
            <div class="cont1">
                <div className="container">
                    <h2>Dodaj osobę do filmu</h2>
            <from>
                <div class="mb-3">
                    <label for="title" class="form-label" style={{fontSize:"22px", fontWeight:"bold", color:"#3b43de"}}>Imię Aktora</label>
                    <input type="text" class="form-control" name="Imie"/>
                </div>
                <div class="mb-3">
                    <label for="title" class="form-label" style={{fontSize:"22px", fontWeight:"bold", color:"#3b43de"}}>Nazwisko Aktora</label>
                    <input type="text" class="form-control" name="Nazwisko"/>
                </div>  
                <div class="mb-3">
                    <label for="title" class="form-label" style={{fontSize:"22px", fontWeight:"bold", color:"#3b43de"}}>Stanowisko Aktora</label>
                    <input type="text" class="form-control" name="Stanowisko"/>
                </div>             
                <div>
                    <button className="btn btn-success" style={{marginLeft: "25vh", marginRight: "45vh",minWidth:"100px", marginBottom:"20px"}}>Dodaj jako aktora</button>
                    <button className="btn btn-success" style={{marginRight: "15vh", marginLeft: "5vh", minWidth:"100px", marginBottom:"20px"}}>Dodaj jako pracownika</button>
                </div>
            </from>
            </div>
            </div>
        )
        
    }

}
export default MatchActorFilm;