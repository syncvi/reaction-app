import React, { Component } from 'react'

class AddCompany extends Component{
    render(){
        return(
            <div class="cont">
                <div className="container">
                    <h2>Nowa Firma Produkcyjna</h2>
            <from>
                <div class="mb-3">
                    <label for="title" class="form-label" style={{fontSize:"22px", fontWeight:"bold", color:"#3b43de"}}>ID</label>
                    <input type="number" class="form-control" name="Firma_Id"/>
                </div>
                <div class="mb-3">
                    <label for="title" class="form-label" style={{fontSize:"22px", fontWeight:"bold", color:"#3b43de"}}>Nazwa</label>
                    <input type="text" class="form-control" name="Nazwa"/>
                </div>
                <div class="mb-3">
                    <label for="title" class="form-label" style={{fontSize:"22px", fontWeight:"bold", color:"#3b43de"}}>Siedziba</label>
                    <input type="text" class="form-control" name="Siedziba"/>
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
export default AddCompany;