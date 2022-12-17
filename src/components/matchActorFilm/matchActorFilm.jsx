import React, { Component } from 'react'
import './matchActorFilm.css'
class MatchActorFilm extends Component{
    render(){
        return(
            <div class="cont1">
                <div className="container">
                    <h2>Podaj Film i Aktora</h2>
            <from>
            <div class="mb-3">
                    <label for="title" class="form-label" style={{fontSize:"22px", fontWeight:"bold", color:"#3b43de"}}>Id Aktora</label>
                    <input type="text" class="form-control" name="Osoba_Id"/>
                </div>
                <div class="mb-3">
                    <label for="title" class="form-label" style={{fontSize:"22px", fontWeight:"bold", color:"#3b43de"}}>Imię Aktora</label>
                    <input type="text" class="form-control" name="Imie"/>
                </div>
                <div class="mb-3">
                    <label for="title" class="form-label" style={{fontSize:"22px", fontWeight:"bold", color:"#3b43de"}}>Nazwisko Aktora</label>
                    <input type="text" class="form-control" name="Nazwisko"/>
                </div>
                <div class="mb-3">
                    <label for="title" class="form-label" style={{fontSize:"22px", fontWeight:"bold", color:"#3b43de"}}>Id Filmu</label>
                    <input type="text" class="form-control" name="Film_Id"/>
                </div>
                <div class="mb-3">
                    <label for="title" class="form-label" style={{fontSize:"22px", fontWeight:"bold", color:"#3b43de"}}>Tytuł Filmu</label>
                    <input type="text" class="form-control" name="Tytul"/>
                </div>
                
                <div>
                    <button className="btn btn-success" style={{marginLeft: "320px", minWidth:"100px", marginBottom:"20px"}}>Dodaj</button>
                </div>
            </from>
            </div>
            </div>
        )
        
    }

}
export default MatchActorFilm;