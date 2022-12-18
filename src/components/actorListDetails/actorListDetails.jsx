import axios from "axios";
import React, { Component } from "react";

class ActorListDetails extends Component {
    constructor() {
        super()
        this.nameList = []
        this.nameList.push({Imię: "Jakub", Nazwisko: "Ogar"})

    }
    componentWillMount() {
        const test = JSON.parse(localStorage.getItem('filmTitle'));
        const configuration = {
            method: "get",
            url: `http://localhost:8080/routes/Film/findActors/${test.Id}`,

        };
        axios(configuration)
            .then((res) => {
                // set the cookie
                for (var i = 0; i < res.data.Osoba_Id_Osobas.length; i++) {
                    this.nameList.push({ Imię: res.data.Osoba_Id_Osobas[i]["Imię"], Nazwisko: res.data.Osoba_Id_Osobas[i]["Nazwisko"] })
                }

                // redirect user to the auth page
            })
    }
    render() {
        console.log(this.nameList)
       return (
            <ul>
                {this.nameList.map(({Imię, Nazwisko}) => (
                    <p key={Imię}>{Imię} {Nazwisko}</p>
                ))}
            </ul>
        );
    }

}
export default ActorListDetails;