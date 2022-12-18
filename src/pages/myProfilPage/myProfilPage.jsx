import React, {Component} from "react"
import "./myProfilPage.css"
import profil from "./images/profile.jpg"
import MatchActorFilm from "../../components/matchActorFilm/matchActorFilm"
import MatchCategoryFilm from "../../components/matchCategoryFilm/matchCategoryFilm"
import DeleteFilm from "../../components/deleteFilm/deleteFilm"
import DeleteActor from "../../components/deleteActor/deleteActor"
import DeleteUser from "../../components/deleteUser/deleteUser"
import ChangePassword from "../../components/changePassword/changePassword"
import ButtonsForModerator from "../../components/buttonsForModerator/buttonsForModerator"

const dane={Login:"Uzytkownik_nick", StatusPremium:"Premium", Picture:"jakiesTam",ListFilm: ["Wiedźmin", "Avatar", "Avengers", "Chicago Fire"],
ListActors:["Jacek Rozenek", "Dwayne Johnson", "Kevin Hart", "Johnny Depp"]}

class Profile extends Component {
    constructor() {
        super();
        this.state = {
            profile: {}
        }
    }

    // componentDidMount() {
    //     fetch('http://localhost:8080/routes/Uzytkownik/user/login')//TU ZMIENIC BO IDK CZY DOBRZE
    //     .then(res => res.json())
    //     .then(user => this.setState({user}, () => console.log('User fetched' , user)))
    // }

	render() {
		return(
            <div>
                <div class="main">
        <div className="container emp-profile" style={{marginTop:"100px", marginBottom:"50px", paddingBottom:"20px", paddingTop:"20px"}}>
            <div className="row">
                <div className="col-md-4">
                    <div className="profile-img"><img class="img-fluid" src={profil} alt="profil" style={{height:"400px", width:"400px", paddingLeft:"10px"}}></img></div>
                </div>
                <div className="col-md-6">
                    <div className="profile-head">
                        <h3 class="login">{dane.Login}</h3>
                        <h6 class="premium">{dane.StatusPremium}</h6>
                        <ul className="nav nav-tabs" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" style={{backgroundColor:"Blue", color:"white"}} id="home-tab" data-toggle="tab" href="#about" role="tab">About</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link active"style={{backgroundColor:"Blue", color:"white"}} id="profile-tab" data-toggle="tab" href="#data" role="tab">Dane</a>
                            </li>
                        </ul>

                    </div>
                    <div className="row">
                <div className="col-md-8 pl-5 about-info">
                    <div className="tab-content profile-tab" id="myTabContent">
                        <div className="tab-pane fade show active" id="about" role="tabpanel" aria-labelledby="home-tab">
                            <div className="col-md-10">
                                <label htmlFor="Login"></label>
                            </div>
                            <div className="row1">
                                <div className="col-md-10">
                                    <p>To jest zakladka about</p>
                                    <p>damy tu pewnie liste followany filmow i aktorow</p>
                                    <ul class="ul2">
                                        <h5>Obserwowane Filmy:</h5>
                                        {dane.ListFilm.map((data) => (
                                            <li class="li2">
                                                {data}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="col-md-10">
                                    <ul class="ul12">
                                        <h5>Obserwowani Aktorzy:</h5>
                                        {dane.ListActors.map((data) => (
                                            <li class="li2">
                                                {data}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                </div>
            </div>
        </div>
        </div>
        {/* <div style={{marginLeft:"470px", marginBottom:"30px"}}>
            <ChangePassword />
        </div>
        <div class="rowek">
        <MatchActorFilm />
        <div class="col">
            <div class="rowek">
                <MatchCategoryFilm />
            </div>
            <div class="rowek" style={{marginTop:"95px"}}>
                <DeleteFilm />
            </div>
        </div>
        </div>
        <div class="rowek">
            <DeleteActor />
            <div class="col">
                <DeleteUser/>
            </div>
        </div> */}
        <div>
            <ButtonsForModerator />
        </div>
        </div>
        );
	}
}

export default Profile