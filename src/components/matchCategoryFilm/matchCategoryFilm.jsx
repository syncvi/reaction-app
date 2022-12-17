import React, { Component } from 'react'
import './matchCategoryFilm.css'
class MatchCategoryFilm extends Component{
    render(){
        return(
            <div class="cont11">
                <div className="container">
                    <h2>Podaj Film i Kategorie</h2>
            <from>
                <div class="mb-3">
                    <label for="title" class="form-label" style={{fontSize:"22px", fontWeight:"bold", color:"#3b43de"}}>Id Filmu</label>
                    <input type="text" class="form-control" name="Film_Id"/>
                </div>
                <div class="mb-3">
                    <label for="title" class="form-label" style={{fontSize:"22px", fontWeight:"bold", color:"#3b43de"}}>Id Kategorii</label>
                    <input type="number" class="form-control" name="Kategoria_Id"/>
                </div>
                <div>
                    <button className="btn btn-success" style={{marginLeft: "320px", minWidth:"100px", marginBottom:"15px"}}>Dodaj</button>
                </div>
            </from>
            </div>
            </div>
        )
        
    }

}
export default MatchCategoryFilm;