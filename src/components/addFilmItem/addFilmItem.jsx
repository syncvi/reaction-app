import React, { Component } from 'react'

class AddFilmItem extends Component{
    render(){
        return(
            <div class="cont">
                <div className="container">
                    <h2>Nowy Film</h2>
            <from>
                <div class="mb-3">
                    <label for="title" class="form-label" style={{fontSize:"22px", fontWeight:"bold", color:"#3b43de"}}>ID</label>
                    <input type="number" class="form-control" name="Id"/>
                </div>
                <div class="mb-3">
                    <label for="title" class="form-label" style={{fontSize:"22px", fontWeight:"bold", color:"#3b43de"}}>Tytuł</label>
                    <input type="text" class="form-control" name="Tytul"/>
                </div>
                <div class="mb-3">
                    <label for="title" class="form-label" style={{fontSize:"22px", fontWeight:"bold", color:"#3b43de"}}>Data Wydania</label>
                    <input type="RRRR-MM-DD" class="form-control" name="DataWydania"/>
                </div>
                <div class="mb-3">
                    <label for="title" class="form-label" style={{fontSize:"22px", fontWeight:"bold", color:"#3b43de"}}>Język</label>
                    <input type="text" class="form-control" name="Jezyk"/>
                </div>
                <div class="mb-3">
                    <label for="title" class="form-label" style={{fontSize:"22px", fontWeight:"bold", color:"#3b43de"}}>Długość</label>
                    <input type="number" class="form-control" name="Długosc"/>
                </div>
                <div class="mb-3">
                    <label for="title" class="form-label" style={{fontSize:"22px", fontWeight:"bold", color:"#3b43de"}}>Opis</label>
                    <input type="text" class="form-control" name="Opis"/>
                </div>
                <div class="mb-3">
                    <label for="title" class="form-label" style={{fontSize:"22px", fontWeight:"bold", color:"#3b43de"}}>Zdjęcie</label>
                    <input type="text" class="form-control" name="Zdjecie"/>
                </div>
            </from>
            </div>
            </div>
        )
        
    }

}
export default AddFilmItem;