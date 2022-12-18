import React, { Component } from 'react'

class ChangeActor extends Component{
    render(){
        return(
            <div class="cont">
                <div className="container">
                    <h2>Zmień dane aktora</h2>
            <from>
                <div class="mb-3">
                    <label for="title" class="form-label" style={{fontSize:"22px", fontWeight:"bold", color:"#3b43de"}}>ID Aktora</label>
                    <input type="number" class="form-control" name="Aktor_Id"/>
                </div>
                <div class="mb-3">
                    <label for="title" class="form-label" style={{fontSize:"22px", fontWeight:"bold", color:"#3b43de"}}>Imię aktora</label>
                    <input type="text" class="form-control" name="Imie"/>
                </div>
                <div class="mb-3">
                    <label for="title" class="form-label" style={{fontSize:"22px", fontWeight:"bold", color:"#3b43de"}}>Nazwisko aktora</label>
                    <input type="text" class="form-control" name="Nazwisko"/>
                </div>
                <div>
                    <button className="btn btn-success" style={{marginLeft: "320px", minWidth:"100px", marginBottom:"15px"}}>Zmień</button>
                </div>
            </from>
            </div>
            </div>
        )
        
    }

}
export default ChangeActor;