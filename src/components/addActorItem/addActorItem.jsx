import React, { Component } from 'react'

class AddActorItem extends Component{
    render(){
        return(
            <div class="cont">
                <div className="container">
                    <h2>Nowy Aktor</h2>
            <from>
                <div class="mb-3">
                    <label for="title" class="form-label" style={{fontSize:"22px", fontWeight:"bold", color:"#3b43de"}}>ID</label>
                    <input type="number" class="form-control" name="Id"/>
                </div>
                <div class="mb-3">
                    <label for="title" class="form-label" style={{fontSize:"22px", fontWeight:"bold", color:"#3b43de"}}>Imię</label>
                    <input type="text" class="form-control" name="Imie"/>
                </div>
                <div class="mb-3">
                    <label for="title" class="form-label" style={{fontSize:"22px", fontWeight:"bold", color:"#3b43de"}}>Nazwisko</label>
                    <input type="text" class="form-control" name="Nazwisko"/>
                </div>
                <div class="mb-3">
                    <label for="title" class="form-label" style={{fontSize:"22px", fontWeight:"bold", color:"#3b43de"}}>DataUrodzenia</label>
                    <input type="RRRR-MM-DD" class="form-control" name="Data_urodzenia"/>
                </div>
                <div class="mb-3">
                    <label for="title" class="form-label" style={{fontSize:"22px", fontWeight:"bold", color:"#3b43de"}}>Kraj Pochodzenia</label>
                    <input type="text" class="form-control" name="Kraj_Pochodzenia"/>
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
export default AddActorItem;