import React from "react"
import "./myProfilPage.css"
import profil from "./images/profile.jpg"

const Profile = () => {
    return (
        <div className="container emp-profile" style={{marginTop:"200px", marginBottom:"200px"}}>
            <div className="row">
                <div className="col-md-4">
                    <div className="profile-img"><img class="img-fluid" src={profil} alt="profil" style={{height:"500px"}}></img></div>
                </div>
                <div className="col-md-6">
                    <div className="profile-head">
                        <h5>Login</h5>
                        <h6>CzyPremium</h6>
                        <ul className="nav nav-tabs" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" id="home-tab" data-toggle="tab" href="#about" role="tab">About</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link active" id="profile-tab" data-toggle="tab" href="#data" role="tab">Dane</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-8 pl-5 about-info">
                    <div className="tab-content profile-tab" id="myTabContent">
                        <div className="tab-pane fade show active" id="about" role="tabpanel" aria-labelledby="home-tab">
                            <div className="col-md-6">
                                <label htmlFor="Login"></label>
                            </div>
                            <div className="col-md-6">
                                <p>blabla</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Profile