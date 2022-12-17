import React, { Component } from 'react'
import './deleteUser.css'
class DeleteUser extends Component{
    render(){
        return(
            <div class="cont12">
                <div className="container">
                    <h2>Podaj usuwanego użytkownika</h2>
            <from>
                <div class="mb-3">
                    <label for="title" class="form-label" style={{fontSize:"22px", fontWeight:"bold", color:"#3b43de"}}>Login użytkownika</label>
                    <input type="login" class="form-control" name="Login"/>
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
export default DeleteUser;