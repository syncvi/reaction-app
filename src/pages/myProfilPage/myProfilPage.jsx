import React, { useState } from "react"
import "./myProfilPage.css"
import axios from "axios"
import DeleteUser from "../../components/deleteUser/deleteUser"
import ChangePassword from "../../components/changePassword/changePassword"
import AddCompany from "../../components/addCompany/addCompany"
import EditUser from "../../components/editUser/editUser"
import AddCategory from "../../components/addCategory/addCategory"

// const dane = {
//     Login: "Uzytkownik_nick", StatusPremium: "Premium", Picture: "jakiesTam", ListFilm: ["Wiedźmin", "Avatar", "Avengers", "Chicago Fire"],
//     ListActors: ["Jacek Rozenek", "Dwayne Johnson", "Kevin Hart", "Johnny Depp"]
// }

export default function Profile() {
    var dane = JSON.parse(localStorage.getItem('userInfo'));

    var check = false
    if (dane !== null && (dane.TypKonta === 'Moderator' || dane.TypKonta === 'Administrator')) check = true
    else check = false

    const handleSubmit = (e) => {
        axios
            .post('http://localhost:8080/routes/Uzytkownik/update', {
                Login: dane.Login,
                StatusPremium: true
            })
            .then(function (response) {
                console.log(response);
            })

        window.localStorage.removeItem('userInfo')
        dane.StatusPremium = true
        localStorage.setItem('userInfo', JSON.stringify(dane));
        window.location.reload(false);
    }
    const [isShownChangePwd, setIsShown2] = useState(false);
    const [isShownDelete, setIsShown1] = useState(false);
    const [isShownAddComp, setIsShown3] = useState(false);
    const [isShownAddCat, setIsShown5] = useState(false);
    const [isShownEditUser, setIsShown4] = useState(false);
    const handleDelete = () => {
        setIsShown1(current => !current);
    }
    const handleChangePwd = () => {
        setIsShown2(current => !current);
    }
    const handleAddCat = () => {
        setIsShown5(current => !current);
    }
    const handleAddComp = () => {
        setIsShown3(current => !current);
    }
    const handleEditUser = () => {
        setIsShown4(current => !current);
    }

    return (
        <div>
            <div class="main">
                <div className="container emp-profile" style={{ marginTop: "100px", marginBottom: "50px", paddingBottom: "20px", paddingTop: "20px" }}>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="profile-img"><img class="img-fluid" src={dane.Zdjęcie} alt="profil" style={{ height: "400px", width: "400px", paddingLeft: "10px" }}></img></div>
                        </div>
                        <div className="col-md-6">
                            <div className="profile-head">
                                <h3 class="login">Witaj {dane.Login}!</h3>
                                {dane.StatusPremium ? (
                                    <h6 class="premium">Premium</h6>
                                ) : (
                                    <div style={{ marginBottom: "0.6rem" }}>
                                        <h6 class="premium">Brak Premium</h6>
                                        <button className="btn btn-success" onClick={(e) => handleSubmit(e)}>Zakup premium</button>
                                    </div>
                                )}
                                <h6 class="premium">{dane.TypKonta}</h6>
                            </div>
                            <div className="row">
                                <div className="col-md-8 pl-5 about-info">
                                    <div className="tab-content profile-tab" id="myTabContent">

                                        <div className="col-md-10">
                                            <label htmlFor="Login"></label>
                                        </div>
                                        <div className="row1">
                                            <div className="col-md-10">
                                                <ul class="ul2">
                                                    <h5>Obserwowane Filmy:</h5>
                                                    {/* {dane.ListFilm.map((data) => (
                                                            <li class="li2">
                                                                {data}
                                                            </li>
                                                        ))} */}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button style={{ minWidth: "100%", marginTop: "20px", background: "#060a1f", color: "white", borderRadius: "10px", fontSize: "20px" }} onClick={() => handleChangePwd()}>Zmień hasło</button>
                    {isShownChangePwd &&
                        <div>
                            <ChangePassword></ChangePassword>
                        </div>

                    }
                    <button style={{ minWidth: "100%", marginTop: "20px", background: "#060a1f", color: "white", borderRadius: "10px", fontSize: "20px" }} onClick={() => handleDelete()}>Usuń Użytkownika</button>
                    {isShownDelete &&
                        <div>
                            <DeleteUser ></DeleteUser>
                        </div>
                    }
                    {check === true &&
                        <div>
                            <button style={{ minWidth: "100%", marginTop: "20px", background: "#060a1f", color: "white", borderRadius: "10px", fontSize: "20px" }} onClick={() => handleAddComp()}>Dodaj Firme</button>
                            {isShownAddComp &&
                                <div>
                                    <AddCompany></AddCompany>
                                </div>
                            }
                            <button style={{ minWidth: "100%", marginTop: "20px", background: "#060a1f", color: "white", borderRadius: "10px", fontSize: "20px" }} onClick={() => handleAddCat()}>Dodaj Kategorię</button>
                            {isShownAddCat &&
                                <div>
                                    <AddCategory></AddCategory>
                                </div>
                            }
                            <button style={{ minWidth: "100%", marginTop: "20px", background: "#060a1f", color: "white", borderRadius: "10px", fontSize: "20px" }} onClick={() => handleEditUser()}>Edytuj Użytkownika</button>
                            {isShownEditUser &&
                                <div>
                                    EditUser here
                                </div>
                            }
                        </div>
                    }
                </div>
            </div>

        </div>
    );
}


