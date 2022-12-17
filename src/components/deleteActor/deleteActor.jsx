import React, { Component } from 'react'
import './deleteActor.css'
class DeleteActor extends Component{
    render(){
        return(
            <div class="cont12">
                <div className="container">
                    <h2>Podaj usuwanego aktora</h2>
            <from>
                <div class="mb-3">
                    <label for="title" class="form-label" style={{fontSize:"22px", fontWeight:"bold", color:"#3b43de"}}>Id Aktora</label>
                    <input type="number" class="form-control" name="Osoba_Id"/>
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
export default DeleteActor;