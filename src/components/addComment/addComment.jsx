import React, { Component ,useState} from 'react'

const dane={Login:'', Film_Id:0}//do przechowywania danych ktory uzytkownik, ktory film
class AddComment extends Component{
    constructor(_Login, _Film_Id){
        super();
        dane.Login=_Login;
        dane.Film_Id=_Film_Id;
    }
    //na slepo robie css bo nie widze detailsPage -> nie mam bazy xd
    render(){
        return(
            <div class="cont" style={{marginLeft:"0px"}}>
                <div className="container">
                    <h2>Dodaj komentarz</h2>
            <from>
                <div class="mb-3">
                    <label for="title" class="form-label" style={{fontSize:"22px", fontWeight:"bold", color:"#3b43de"}}>Treść komentarza</label>
                    <input type="textarea" class="form-control" name="Komentarz"/>
                </div>
                <div class="mb-3">
                    <label for="title" class="form-label" style={{fontSize:"22px", fontWeight:"bold", color:"#3b43de"}}>Ocena</label>
                    <input type="number" class="form-control" name="Ocena"/>
                </div>
            </from>
            </div>
            </div>
        )
        
    }

}
export default AddComment;