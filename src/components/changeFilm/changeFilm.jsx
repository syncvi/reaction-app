import React, { Component } from 'react'

class ChangePassword extends Component{
    render(){
        return(
            <div class="cont">
                <div className="container">
                    <h2>Zmień tytuł filmu</h2>
            <from>
                <div class="mb-3">
                    <label for="title" class="form-label" style={{fontSize:"22px", fontWeight:"bold", color:"#3b43de"}}>ID Filmu</label>
                    <input type="number" class="form-control" name="Film_Id"/>
                </div>
                <div class="mb-3">
                    <label for="title" class="form-label" style={{fontSize:"22px", fontWeight:"bold", color:"#3b43de"}}>Tytuł Filmu</label>
                    <input type="text" class="form-control" name="Tytuł"/>
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
export default ChangePassword;